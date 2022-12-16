<?php

 require_once 'recaptchalib.php';
 $secret = "6Lf_0CIUAAAAAJokhY2kMvdnM3OuH_nxVcv-xrxT";
        $ip = $_SERVER['REMOTE_ADDR'];
        $captcha = $_POST['g-recaptcha-response'];
 
       $rsp  = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip$ip");

    
    $result = json_decode($rsp, TRUE);

if ($result['success']) {  
header('Location:http://www.aqualim.com/index.html');
//Almacenando los valores recibidos
$sNombre = $_POST['nombre1'];
$sProfesion   = $_POST['profesion'];
$celular = $_POST['celular1'];
$sPara   = "trabajeconnosotros@aqualim.comm";//trabajeconnosotros@aqualim.com
$sDe     = $_POST['email1'];
$sAsunto = "Hoja de vida";


$bHayFicheros = 0;
$sCabeceraTexto = "";
$sAdjuntos = "";

if ($sDe)$sCabeceras = "From:".$sDe."\n";
else $sCabeceras = "";
$sCabeceras .= "MIME-version: 1.0\n";

$sTexto .= "
 Nombre: $sNombre\n
 Profesion: $sProfesion\n
 Celular: $celular\n
 Email: $sDe\n
 \n


".$mensaje." ";


if ($bHayFicheros == 0)
{
$bHayFicheros = 1;
$sCabeceras .= "Content-type: multipart/mixed;";
$sCabeceras .= "boundary=\"--_Separador-de-mensajes_--\"\n";

$sCabeceraTexto = "----_Separador-de-mensajes_--\n";
$sCabeceraTexto .= "Content-type: text/plain;charset=iso-8859-1\n";
$sCabeceraTexto .= "Content-transfer-encoding: 7BIT\n";

$sTexto = $sCabeceraTexto.$sTexto;
}
if ($_FILES['adjunto']['size'] > 0)
{
$sAdjuntos .= "\n\n----_Separador-de-mensajes_--\n";
$sAdjuntos .= "Content-type: ".$_FILES['adjunto']['type'].";name=\"".$_FILES['adjunto']['name']."\"\n";;
$sAdjuntos .= "Content-Transfer-Encoding: BASE64\n";
$sAdjuntos .= "Content-disposition: attachment;filename=\"".$_FILES['adjunto']['name']."\"\n\n";

$oFichero = fopen($_FILES['adjunto']["tmp_name"], 'r');
$sContenido = fread($oFichero, filesize($_FILES['adjunto']["tmp_name"]));
$sAdjuntos .= chunk_split(base64_encode($sContenido));
fclose($oFichero);
}

if ($bHayFicheros)
$sTexto .= $sAdjuntos."\n\n----_Separador-de-mensajes_----\n";



if(mail($sPara, $sAsunto,$sTexto, $sCabeceras )){
	    //ENVIAR!
	    header("Location: index.html");
	    
}


    


}else{
echo "<script>if(confirm('Upps parece que el codigo de verificacion no es correcto.Deseas continuar?')){ 
document.location='http://www.aqualim.com/index.html#Trabajo';} 
else{ alert('Operacion Cancelada'); 
}</script>";  
 
   // echo "Upps parece que el codigo de verificacion no es correcto.";
  //echo '<a href="index.html">Clic aqui para regresar</a>';
	}



?>
