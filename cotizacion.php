<?php


 

 require_once 'recaptchalib.php';
 $secret = "6Lf10SIUAAAAADx1tLnT5q76XjAVz2xZ0m24lNrQ";
        $ip = $_SERVER['REMOTE_ADDR'];
        $captcha = $_POST['g-recaptcha-response'];
 
       $rsp  = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip$ip");

    
    $result = json_decode($rsp, TRUE);

if ($result['success']) {  
    
     
  header('Location:http://www.aqualim.com/index.html');
//Importamos las variables del formulario de contacto
$nombre = addslashes($_POST['nombre']);
$nit = addslashes($_POST['nit']);
$mensaje = addslashes($_POST['descripcion']);
$telefono = addslashes($_POST['telefono']);
$email = addslashes($_POST['email']);
 


//Preparamos el mensaje de contacto
$cabeceras = "From: $email\n" //La persona que envia el correo
 . "Reply-To: $email\n";
$asunto = "Cotizacion"; //asunto aparecera en la bandeja del servidor de correo
$email_to = "cotizaciones@aqualim.com"; //cambiar por tu email cotizaciones@aqualim.com
$contenido = "$nombre ha enviado una cotizacion \n"
. "\n"
. "Nombre: $nombre\n"
. "Identificacion: $nit\n"
. "Telefono: $telefono\n"
. "Email: $email\n"
. "Descripcion: $mensaje\n"


. "\n";
if(mail($email_to, $asunto ,$contenido ,$cabeceras )){
	    //ENVIAR!
	    header("Location: index.html");
	    
}

    


}else{
echo "<script>if(confirm('Upps parece que el codigo de verificacion no es correcto.Deseas continuar?')){ 
document.location='http://www.aqualim.com/index.html#Cotice';} 
else{ alert('Operacion Cancelada');


}</script>";  
 
   //echo "Upps parece que el codigo de verificacion no es correcto.";
  //echo '<a href="index.html">Clic aqui para regresar</a>';
	}



?>
