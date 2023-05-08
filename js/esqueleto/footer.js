const footer = document.getElementById('pie')
$(footer).append(`<footer class="footer-distributed">
  
  
  
<div class="footer-center">


  <div>

    <i class="glyphicon bi bi-house"></i>
    <p><a href="../../pages/correo.html"><span>Contáctenos </span></a></p>
  </div>
  <div>


    <i class="glyphicon glyphicon-envelope"></i>



    <a href="#Cotice">Cotice aqui</a>
    <div id="Cotice" class="modalDialog">
      <div>
        <a href="#close" title="Close" class="close"></a>
        <h2>Cotizaciones</h2>
        <form  target="_self">
          <div>
            <p></p>
            <label for="nit">Nombre:</label>
            <input type="text" name="nombre" required placeholder="">
          </div>
          <div>
            <p></p>
            <label for="nit">Identificación</label>
            <input type="text" name="nit" pattern="^@?(\w){1,15}$"
              title="Por favor agregue cedula o nit  " required placeholder="Cedula o Nit">
          </div>
          <div>
            <label for="telefono">Teléfono</label>
            <input type="text" name="telefono" pattern="^@?(\w){1,15}$"
              title="Por favor agregue un numero de telefono o celular  " required>
          </div>
          <div>
            <label for="email">Correo Electrónico</label>
            <input type="text" name="email" required>
          </div>
          <div>

            <label for="descripcion">Descripción</label>
            <textarea class="messageInput" title="Message" name="descripcion"
              placeholder="Describa aquí el servicio que requiere solicitar. Ejemplo: Realizar la toma de 2 muestras de agua tratada, realizando análisis fisicoquímicos y microbiológicos según resolución 2115 de 2007."></textarea>

          </div>
          <div id="recaptcha1">
          </div>
          <button id="btn-cotizacion" class="submit" type="buttom">Enviar</button>

        </form>


      </div>

    </div>
  </div>
  <div>
  <i class="glyphicon bi bi-person-fill"></i>
    <a href="#Trabajo">Trabaje con Nosotros</a>

    <div id="Trabajo" class="modalDialog">
      <div>
        <a href="#close" title="Close" class="close"></a>
        <h2>Trabaje con Nosotros</h2>
        <label>
          <div align="justify">Buscamos nuevos talentos que trabajen en equipo hacia el logro de las metas
            organizacionales, cumpliendo con los compromisos acordados y participando activamente. Que
            tengan criterio propositivo, disciplina y la capacidad de compartir conocimientos e
            información para aprender y crecer profesional y personalmente.</div>
        </label>
        <label>
          <div align="justify">Toda información registrada en la hoja de vida será validada por la empresa
            mediante la solicitud de los soportes respectivos.</div>
        </label>

        <form action="postulacion.php" method="post" enctype="multipart/form-data" target="_self">
          <p></p>
          <div>
            <label for="nombre1"><br>
              Nombre y Apellido</label>
            <input name="nombre1" type="text" required>


          </div>

          <div>
            <label for="profesion"><br>
              Profesión</label>
            <input type="text" name="profesion" placeholder="Técnico, Tecnólogo o Profesional">

          </div>

          <div>
            <label for="celular1">Numero de celular</label>
            <input type="text" name="celular1" required>

          </div>
          <div>
            <label for="email1">Correo Electronico</label>
            <input type="text" name="email1" required>

          </div>

          <button id="btn-trabajo" class="submit" type="submit" name="subir">Enviar</button>

        </form>

      </div>
    </div>
  </div>
</div>
<div class="footer-right">
  <h3>Información Aqualim </h3>
  <p>Carrera 23 N° 19-15 Yopal- Casanare </p>
  <p>Horario de atención colocar de Lunes a Viernes de 7 a 12 y de 2 a 6 pm Sábados de 8 a 12 m</p>
  <p> Tel 3203017075</p>
  <p>Cel 3142296223 / 3103490629</p>
  <div>
    <ul id="m-soc">
      <li><a class="twitter" href="https://twitter.com/aqualimlab" target="_blank" rel="noopener noreferrer"><span>Seguir en Twitter</span></a></li>
      <li><a class="facebook"
          href="https://www.facebook.com/Aqualimlab/" target="_blank" rel="noopener noreferrer"><span>Facebook</span></a>
      </li>
    </ul>
  </div>
</div><!-- end post footer -->
</footer>
<div class="post-footer-wrap">
<div class="fl">
  <p>Todos los derechos reservados por AQUALIM-Laboratorio Ambiental
</div>

</div>`);


const btnCotizacion = document.getElementById('btn-cotizacion');
const btnTrabajo = document.getElementById('btn-trabajo');



btnCotizacion.addEventListener('click', (event) => {
  event.preventDefault();
  const form = btnCotizacion.parentElement;
  const nombre = form.querySelectorAll('[name="nombre"]');
  const nit = form.querySelectorAll('[name="nit"]');
  const telefono = form.querySelectorAll('[name="telefono"]');
  const email = form.querySelectorAll('[name="email"]');
  const descripcion = form.querySelectorAll('[name="descripcion"]');
  console.log(nombre.value, nit.value, telefono.value, email.value, descripcion.value)
  const mensaje = `Buen día mi nombre es : ${nombre[0].value}  me encuentro interesado en sus servicios  numero de contacto:${telefono[0].value}  nit:${nit[0].value}  mensaje: ${descripcion[0].value}`;
  enviarEmail('cotizaciones@aqualim.com', mensaje, email[0].value);
})
btnTrabajo.addEventListener('click', (event) => {
  event.preventDefault();
  const form = btnTrabajo.parentElement;
  const nombre1 = form.querySelectorAll('[name="nombre1"]');
  const profesion = form.querySelectorAll('[name="profesion"]');
  const celular1 = form.querySelectorAll('[name="celular1"]');
  const email1 = form.querySelectorAll('[name="email1"]');
  const mensaje = `Buen día mi nombre es : ${nombre1[0].value}  me gustaria formar parte de su equipo mi profecion es: ${profesion[0].value}  numero de telefono:${celular1[0].value}`
  enviarEmail('vacantesaqualim@gmail.com', mensaje, email1[0].value);

})


const enviarEmail = async (para, mensaje, emailcontacto) => {
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