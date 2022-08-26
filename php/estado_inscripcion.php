<?php
    session_start();
    
    header('Content-type: text/xml');
    
    echo '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'.
          '<response>'.
            '<nombre>'. $_SESSION['values']['nombre'].'</nombre>'.
            '<apellido>'.$_SESSION['values']['apellido'].'</apellido>'.
            '<matricula>'.$_SESSION['values']['matricula'].'</matricula>'.
            '<telefono>'.$_SESSION['values']['telefono'].'</telefono>'.
            '<correo>'.$_SESSION['values']['correo'].'</correo>'.
            '<tanda>'.$_SESSION['values']['tanda'].'</tanda>'.
            '<curso>'.$_SESSION['values']['curso'].'</curso>'.
          '</response>' ;
?>