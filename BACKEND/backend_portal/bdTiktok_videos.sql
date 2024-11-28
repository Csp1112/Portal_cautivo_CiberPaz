-- Crear tabla videos
CREATE TABLE IF NOT EXISTS videos (
    idvideo VARCHAR(50) PRIMARY KEY,                               -- ID autoincremental
    categoria varchar(50),                                  -- Categoría del video
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,     -- Fecha de creación
    veces_reprodu INT DEFAULT 0,                            -- Número de veces reproducido, inicializa en 0
    caducado BOOLEAN DEFAULT FALSE                          -- Control de caducidad
);

-- Crear función que actualiza la columna "caducado"
CREATE OR REPLACE FUNCTION actualizar_caducidad()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.veces_reprodu >= 3 THEN
        NEW.caducado := TRUE; -- Marca como caducado
    ELSE
        NEW.caducado := FALSE; -- Mantiene no caducado
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Crear trigger que llama a la función en cada UPDATE
CREATE TRIGGER trigger_actualizar_caducidad
BEFORE UPDATE ON videos
FOR EACH ROW
EXECUTE FUNCTION actualizar_caducidad();
