import pg8000

# Configuración de la base de datos PostgreSQL
DB_CONFIG = {
    'database': 'tiktok_videos',  # Nombre de la base de datos
    'user': 'postgres',         # Nombre de usuario
    'password': '1234',         # Contraseña
    'host': 'localhost',        # Nombre del servicio de la base de datos en docker-compose
    'port': 5432                # Puerto expuesto
}


# Conexión a la base de datos
def get_connection():
    return pg8000.connect(**DB_CONFIG)

# Insertar un video en la tabla `videos` con categoría inicial y datos por defecto
def insert_video(video_id, category):
    conn = None
    cursor = None
    try:
        conn = get_connection()
        cursor = conn.cursor()
        
        query = """
        INSERT INTO videos (idvideo, categoria, veces_reprodu, caducado)
        VALUES (%s, %s, 0, FALSE)
        ON CONFLICT (idvideo) DO UPDATE
        SET veces_reprodu = videos.veces_reprodu, caducado = videos.caducado; -- No afecta si ya existe
        """
        cursor.execute(query, (video_id, category))
        
        print(f"Video registrado o existente - ID: {video_id}, Categoría: {category}")
        
        conn.commit()
    except Exception as e:
        print(f"Error al insertar en la base de datos: {e}")
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()


# Actualizar la categoría y los datos del video
def update_video(video_id, category, sentiment):
    try:
        conn = get_connection()
        cursor = conn.cursor()
        
        query = """
        UPDATE videos
        SET categoria = %s
        WHERE idvideo = %s;
        """
        cursor.execute(query, (category, video_id))
        
        print(f"Video actualizado - ID: {video_id}, Categoría: {category}, Sentimiento: {sentiment}")
        
        conn.commit()
    except Exception as e:
        print(f"Error al actualizar en la base de datos: {e}")
    finally:
        cursor.close()
        conn.close()