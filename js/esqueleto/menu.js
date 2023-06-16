var path = window.location.pathname;
if (path != "/pages/correo1.html") {
    const menu = document.getElementById('menu')
    const texto = document.getElementById('textInicial')
    let creacion = 2004
    copyright = new Date();

    let update = copyright.getFullYear();
    let anios = update - creacion
    $(menu).append(
        `<div id='menuLogo'>
        <img class="img-rounded img-responsive" data-src="holder.js/900x500/auto" alt="900x500" src="../assets/images/aqualim.jpg">
    </div>

    <div class="container">

        <a class="toggleMenu" href="#" style="display: none">Menu</a>
        <ul class="nav">

            <li><a href="/"><span>Inicio</span></a></li>
            <li><a href="../pages/servicios.html"><span class='down'>Servicios</span></a></li>
            <li class='top'><a class='top_link' href="../pages/contactanos.html"><span class='down'>Contáctenos </span></a></li>
            <li class='top'><a class='top_link' href="../pages/califiquenos.html"><span class='down'>Calífiquenos</span></a></li>
        </ul>
    </div>`
    )
    $(texto).append(`
                Laboratorio ambiental acreditado por el IDEAM bajo la norma NTC - ISO/IEC 17025:2017 “Requisitos
                técnicos para la competencia de los laboratorios de ensayo y de calibración” cuenta con más
                de  <strong> ${anios} años de experiencia </strong> en la realización de toma de muestras simples y compuestas,
                análisis fisicoquímicos y microbiológicos de aguas, suelos, hidrobiología y alimentos.
`)
}
else {
    document.addEventListener('DOMContentLoaded', function () {
        // Obtiene el valor de la ruta actual del archivo HTML
        var path = window.location.pathname;

        // Crea un objeto de configuración para cada página y sus respectivos enlaces
        var pages = [
            { title: 'Inicio', link: '/' },
            { title: 'Servicios', link: '/pages/servicios.html' },
            { title: 'Contáctenos', link: '/pages/contactanos.html' },
            { title: 'Calífiquenos', link: '/pages/califiquenos.html' }
        ];

        // Crea el código HTML de la barra de navegación
        var navHTML = '<nav class="navbar navbar-expand-lg navbar-dark bg-nav rounded-4-bottom">';
        navHTML += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">';
        navHTML += '<span class="navbar-toggler-icon"></span>';
        navHTML += '</button>';
        navHTML += '<div class="collapse navbar-collapse" id="navbarNav">';
        navHTML += '<ul class="navbar-nav">';

        // Recorre las páginas y crea los elementos de la lista de navegación
        pages.forEach(function (pageObj) {
            var isActive = path.endsWith(pageObj.link);
            var activeClass = isActive ? 'active' : '';
            navHTML += '<li class="nav-item ">';
            navHTML += '<a class="nav-link ' + activeClass + '" href="' + pageObj.link + '">' + pageObj.title + '</a>';
            navHTML += '</li>';
        });

        navHTML += '</ul>';
        navHTML += '</div>';
        navHTML += '</nav>';

        // Inserta el código HTML en el elemento con el ID "navbar-container"
        var navbarContainer = document.getElementById('navbar-container');
        if (navbarContainer) {
            navbarContainer.innerHTML = navHTML;
        }
    });

}


