const footer = document.getElementById('pie')
$(footer).append( `<footer class="footer-distributed">
  
  
  
<div class="footer-center">


  <div>
    <i class="glyphicon glyphicon-home"></i>
    <p><a href="correo.html"><span>Contáctenos </span></a></p>
  </div>
  <div>


    <i class="glyphicon glyphicon-envelope"></i>


    <a href="#Cotice">Cotice aqui</a>
    <div id="Cotice" class="modalDialog">
      <div>
        <a href="#close" title="Close" class="close"></a>
        <h2>Cotizaciones</h2>
        <form action="cotizacion.php" method="post" target="_self">
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
          <button class="submit" type="buttom">Enviar</button>

        </form>


      </div>

    </div>
  </div>
  <div>
    <i class="glyphicon glyphicon-user"></i>
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


          <label for="adjunto">Anexe su hoja de vida</label>
          <div class="drag-drop">
            <input type="file" name="adjunto" pattern="^@?(\w){1,15}$"
              title="Por favor agregue un archivo en pdf  " required>

            <span class="fa-stack fa-2x">
              <i class="fa fa-cloud fa-stack-2x bottom pulsating"></i>
              <i class="fa fa-circle fa-stack-1x top medium"></i>
              <i class="fa fa-arrow-circle-up fa-stack-1x top"></i>
            </span>
            <span class="desc">Pulse aquí para añadir archivos</span>

          </div>
          <div id="recaptcha2"></div>

          <button class="submit" type="submit" name="subir">Enviar</button>

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
      <li><a class="twitter" href="https://twitter.com/aqualimlab"><span>Seguir en Twitter</span></a></li>
      <li><a class="facebook"
          href="https://www.facebook.com/Aqualimlab/"><span>Facebook</span></a>
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