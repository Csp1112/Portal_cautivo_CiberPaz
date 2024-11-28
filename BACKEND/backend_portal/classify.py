import boto3
import json
from database import insert_video

# Crear cliente de AWS S3 y Comprehend
s3 = boto3.client('s3')
comprehend = boto3.client('comprehend')

# Etiquetas de clasificación
labels = {
    "Tecnología y Medio Ambiente": ['tecnología', 'medio ambiente'],
    "Seguridad y Confianza Digital": ['seguridad', 'confianza digital'],
    "Diversidad e Inclusión Digital": ['diversidad', 'inclusión digital'],
    "Herramientas TIC para el trabajo incluyente y seguro": ['herramientas tic', 'trabajo incluyente', 'seguro']
}

# Función para obtener archivos JSON desde S3
def get_s3_files(bucket_name):
    files = []
    response = s3.list_objects_v2(Bucket=bucket_name)
    if 'Contents' in response:
        for item in response['Contents']:
            if item['Key'].endswith('.json'):  # Filtrar solo archivos JSON
                files.append(item['Key'])
    return files

# Función para obtener el contenido de un archivo JSON desde S3
def get_s3_file_content(bucket_name, file_key):
    try:
        response = s3.get_object(Bucket=bucket_name, Key=file_key)
        content = response['Body'].read().decode('utf-8')
        return json.loads(content)
    except Exception as e:
        print(f"Error al obtener el archivo {file_key}: {str(e)}")
        return {}

# Función para clasificar el texto con base en palabras clave
def classify_text(text):
    # Clasificación personalizada basada en las etiquetas definidas
    category = "Sin categoría"
    for cat_name, keywords in labels.items():
        if any(keyword.lower() in text.lower() for keyword in keywords):
            category = cat_name
            break
    return category

def extract_video_id(file_name):
    try:
        # Dividir el nombre por "_" y tomar el tercer elemento, eliminando la extensión
        return file_name.split('_')[2].split('.')[0]
    except IndexError:
        print(f"Error al extraer el ID del archivo: {file_name}")
        return None

def classify_files(bucket_name):
    files = get_s3_files(bucket_name)
    print(f"Archivos encontrados: {files}")
    
    for file in files:
        content = get_s3_file_content(bucket_name, file)
        if 'results' in content and 'transcripts' in content['results']:
            text = content['results']['transcripts'][0]['transcript']
            print(f"Texto analizado del archivo {file}:\n{text}\n")
            
            # Clasificar el texto
            category = classify_text(text)
            
            # Extraer el ID del archivo
            video_id = extract_video_id(file)
            if video_id:
                print(f"Archivo: {file}")
                print(f"ID del video: {video_id}")
                print(f"Categoría: {category}")
                print("-" * 50)
                
                # Insertar en la base de datos
                insert_video(video_id, category)
        else:
            print(f"No se encontró texto para analizar en el archivo {file}.")

bucket_name = 'bucket-prueba-tiktok'
classify_files(bucket_name)
