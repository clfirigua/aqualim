<?php


 require_once 'recaptchalib.php';
 $secret = "6LcF9yMUAAAAAIZILT9vKTlBTxRyOnD7IQxBi1gO";
        $ip = $_SERVER['REMOTE_ADDR'];
        $captcha = $_POST['g-recaptcha-response'];
 
       $rsp  = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip$ip");

    
    $result = json_decode($rsp, TRUE);

if ($result['success']) { 
header('Location:http://www.aqualim.com/correo.html');
//Importamos las variables del formulario de contacto

@$nombre = addslashes($_POST['nombre']);
@$correo = addslashes($_POST['correo']);
//@$web = addslashes($_POST['web']);
@$mensaje = addslashes($_POST['descipcion']);



//Preparamos el mensaje de contacto
$cabeceras = "From: $correo\n" //La persona que envia el correo
 . "Reply-To: $email\n";
$asunto = "Mensaje desde la pagina Web"; //asunto aparecera en la bandeja del servidor de correo
$email_to = " gerencia@aqualim.com"; //cambiar por tu email gerencia@aqualim.com
$contenido = "$nombre ha enviado un mensaje desde la web \n"
. "\n"
. "Nombre: $nombre\n"
. "Email: $correo\n"
//. "Sitio Web: $web\n"
. "Mensaje: $mensaje\n"
. "\n";
//Enviamos el mensaje y comprobamos el resultado
if(mail($email_to, $asunto ,$contenido ,$cabeceras )){
	    //ENVIAR!
	    header("Location: correo.html");
	    
}

    


}else{
echo "<script>if(confirm('Upps parece que el codigo de verificacion no es correcto.Deseas continuar?')){ 
document.location='https://www.aqualim.com/correo.html#GerenteAdministrativa';} 
else{ alert('Operacion Cancelada');


}</script>";  
 
   // echo "Upps parece que el codigo de verificacion no es correcto.";
  //echo '<a href="index.html">Clic aqui para regresar</a>';
	}



?>

