<?php
    require_once "Conection/Conecction.php";

    class Cliente{
        public static function getAll(){
            $db= new Conecction();
            $query = "SELECT *FROM users";
            $resultado = $db ->query($query);
            $datos = [];
            if($resultado->num_rows){
                while($row = $resultado->fetch_assoc()){
                    $datos[] = [
                        'id' => $row['User_id'],
                        'fecha' => $row['User_Fecha'],
                        'hora' => $row['User_Hora'],
                        'ip' => $row['User_ip']
                    ];
                }
            }
            return $datos;
        }

        public static function getWhere($id){
            $db= new Conecction();
            $query = "SELECT *FROM users WHERE id = User_id";
            $resultado = $db ->query($query);
            $datos = [];
            if($resultado->num_rows){
                while($row = $resultado->fetch_assoc()){
                    $datos[] = [
                        'id' => $row['User_id'],
                        'fecha' => $row['User_Fecha'],
                        'hora' => $row['User_Hora'],
                        'ip' => $row['User_ip']
                    ];
                }
            }
            return $datos;
        }

        public static function insert($Fecha, $Hora, $ip) {
            $db = new Conecction();
            $query = "INSERT INTO users(User_Fecha, User_Hora, User_ip) VALUES ('$Fecha', '$Hora', '$ip')";
            $db ->query($query);
            if($db->affected_rows){
                return TRUE;
            }
            return FALSE;
        }

        public static function update($id, $Fecha, $Hora, $ip) {
            $db = new Conecction();
            $query = "UPDATE users SET 
            Fecha = '$Fecha', Hora = '$Hora', ip = '$ip' WHERE id = $id";
            $db ->query($query);
            if($db->affected_rows){
                return TRUE;
            }
            return FALSE;
        }

        public static function delete($id){
            $db = new Conecction();
            $squery = "DELETE FROM users WHERE User_id = $id";
            $db->query($query);
            if($db -> affected_rows){
                return TRUE;
            }
            return FALSE;
        }




    }
