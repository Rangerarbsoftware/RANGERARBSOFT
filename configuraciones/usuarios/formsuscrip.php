<?php
include("conexion.php");
if($_SERVER["REQUEST_METHOD"]=="POST"){
    
    $errores= array();

    $opcion1=(isset($_POST["opcion1"]))? $_POST["opcion1"]:null;
    $nombre=(isset($_POST["nombre"]))? $_POST["nombre"]:null;
    $apellido=(isset($_POST["apellido"]))? $_POST["apellido"]:null;
    $domicilio=(isset($_POST["domicilio"]))? $_POST["domicilio"]:null;
    $telefono=(isset($_POST["telefono"]))? $_POST["telefono"]:null;
    $email=(isset($_POST["email"]))? $_POST["email"]:null;
    $password=(isset($_POST["password"]))? $_POST["password"]:null;

    if(empty($opcion1)){
        $errores['opcion1']= "Seleccione una Aplicación";
    }
    if(empty($nombre)){
        $errores['nombre']= "Debe ingresar el Nombre";
    }
    if(empty($apellido)){
        $errores['apellido']= "Debe ingresar el Apellido";
    }
    if(empty($domicilio)){
        $errores['domicilio']= "Debe ingresar el Domicilio y Ciudad";
    }
    if(empty($telefono)){
        $errores['telefono']= "Debe ingresar el Teléfono";
    }
    if(empty($email)){
        $errores['email']= "Debe ingresar el Email, es obligatorio";

    }elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $errores['email'] .='Formato de correo incorrecto';    
    }
    if(empty($password)){
        $errores['password']= "Debe ingresar laContraseña";
    }
    if(strlen($password) <10){
        $errores['password']= "La Contraseña no debe ser inferior a 10 carácteres";
    }

    foreach($errores as $error){
        echo "<br/>".$error."<br/>";
    }

    if(empty($errores)){
    
    try{
        $pdo=new PDO('mysql=host='.$direccionservidor.' ;dbname='.$baseDatos, $usuarioDB, $contrasenaDB);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $nuevoPassword=password_hash($password, PASSWORD_DEFAULT);

        $sql="INSERT INTO 'db_rangerarbsoft'(opcion1, nombre, apellido, domicilio, telefono, email, password)
        VALUES (NULL, :opcion1, :nombre, :apellido, :domicilio, :telefono, :email, :password);";
        //Insertar los valores en la tabla usuarios
        $resultado=$pdo->prepare($sql);
        $resultado->execute((array(
            ':opcion1'=>$opcion1,
            ':nombre'=>$nombre,
            ':apellido'=>$apellido,
            ':domicilio'=>$domicilio,
            ':telefono'=>$telefono,
            ':email'=>$email,
            ':password'=>$nuevoPassword
        )));

    }catch(PDOException $e){
        echo "Hubo un error de conexxión".$e->getMessage();
    }
    
    }
    else{
        echo "Verifica los campos vacios";
    }
}
?>