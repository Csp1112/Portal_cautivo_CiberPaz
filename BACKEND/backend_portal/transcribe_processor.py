import boto3
import time
import os

def start_transcription_job(s3_client, transcribe_client, bucket_name, file_key, region='us-west-2'):
    """
    Inicia un trabajo de transcripción con validación detallada
    """
    try:
        # Verificar existencia del objeto en S3
        try:
            s3_client.head_object(Bucket=bucket_name, Key=file_key)
        except Exception as e:
            print(f"❌ Error: El archivo {file_key} no existe o no es accesible. Detalles: {e}")
            return None

        # Preparar el nombre del trabajo de transcripción
        job_name = f"transcription_{int(time.time())}_{os.path.splitext(os.path.basename(file_key))[0]}"
        s3_uri = f"s3://{bucket_name}/{file_key}"

        # Validar extensión de archivo
        file_ext = os.path.splitext(file_key)[1][1:].lower()
        valid_extensions = ['mp4', 'mov', 'wav', 'mp3', 'flac', 'ogg']
        if file_ext not in valid_extensions:
            print(f"❌ Formato de archivo no soportado: {file_ext}")
            return None

        # Iniciar trabajo de transcripción
        response = transcribe_client.start_transcription_job(
            TranscriptionJobName=job_name,
            Media={'MediaFileUri': s3_uri},
            MediaFormat=file_ext,
            LanguageCode='es-ES',  # Español
            OutputBucketName=bucket_name,
            Settings={
                'ShowSpeakerLabels': True,
                'MaxSpeakerLabels': 10
            }
        )

        print(f"✅ Trabajo de transcripción iniciado para {file_key}")
        return job_name

    except Exception as e:
        print(f"❌ Error al iniciar transcripción para {file_key}: {e}")
        return None

def get_video_files(s3_client, bucket_name, video_extensions=['.mp4', '.mov', '.wav', '.mp3', '.flac', '.ogg']):
    """
    Obtiene una lista de archivos de audio/video en el bucket
    """
    video_files = []
    
    # Listar objetos en el bucket
    try:
        paginator = s3_client.get_paginator('list_objects_v2')
        for result in paginator.paginate(Bucket=bucket_name):
            for obj in result.get('Contents', []):
                # Verificar si el archivo tiene una extensión válida
                if any(obj['Key'].lower().endswith(ext) for ext in video_extensions):
                    video_files.append(obj['Key'])
    except Exception as e:
        print(f"Error al listar archivos en el bucket: {e}")
    
    return video_files

def transcribe_all_videos(bucket_name, region='us-west-2', max_concurrent_jobs=10):
    """
    Transcribe todos los archivos de audio/video en un bucket S3
    """
    # Crear clientes de S3 y Transcribe
    s3_client = boto3.client('s3', region_name=region)
    transcribe_client = boto3.client('transcribe', region_name=region)

    # Obtener lista de archivos
    media_files = get_video_files(s3_client, bucket_name)
    
    if not media_files:
        print("No se encontraron archivos de audio/video en el bucket.")
        return

    # Almacenar trabajos de transcripción
    transcription_jobs = []
    completed_jobs = []
    failed_jobs = []

    # Iniciar trabajos de transcripción
    for media_file in media_files:
        # Limitar trabajos concurrentes
        while len(transcription_jobs) >= max_concurrent_jobs:
            time.sleep(30)
            # Limpiar trabajos completados o fallidos
            transcription_jobs = [
                job for job in transcription_jobs 
                if transcribe_client.get_transcription_job(TranscriptionJobName=job)['TranscriptionJob']['TranscriptionJobStatus'] 
                not in ['COMPLETED', 'FAILED']
            ]

        job_name = start_transcription_job(s3_client, transcribe_client, bucket_name, media_file, region)
        if job_name:
            transcription_jobs.append(job_name)

    # Monitorear trabajos restantes
    while transcription_jobs:
        for job_name in list(transcription_jobs):
            try:
                response = transcribe_client.get_transcription_job(TranscriptionJobName=job_name)
                status = response['TranscriptionJob']['TranscriptionJobStatus']
                failure_reason = response['TranscriptionJob'].get('FailureReason', 'No reason specified')

                if status == 'COMPLETED':
                    print(f"✅ Transcripción completada: {job_name}")
                    print(f"Archivo de transcripción: {response['TranscriptionJob']['Transcript']['TranscriptFileUri']}")
                    completed_jobs.append(job_name)
                    transcription_jobs.remove(job_name)
                
                elif status == 'FAILED':
                    print(f"❌ Transcripción fallida: {job_name}")
                    print(f"Razón del fallo: {failure_reason}")
                    failed_jobs.append((job_name, failure_reason))
                    transcription_jobs.remove(job_name)

            except Exception as e:
                print(f"Error al verificar trabajo {job_name}: {e}")

        # Esperar antes de la próxima verificación
        if transcription_jobs:
            time.sleep(30)  # Esperar 30 segundos entre verificaciones

    # Resumen final
    print("\n--- Resumen ---")
    print(f"Total de archivos: {len(media_files)}")
    print(f"Transcripciones completadas: {len(completed_jobs)}")
    print(f"Transcripciones fallidas: {len(failed_jobs)}")
    
    # Detalles de trabajos fallidos
    if failed_jobs:
        print("\nDetalles de trabajos fallidos:")
        for job_name, reason in failed_jobs:
            print(f"- {job_name}: {reason}")

# Configuración
BUCKET_NAME = 'bucket-prueba-tiktok' 
REGION = 'us-west-2'

# Ejecutar transcripción de todos los videos
transcribe_all_videos(BUCKET_NAME, REGION)