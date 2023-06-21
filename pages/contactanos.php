<snippet>
  <content>
    <!DOCTYPE html>
    <html lang="es">

    <head>

      <title>AQUALIM-Laboratorio Ambiental </title>

      <meta name="google-site-verification" content=" google65a6ed9d2901edca">
      <meta name="description"
        content="AQUALIM es una empresa Casanareña acreditada por el IDEAM, dedicada a la prestación de servicios de laboratorio ambiental en la matriz de aguas, aplicando el sistema de gestión basado en la norma NTC-ISO/IEC17025:2005.">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

      <link href="../css/bootstrap.css" rel="stylesheet" type="text/css">
      <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
      <link href="http://antocas.com/blog/wp-content/themes/fantasia/images/favicon.ico" rel="icon"
        type="image/x-icon" />
      <script src="https://www.google.com/recaptcha/api.js?onload=myCallBack&render=explicit" async defer></script>
      <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
      <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
      <link rel="stylesheet" type="text/css" href="../engine1/style.css" />
      <script type="text/javascript" src="../js/script.js"></script>
    </head>

    <body oncontextmenu="return false" onkeydown="return true">
        <?php
          if ($_SERVER["REQUEST_METHOD"] == "POST") {
              $nombre = $_POST["nombre"];
              $emailremitente = "correspondencia@aqualim.com";
              $email = $_POST["email"];
              $opcion = $_POST["opcion"];
              $mensaje = $_POST["mensaje"];

              if (empty($nombre) || empty($email) || empty($opcion) || empty($mensaje) || empty($emailremitente)) {
                  echo 'Por favor, completa todos los campos.';
              } else {
                $_SERVER;
                  $to = $opcion;
                  $subject = 'Mensaje de contacto';
                  $message = "Buen día, mi nombre es: " . $nombre . "Te contacto desde www.aqualim.com". "\n" . $mensaje . "\n" . "Remitente: ". $email;
                  $headers = 'From: ' . $emailremitente . "\r\n" .
                      'Reply-To: ' . $emailremitente . "\r\n" .
                      'X-Mailer: PHP/' . phpversion();

                  if (mail($to, $subject, $message, $headers)) {
                    $_SESSION['message'] = 'El correo se ha enviado correctamente.';
                  } else {
                    $_SESSION['message'] = 'Ocurrió un error al enviar el correo.';
                  }
              }
    }
    ?>
      <div id="menu"></div>

      <div id="organizar">

        <div id="carrousel"></div>

        <div class="contactanos">
          <h2>Contactanos</h2>
          <div class="formulario">
            <div class="textos">
              <p>Informacion de contacto</p>
              <br>
              <p>Carrera 23 N° 19-15 Yopal- Casanare</p>
              <p>Cel 3142296223 / 3103490629</p>
              <br>
              <p>Nuestras redes</p>
              <ul id="m-soc">
                <li><a class="twitter" href="https://twitter.com/aqualimlab" target="_blank"
                    rel="noopener noreferrer"><span>Seguir en Twitter</span></a></li>
                <li><a class="facebook" href="https://www.facebook.com/Aqualimlab/" target="_blank"
                    rel="noopener noreferrer"><span>Facebook</span></a>
                </li>
                <li><a class="whatsapp" href="https://web.whatsapp.com/" target="_blank"
                    rel="noopener noreferrer"><img src="../assets/icons/whatsapp.webp" alt="WhatsApp"><span>WhatsApp</span></a>
                </li>
              </ul>
            </div>
            <div class="form">
              <p>Dejanos un mensaje <span class="requiere">*</span></p>
              <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                <input type="text" placeholder="Nombre completo *" name="nombre">
                <input type="email" placeholder="Correo electronico *" name="email">
                <select name="opcion">
                  <option selected disabled>Seleccione una opción de contacto</option>
                  <option value="gerencia@aqualim.com">Gerencia</option>
                  <option value="servicioalcliente@aqualim.com">Calidad</option>
                  <option value="contabilidad@aqualim.com">Contabilidad</option>
                  <option value="facturacion@aqualim.com">Facturacion</option>
                  <option value="cotizaciones@aqualim.com">Cotizaciones</option>
                  <option value="coordinaciondereportes@aqualim.com">Reportes</option>
                  <option value="daniel20001989@gmail.com">prueba</option>
                </select>
                <textarea placeholder="Escribe tu mensaje aquí *" name="mensaje"></textarea>

                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>

        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <script src="../js/esqueleto/carrousel.js"></script>
        <script type="text/javascript" src="../engine1/jquery.js"></script>
        <script type="text/javascript" src="../engine1/wowslider.js"></script>
        <script type="text/javascript" src="../engine1/script.js"></script>
        <script src="../js/esqueleto/menu.js"></script>
        <script src="../js/esqueleto/footer.js"></script>
    </body>

    </html>
  </content>
</snippet>