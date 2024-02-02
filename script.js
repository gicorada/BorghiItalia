var header = "";
var footer = "";

//HEADER
//Header normale
header = `<nav class="navbar navbar-expand-lg" style="background-color: #444d51">
    <div class="container-fluid ">
      <img src="LogoFin.ico" style="">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler color_nav_button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active color_nav nav_margin"  aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link color_nav nav_margin" style=" href="#">Tour</a>
          </li>
          <li class="nav-item">
            <a class="nav-link color_nav nav_margin"  href="#">Storia</a>
          </li>
          <li class="nav-item">
            <a class="nav-link color_nav nav_margin" href="#">Prenotazione</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;


//FOOTER
footer += "Qui andrà il footer"




document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;
