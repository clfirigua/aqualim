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