<?php
      // Recuperar el mensaje de la variable de sesión
      $message = $_SESSION['message'];

      // Comprobar el mensaje y establecer los parámetros de la notificación
      $title = "Notificación";
      $icon = "success";
      if ($message == 'El correo se ha enviado correctamente.') {
        $text = "¡El correo se ha enviado correctamente!";
      } else {
        $text = "Ocurrió un error al enviar el correo.";
        $icon = "error";
      }
    ?>
swal({
    title: "<?php echo $title; ?>",
    text: "<?php echo $text; ?>",
    icon: "<?php echo $icon; ?>",
    timer: 3000, // 3 segundos
    buttons: false,
  }).then(() => {
    // Redirigir a otra página después de la notificación
    console.log("exitoso");;
  });