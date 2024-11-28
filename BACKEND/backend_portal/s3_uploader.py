import boto3
import requests
from tiktok_scraper import scrape_tiktok
import yt_dlp  # Biblioteca más robusta para descargar videos

def download_tiktok_video(video_url):
    """
    Descargar video de TikTok usando yt-dlp
    """
    ydl_opts = {
        'format': 'mp4',
        'outtmpl': '%(id)s.%(ext)s',
        'no_color': True,
        'quiet': True,
    }
    
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        try:
            info_dict = ydl.extract_info(video_url, download=True)
            filename = ydl.prepare_filename(info_dict)
            return filename
        except Exception as e:
            print(f"Error descargando video: {e}")
            return None

def upload_to_s3(bucket_name, video_path):
    """
    Subir video a S3 desde archivo local
    """
    s3 = boto3.client('s3')
    
    try:
        # Subir archivo al bucket
        s3.upload_file(video_path, bucket_name, video_path.split('/')[-1])
        print(f"Video {video_path} subido a S3.")
        
        # Opcional: eliminar archivo local después de subir
        # import os
        # os.remove(video_path)
    
    except Exception as e:
        print(f"Error subiendo a S3: {e}")

def upload_videos_to_s3(account_username, bucket_name, max_videos):
    """
    Obtener y subir videos de TikTok
    """
    # Obtener los IDs de los videos desde el scraper
    video_ids = scrape_tiktok(account_username, max_videos)
    
    for video_id in video_ids:
        video_url = f"https://www.tiktok.com/@{account_username}/video/{video_id}"
        
        # Descargar video
        video_path = download_tiktok_video(video_url)
        
        if video_path:
            # Subir a S3
            upload_to_s3(bucket_name, video_path)
        else:
            print(f"No se pudo descargar el video: {video_url}")

# Configuración
bucket_name = "bucket-prueba-tiktok"
account_username = "ciberpazcolombia"
max_videos = 10

# Llamada a la función para cargar los videos
upload_videos_to_s3(account_username, bucket_name, max_videos)
