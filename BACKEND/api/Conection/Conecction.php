<?php
   
   class Conecction extends Mysqli{
       function __construct(){
          parent::__construct('localhost', 'root', '', 'usuarios');
          $this->set_charset('utf8');
          $this->connect_error == NULL ? 'Conexion exitosa a la BD': die('Ocurrio un fallo en la conexion');
       }
   }