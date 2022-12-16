<?php

 require_once 'recaptchalib.php';
 $secret = "6Lc2EyMUAAAAABwEaF9WYcuOB5UcL5jgHe8D2Hog";
        $ip = $_SERVER['REMOTE_ADDR'];
        $captcha = $_POST['g-recaptcha-response'];
 
       $rsp  = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip$ip");

    
    $result = json_decode($rsp, TRUE);

if ($result['success']) {
header('Location:http://www.aqualim.com/califiquenos.html');
//Importamos las variables del formulario de contacto

@$name = addslashes($_POST['name']);
@$email = addslashes($_POST['email']);

@$selection1=addslashes( $_POST [ 'selection1' ]); 
@$selection2=addslashes( $_POST [ 'selection2' ]); 
@$selection3=addslashes( $_POST [ 'selection3' ]); 
@$selection4=addslashes( $_POST [ 'selection4' ]); 
@$selection5=addslashes( $_POST [ 'selection5' ]); 
@$selection6=addslashes( $_POST [ 'selection6' ]); 
@$selection7=addslashes( $_POST [ 'selection7' ]); 
@$selection8=addslashes( $_POST [ 'selection8' ]); 
@$selection9=addslashes( $_POST [ 'selection9' ]); 
@$selection10=addslashes( $_POST [ 'selection10' ]); 

    @$mensaje = addslashes($_POST['observacion']);

//@$web = addslashes($_POST['web']);




//Preparamos el mensaje de contacto
$cabeceras = "From: $email\n" //La persona que envia el correo
 . "Reply-To: $email\n";
$asunto = "Califiquenos"; //asunto aparecera en la bandeja del servidor de correo
$email_to = "servicioalcliente@aqualim.com"; //cambiar por tu email 
$contenido = "$name ha calificado \n"
. "\n"
. "Nombre: $name\n"
. "Email: $email\n"


//. "Sitio Web: $web\n"
. "Mensaje: $mensaje\n"
."Puntuacion:
1. Las instalaciones del laboratorio son adecuadas y generan confianza   =   $selection1
2.La logística utilizada por el laboratorio para la prestación de sus servicios es adecuada y oportuna  =   $selection2
3.Cuando el cliente tiene un problema con respecto al servicio, una inquietud o una pregunta el encargado del laboratorio muestra sincero interés en solucionarlo rápidamente  =   $selection3
4.Los servicios del laboratorio (incluyendo la presentación del informe de resultados) se realizan dentro del tiempo convenido y sin errores   =   $selection4
5. Los servicios del laboratorio están claramente definidos y difundidos   =   $selection5
6.El laboratorio brinda apoyo técnico-científico   =   $selection6
7.Es fácil contactar al personal encargado del laboratorio   =   $selection7
8.La información recibida del laboratorio es segura y confiable   =  $selection8
9.El trato del personal del laboratorio es amable, respetuoso y genera confianza   =   $selection9
10.La información contenida en los informes de resultados es suficiente y adecuada  =   $selection10
\n"

. "\n";
//Enviamos el mensaje y comprobamos el resultado


if(mail($email_to, $asunto ,$contenido ,$cabeceras )){
	    //ENVIAR!
	    header("Location: califiquenos.html");
	    
}

    


}else{
echo "<script>if(confirm('Upps parece que el codigo de verificacion no es correcto.Deseas continuar?')){ 
document.location='http://www.aqualim.com/califiquenos.html';} 
else{ alert('Operacion Cancelada');


}</script>";  
 
   // echo "Upps parece que el codigo de verificacion no es correcto.";
  //echo '<a href="index.html">Clic aqui para regresar</a>';
	}

?>