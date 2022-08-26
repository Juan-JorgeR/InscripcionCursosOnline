<?php
    $tanda=$_POST['tanda'];
    session_start();
    if(!isset($_SESSION['values']['tanda'])) {
        $_SESSION['values']['tanda']=$tanda;
    }
?>