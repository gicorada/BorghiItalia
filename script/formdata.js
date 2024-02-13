function processFormData() {

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	if (queryString.length > 0) {
		const nome = urlParams.get('nome');
		const cognome = urlParams.get('cognome');
		const codice_fiscale = urlParams.get('codice_fiscale');
		const email = urlParams.get('email');
		const aer_part = urlParams.get('aer_part');
		const luogo_pern = urlParams.get('luogo_pern');
		const data_partenza = urlParams.get('data_partenza');
		const data_ritorno = urlParams.get('data_ritorno');
		const n_bagagli = urlParams.get('n_bagagli');


		let titolo = document.getElementById('titolo-prenotazione');
		titolo.innerText = nome + " " + cognome

		let sottotitolo = document.getElementById('sottotitolo-prenotazione');
		sottotitolo.innerText = `Ti confermiamo che i tuoi dati sono stati ricevuti correttamente,
								puoi verificarlo dalla copia della tua risposta qui sotto`;


		document.getElementById('codice_fiscale').innerText = codice_fiscale;
		document.getElementById('email').innerText = email;
		document.getElementById('aer_part').innerText = aer_part;
		document.getElementById('luogo_pern').innerText = luogo_pern;
		document.getElementById('data_partenza').innerText = data_partenza;
		document.getElementById('data_ritorno').innerText = data_ritorno;
		document.getElementById('n_bagagli').innerText = n_bagagli;
	} else {
		document.getElementById('titolo-prenotazione').innerText =
			`Non dovresti raggiungere questa pagina in questo modo!`;
		document.getElementById('sottotitolo-prenotazione').innerText =
			`Compila il form per prenotare`;
	}
}

processFormData()