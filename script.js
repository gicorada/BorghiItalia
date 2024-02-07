var header = "";
var footer = "";

//HEADER
//Header normale
header += `
<nav class="navbar navbar-expand-lg" style="background-color: #444d51">
    <div class="container-fluid ">
      
      <a class="navbar-brand" href="./index.html">
        <img src="Logo.png" width="65" height="65">
      </a>
      <button class="navbar-toggler color_nav_button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active color_nav nav_margin"  aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link color_nav nav_margin" style=" href="#">Tour</a>
          </li>
          <li class="nav-item">
            <a class="nav-link color_nav nav_margin"  href="Storia.html">Storia</a>
          </li>
          <li class="nav-item">
            <a class="nav-link color_nav nav_margin" href="form.html">Prenotazione</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;


//FOOTER
footer += `
<footer class="footer text-center">
    <div class="row">
      <!-- Footer Location-->
      <div class="col-lg-4 mb-lg-0 footer_div_left">
        <h4 class="text-uppercase mb-4">A CURA DI:</h4>

        <p>
        DE CHECCHI LUCA
        </p>
        <p>
        NICOLA PARRACCIANI 
        </p>
        <p>
        RADAELLI GIACOMO
        </p>

      </div>

      

      <div class="col-lg-4 mb-lg-0 footer_div_right">
        <h4 class="text-uppercase mb-4" >CONTATTACI</h4>
        <p class="lead mb-0">
          <p>
          bellesso11215.itiseveripadova.edu.it
          </p>
          <p>
          boligari11219.itiseveripadova.edu.it<br/>
          </p>
          <p>
          jin11303.itiseveripadova.edu.it
          </p>
          <p>
          michelotto11326.itiseveripadova.edu.it<br/>
          </p>
          <p>
          parracciani11340.itiseveripadova.edu.it
          </p>
        </p>
      </div>
    </div>
  </footer>
`;


document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;

