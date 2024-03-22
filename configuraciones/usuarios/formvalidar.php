<?php
session_start();
if($_SERVER["REQUEST_METHOD"]=="POST"){
    include("conexion.php");

    $email=(isset($_POST['email']))?htmlspecialchars($_POST['email']):null;
    $password=(isset($_POST['password']))?htmlspecialchars($_POST['password']):null;

    try{
        $pdo=new PDO('mysql=host='.$direccionservidor.' ;dbname='.$baseDatos, $usuarioDB, $contrasenaDB);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql='SELECT * FROM registrousuarios WHERE email=:email';
        $sentencia= $pdo->prepare($sql);
        $sentencia->execute(['email'=>$email]);

        $usuarios=$sentencia->fetch(PDO::FETCH_ASSOC);
        $formvalidar=false;

        foreach($usuarios as $user){
            if(password_verify($password, $user['password'])){
                $_SESSION['usuario_id']=$user['id'];
            $formvalidar=true;
            }
        }

    }catch(PDOException $e){

    }

}
?>