from classify import classify_files  # Importa la función desde classify.py
from database import insert_video    # Asegúrate de que esté disponible

bucket_name = 'bucket-prueba-tiktok'

def main():
    classify_files(bucket_name)
    print("Proceso completado.")

if __name__ == "__main__":
    main()
