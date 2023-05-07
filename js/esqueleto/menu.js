const menu =  document.getElementById('menu')
const texto = document.getElementById('textInicial')
let creacion = 2004
copyright=new Date();

let update=copyright.getFullYear();
let anios = update-creacion 
$(menu).append(
    `<div id='menuLogo'>
        <img class="img-rounded img-responsive" data-src="holder.js/900x500/auto" alt="900x500" src="../assets/images/aqualim.jpg">
    </div>

    <div class="container">

        <a class="toggleMenu" href="#" style="display: none">Menu</a>
        <ul class="nav">

            <li><a href="/"><span>Inicio</span></a></li>
            <li><a href="../pages/servicios.html"><span class='down'>Servicios</span></a></li>
            <li class='top'><a class='top_link' href="../pages/correo.html"><span class='down'>Contáctenos </span></a></li>
            <li class='top'><a class='top_link' href="../pages/califiquenos.html"><span class='down'>Calífiquenos</span></a></li>
        </ul>
    </div>`
)
$(texto).append(`
                Laboratorio ambiental acreditado por el IDEAM bajo la norma ISO 17025: 17 “Requisitos
                técnicos para la competencia de los laboratorios de ensayo y de calibración”; cuenta con más
                de `,anios, ` años de experiencia en la realización de toma de muestras simples y compuestas,
                análisis fisicoquímicos y microbiológicos de aguas, suelos, hidrobiología y alimentos.
`)
