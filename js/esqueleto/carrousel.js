const carrousel = document.getElementById('carrousel')
    console.log(carrousel);
    var path = window.location.pathname;
    if(path != "/pages/correo1.html")
    {
    $(carrousel).append(`
<div id="wowslider-container1">
            <div class="ws_images">
              <ul>
                <li><img src="../../assets/slider/1.jpg" alt="" title="" id="wows1_0" /></li>
                <li><img src="../../assets/slider/2.jpg" alt="" title="" id="wows1_1" /></li>
                <li><a href="http://wowslider.com/vi"><img src="../../assets/slider/3.jpg" alt="bootstrap slider" title="" id="wows1_2" /></a></li>
                <li><img src="../../assets/slider/4.jpg" alt ="" title="" id="wows1_3" /></li>
                <li><img src="../../assets/slider/7.jpg" alt="" title="" id="wows1_4" /></li>
                <li><img src="../../assets/slider/8.jpg" alt="" title="" id="wows1_5" /></li>
              </ul>
            </div>
            <div class="ws_bullets">
              <div>
                <a href="#" title=""><span><img src="../../assets/images/reogiendo_la_monta.jpg" alt="" />1</span></a>
                <a href="#" title=""><span><img src="../../assets/images/DSC_0133.jpg" alt="" />2</span></a>
                <a href="#" title=""><span><img src="../../assets/images/oasis2.jpg" alt="" />3</span></a>
                <a href="#" title=""><span><img src="../../assets/images/MuestreoSuelos.JPG" alt="" />4</span></a>
                <a href="#" title=""><span><img src="../../assets/images/DSC_0131.jpg" alt="" />5</span></a>
                <a href="#" title=""><span><img src="../../assets/images/vista rapida 6.jpg" alt="" />6</span></a>
              </div>
            </div>
            <div class="ws_shadow"></div>
            </div>`)}
            else{
              $(carrousel).append(`<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
              </div>
              <div class="carousel-inner rounded">
                <div class="carousel-item active">
                  <img src="../assets/slider/1.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="../assets/slider/2.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="../assets/slider/3.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="../assets/slider/4.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="../assets/slider/5.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="../assets/slider/8.jpg" class="d-block w-100" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>`)
            }