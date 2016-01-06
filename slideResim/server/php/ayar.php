<?php
session_start();
$zaman = Date("ymdhis");
$_SESSION['urun_sanal_id'] = $_GET["resim_id"];
$_SESSION['resim_id'] =  $_GET["resim_id"];
$_REQUEST['resim_id'] =  $_GET["resim_id"];


if ($_SESSION['resim_id']){
    //
}else{
    if ($_REQUEST['resim_id']){
        $_SESSION['resim_id'] = $_REQUEST['resim_id'];
    }else{
        @mkdir('files/'.$zaman, 0777);
        $_SESSION['resim_id'] = $zaman;
    }

}






?>