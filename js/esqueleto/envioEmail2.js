const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btn7 = document.getElementById('btn-7');



btn1.addEventListener('click', (event) => {
    event.preventDefault();
    const email = btn1.dataset.email;
    const [nombre, correo, descipcion] = datosFormulario(btn1.parentElement);
    enviarEmail(email, descipcion, correo, nombre)

})
btn2.addEventListener('click', (event) => {
    event.preventDefault();
    const email = btn2.dataset.email;
    const [nombre, correo, descipcion] = datosFormulario(btn2.parentElement);
    enviarEmail(email, descipcion, correo, nombre)

})
btn3.addEventListener('click', (event) => {
    event.preventDefault();
    const email = btn3.dataset.email;
    const [nombre, correo, descipcion] = datosFormulario(btn3.parentElement);
    enviarEmail(email, descipcion, correo, nombre)

})
btn4.addEventListener('click', (event) => {
    event.preventDefault();
    const email = btn4.dataset.email;
    const [nombre, correo, descipcion] = datosFormulario(btn4.parentElement);
    enviarEmail(email, descipcion, correo, nombre)

})
btn5.addEventListener('click', (event) => {
    event.preventDefault();
    const email = btn5.dataset.email;
    const [nombre, correo, descipcion] = datosFormulario(btn5.parentElement);
    enviarEmail(email, descipcion, correo, nombre)

})
btn6.addEventListener('click', (event) => {
    event.preventDefault();
    const email = btn6.dataset.email;
    const [nombre, correo, descipcion] = datosFormulario(btn6.parentElement);
    enviarEmail(email, descipcion, correo, nombre)

})
btn7.addEventListener('click', (event) => {
    event.preventDefault();
    const email = btn7.dataset.email;
    const [nombre, correo, descipcion] = datosFormulario(btn7.parentElement);
    enviarEmail(email, descipcion, correo, nombre)

});


const datosFormulario = (form) => {
    const nombre = form.querySelectorAll('[name="nombre"]');
    const correo = form.querySelectorAll('[name="correo"]');
    const descipcion = form.querySelectorAll('[name="descipcion"]');

    return [nombre[0].value, correo[0].value, descipcion[0].value];

}

const enviarEmail = async (para, mensajeR, emailcontacto, nombre) => {
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