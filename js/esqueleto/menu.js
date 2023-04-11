const menu =  document.getElementById('menu')

$(menu).append(
    `<div id='menuLogo'>
        <img class="img-rounded img-responsive" data-src="holder.js/900x500/auto" alt="900x500" src="../assets/images/aqualim.jpg">
    </div>

    <div class="container">

        <a class="toggleMenu" href="#" style="display: none">Menu</a>
        <ul class="nav">

            <li><a href="../"><span>Inicio</span></a></li>
            <li><a href="../pages/servicios.html"><span class='down'>Servicios</span></a></li>
            <li class='top'><a class='top_link' href="../pages/correo.html"><span class='down'>Contáctenos </span></a></li>
            <li class='top'><a class='top_link' href="../pages/califiquenos.html"><span class='down'>Calífiquenos</span></a></li>
        </ul>
    </div>`
)
