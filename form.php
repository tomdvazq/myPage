<?php

error_reporting(0);

$nombre = $_POST['name'];
$company = $_POST['company'];
$country = $_POST['country'];
$mail = $_POST['email'];
$work = $_POST['work'];
$message = $_POST['message'];
$bodymail = $_POST['message'];

//Texto//
$header = "Content-Type: text/plain";

// Cuerpo del mail //

$bodymail = "Este mensaje fue enviado por:" . $nombre . ",\r\n";
$bodymail .= "Perteneciente a la compañía:" . $company . ",\r\n";
$bodymail .= "Vive en:" . $country . ",\r\n";
$bodymail .= "Su e-mail es:" . $mail . ",\r\n";
$bodymail .= "Está interesado en un tipo de contratación:" . $work . ",\r\n";
$bodymail .= "Y adjuntó el mensaje:" . $message . ",\r\n";
$bodymail .= "Este e-mail fue enviado el" . date('d/m/Y', time());

//Dirección//

$for = "tomdvazq@gmail.com";
$asunto = "Contacto por trabajo vía tomdvazq.io";

//Función mail//

mail($for, $asunto, utf8_decode($bodymail), $header);

//Redirección//
echo "<script language=Javascript> location.href=\"success.html\";</script>";
die();
?>