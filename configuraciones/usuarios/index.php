<?php
session_start();
if(!isset($_SESSION['usuario_id'])){
    header('location:container-form-suscrip.html');
    exit();
}
?>