<?php
    require_once "Models/Cliente.php";

    switch($_SERVER['REQUEST_METHOD']){
        case 'GET':
            echo json_encode(Cliente::getAll());
            break;

        case 'POST':
            // Leer los datos enviados en la petición POST
            $data = json_decode(file_get_contents("php://input"), true);

            if ($data) {
                $fecha = $data['fecha'] ?? null;
                $hora = $data['hora'] ?? null;
                $ipUsuario = $_SERVER['REMOTE_ADDR']; // Capturar la IP del cliente

                if ($fecha && $hora) {
                    $result = Cliente::guardarDatos($fecha, $hora, $ipUsuario);
                    if ($result) {
                        echo json_encode([
                            "status" => "success",
                            "message" => "Datos guardados exitosamente"
                        ]);
                    } else {
                        echo json_encode([
                            "status" => "error",
                            "message" => "No se pudo guardar la información"
                        ]);
                    }
                } else {
                    echo json_encode([
                        "status" => "error",
                        "message" => "Faltan campos obligatorios: fecha y hora"
                    ]);
                }
            } else {
                echo json_encode([
                    "status" => "error",
                    "message" => "No se recibieron datos en la petición"
                ]);
            }
            break;

        default:
            break;    
    }