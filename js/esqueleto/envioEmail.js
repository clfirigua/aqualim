
const enviarEmails = async (para, mensajeR, emailcontacto, nombre) => {
    const mensajeUno = 'Buen dia mi nombre es:' + nombre + '\n';
    const mensaje = mensajeUno.concat(mensajeR);
    try {
        const url = 'https://mensajes-aqualim.herokuapp.com/sendmailer/mensaje';

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mensaje, para, emailcontacto })
        });

        const data = await response.json();
        console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}
function enviarFormulario() {
    var nombre = document.querySelector('input[type="text"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var opcion = document.querySelector('select').value;
    var mensaje = document.querySelector('textarea').value;
    
    if (nombre === '' || opcion === '' || mensaje === ''|| email === '') {
      alert('Por favor, completa todos los campos.');
      return;
    };

    enviarEmails(opcion, mensaje, email, nombre )

  }