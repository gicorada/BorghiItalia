var header = `
<nav class="navbar navbar-expand-lg" style="background-color: #444d51">
		<div class="container-fluid">
			<a class="navbar-brand" href="./index.html">
				<img src="Logo-nobg.webp" width="65" height="65" alt="">
			</a>
      <div id="traduttore" class="row justify-content-center">
        <select data-i18n-switcher class="locale-switcher form-select mb-3" style="width: 150px">
          <option value="it">Italiano</option>
          <option value="en">Inglese</option>
        </select>
      </div>
			<button class="navbar-toggler color_nav_button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<i class="fa fa-bars"></i>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link active color_nav nav_margin" aria-current="page" href="index.html">&nbsp;&nbsp;&nbsp;Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link color_nav nav_margin" href="alberghi.html" data-i18n-key="nav-alberghi">&nbsp;&nbsp;&nbsp;Alberghi</a>
					</li>
					<li class="nav-item">
						<a class="nav-link color_nav nav_margin" href="storia.html" data-i18n-key="nav-storia">&nbsp;&nbsp;&nbsp;Galleria</a>
					</li>
					<li class="nav-item">
						<a class="nav-link color_nav nav_margin" href="form.html" data-i18n-key="nav-prenotazione">&nbsp;&nbsp;&nbsp;Prenotazione</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
`;


var footer = `
<footer class="footer text-center mt-5 pt-3" style="background-color: #ECF4D6">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 mb-lg-0">
				<h4 class="text-uppercase mb-4" data-i18n-key="footer-curadi">A CURA DI:</h4>
				<p>DE CHECCHI LUCA</p>
				<p>PARRACCIANI NICOLA</p>
				<p>RADAELLI GIACOMO</p>
			</div>
		
			<div class="col-lg-6">
				<h4 class="text-uppercase mb-4" data-i18n-key="footer-contattaci">CONTATTACI</h4>
				<p class="lead mb-0">
					<p>dechecchi11259@itiseveripadova.edu.it</p>
					<p>parracciani11340@itiseveripadova.edu.it</p>
					<p>radaelli11353@itiseveripadova.edu.it</p>
				</p>
			</div>
		</div>
	</div>
</footer>
`;


document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;