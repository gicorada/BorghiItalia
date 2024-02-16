const defaultLocale = "it";

let locale;


const translations = {
	"it": {
		/* Inizio header footer */
		"nav-alberghi": "Alberghi",
		"nav-storia": "Galleria",
		"nav-prenotazione": "Prenota il tuo viaggio",
		"footer-curadi": "A cura di",
		"footer-contattaci": "Contattaci",
		/* Fine header footer */


		/* Inizio home */
		"titolo": "La Maddalena",
		"sottotitolo": "Le spiagge più belle dell'isola",
		"testo-home": "La Maddalena è uno dei comuni italiani più fiorenti del paese. Vanta spiagge bellissime, un mare cristallino e un accoglienza calorosa, caratteristiche tipiche della regione Sardegna, senza rinunciare a molte attività diverse proposte dai villaggi turistici. Su questo sito troverai tutte le informazioni necessarie per organizzare il viaggio dei tuoi sogni e appassionarti alla cultura della isola più bella d'Italia",
		/* Fine home */


		/* Inizio prenotazione */
		"titolo-prenota": "Prenota il tuo viaggio!",
		"label-nome": "Nome:",
		"label-cognome": "Cognome:",
		"label-codicefiscale": "Codice Fiscale:",
		"label-email": "Email:",
		"label-aerpart": "Aeroporto di partenza:",

		"label-aeroportiitaliani": "Aeroporti italiani",
		"FCO": "Aeroporto di Roma Fiumicino - Leonardo da Vinci",
		"MXP": "Aeroporto di Milano Malpensa",
		"LIN": "Aeroporto di Milano Linate",
		"VCE": "Aeroporto di Venezia Marco Polo",
		"CTA": "Aeroporto di Catania Fontanarossa",
		"NAP": "Aeroporto di Napoli Capodichino",
		"BLQ": "Aeroporto di Bologna Guglielmo Marconi",
		"PMO": "Aeroporto di Palermo Falcone e Borsellino",
		"CAG": "Aeroporto di Cagliari Elmas",
		"VNO": "Aeroporto di Verona Villafranca",
		"GOA": "Aeroporto di Genova Cristoforo Colombo",
		"FLR": "Aeroporto di Firenze Amerigo Vespucci",
		"SUF": "Aeroporto di Lamezia Terme",
		"TRS": "Aeroporto di Trieste Friuli Venezia Giulia",
		"PSA": "Aeroporto di Pisa Galileo Galilei",
		"BDS": "Aeroporto di Brindisi Salento",
		"REG": "Aeroporto di Reggio Calabria Tito Minniti",
		"BRI": "Aeroporto di Bari Karol Wojtyła",
		"label-aeroportiesteri": "Aeroporti esteri",
		"PMI": "Aeroporto di Palma di Maiorca (Spagna)",
		"CMF": "Aeroporto di Chambery (Francia)",
		"ZRH": "Aeroporto di Zurigo (Svizzera)",
		"AMS": "Aeroporto di Amsterdam Schiphol (Paesi Bassi)",
		"CDG": "Aeroporto di Parigi Charles de Gaulle (Francia)",
		"LHR": "Aeroporto di Londra Heathrow (Regno Unito)",
		"FRA": "Aeroporto di Francoforte (Germania)",
		"MUC": "Aeroporto di Monaco di Baviera (Germania)",
		"JFK": "Aeroporto John F. Kennedy di New York (USA)",
		"LAX": "Aeroporto di Los Angeles (USA)",
		"DXB": "Aeroporto di Dubai International (Emirati Arabi Uniti)",

		"label-aerdest": "Arrivo: Aeroporto di Olbia Costa Smeralda",

		"label-luogopern": "Luogo di pernottamento:",
		"label-hotel": "Hotel",
		"label-ilgabbiano": "Hotel Il Gabbiano",
		"label-excelsior": "Hotel Excelsior",
		"label-miralonga": "Hotel Miralonga",

		"label-bnb": "Bed & Breakfast",
		"label-dimoraelle": "Dimora Elle",
		"label-villamanini": "Villa Manini",
		"label-upunenti": "U Punenti",

		"label-casevacanza": "Case Vacanza",
		"label-casamaria": "Casa Maria",
		"label-residenzamarginetto": "Residenza Marginetto",
		"label-ilcaracolo": "Il Caracolo",

		"label-datapartenza": "Data e orario di partenza:",
		"label-dataritorno": "Data e orario di ritorno:",
		"label-nbagagli": "Numero di bagagli trasportati:",
		"label-condizioni": "Ho letto e accetto le condizioni",
		"label-cartaidentita": "Inserire file contenente l'immagine della carta di identita",
		"label-invia": "Invia",
		/* Fine prenotazione */


		/* Inzio conferma prenotazione */
		"titolo-conferma": ", grazie per aver prenotato con noi!",
		"sottotitolo-conferma": "Ti confermiamo che i tuoi dati sono stati ricevuti correttamente, puoi verificarlo dalla copia della tua risposta qui sotto",
		/* Fine conferma prenotazione */


		/* Inizio storia */
		"titolo-galleriafoto": "Galleria fotografica",
		"titolo-spiagge": "Spiagge",
		"testo-spiaggiarosa": "Una natura solitaria e selvaggia accoglie chi si avvicina all’isola di Budelli, famosa per la singolare Spiaggia Rosa. Cala di Roto, così era chiamata anticamente, è un gioiello di raro splendore che spicca e colpisce per la particolarità della sua sabbia, colorata di rosa dai gusci di piccoli animali marini. Resa famosa negli anni ’60 dal film Deserto Rosso di Antonioni, è il simbolo dell’incontaminata bellezza del Parco Nazionale dell’Arcipelago di La Maddalena. Un’area protetta e inaccessibile per tutelare questo patrimonio naturale.",
		"testo-spiaggiacavaliere": "Sull’isola di Budelli, di fronte allo specchio di mare racchiuso tra Santa Maria e Razzoli, si trova anche la spiaggia del Cavaliere notoriamente conosciuta come Manto della Madonna. Un velo candido e immacolato, dalle delicate sfumature e infinite trasparenze turchesi tocca la riva e il granito delle rocce. Un’oasi frequentatissima nei mesi estivi, ma perfetta per un tuffo settembrino.",
		"testo-spiaggiasoraya": "Nella parte sudorientale dell’isola di Spargi troverete panorami che difficilmente potrete scordare. Imperdibile la visita a Cala Soraya, spiaggia che deve il	suo nome alla regina Soraya, che tanto la amò. Con la caratteristica forma di mezzaluna, era originariamente chiamata dai maddalenini Cala Ciaccaro, circondata da splendidi ginepri fenici, elicriso e gigli marittimi.",
		/* Fine storia */


		/* Inizio alberghi */
		"titolo-alberghi": "Alberghi",
		"sottotitolo-alberghi": "Qui puoi conoscere i migliori luoghi di pernottamento disponibili nella Maddalena",
		"testo-alberghi": "Se siamo riusciti a farvi interessare a questo borgo, consigliamo di prenotare il vostro viaggio al link qui sotto, o vedere i luoghi più belli della Maddalena",
		"testo-cosavisitare": "Cosa visitare?"
	},

	"en": {
		/* Inizio header footer */
		"nav-alberghi": "Hotels",
		"nav-storia": "Photo Gallery",
		"nav-prenotazione": "Book a trip",
		"footer-curadi": "Edited by",
		"footer-contattaci": "Contact us",
		/* Fine header footer */


		/* Inzio home */
		"titolo": "La Maddalena",
		"sottotitolo": "The most beautiful beaches on the island",
		"testo-home": "La Maddalena is one of the most flourishing Italian municipalities of the country. It boasts beautiful beaches, a crystal clear sea and a warm welcome, typical characteristics of the region	Sardinia, without giving up many different activities offered by the tourist villages. On this site you will find all the information you need to organize the trip of your dreams and become passionate about the culture of the most beautiful island in Italy",
		/* Fine home */


		/* Inizio prenotazione */
		"titolo-prenota": "Book your trip!",
		"label-nome": "Name:",
		"label-cognome": "Last Name:",
		"label-codicefiscale": "Tax ID:",
		"label-email": "Email:",

		"label-aerpart": "Departure Airport:",
		"label-aeroportiitaliani": "Italian airports",
		"FCO": "Rome Fiumicino Airport - Leonardo da Vinci",
		"MXP": "Milan Malpensa Airport",
		"LIN": "Milan Linate Airport",
		"VCE": "Venice Marco Polo Airport",
		"CTA": "Catania Fontanarossa Airport",
		"NAP": "Naples Capodichino Airport",
		"BLQ": "Bologna Guglielmo Marconi Airport",
		"PMO": "Palermo Falcone e Borsellino Airport",
		"CAG": "Cagliari Elmas Airport",
		"VNO": "Verona Villafranca Airport",
		"GOA": "Genoa Cristoforo Colombo Airport",
		"FLR": "Florence Amerigo Vespucci Airport",
		"SUF": "Lamezia Terme Airport",
		"TRS": "Trieste Friuli Venezia Giulia Airport",
		"PSA": "Pisa Galileo Galilei Airport",
		"BDS": "Brindisi Salento Airport",
		"REG": "Reggio Calabria Tito Minniti Airport",
		"BRI": "Bari Karol Wojtyła Airport",
		"label-aeroportiesteri": "Abroad airports",
		"PMI": "Palma de Mallorca Airport (Spain)",
		"CMF": "Chambéry Airport (France)",
		"ZRH": "Zurich Airport (Switzerland)",
		"AMS": "Amsterdam Schiphol Airport (Netherlands)",
		"CDG": "Paris Charles de Gaulle Airport (France)",
		"LHR": "London Heathrow Airport (United Kingdom)",
		"FRA": "Frankfurt Airport (Germany)",
		"MUC": "Munich Airport (Germany)",
		"JFK": "John F. Kennedy Airport in New York (USA)",
		"LAX": "Los Angeles Airport (USA)",
		"DXB": "Dubai International Airport (United Arab Emirates)",

		"label-aerdest": "Arrival: Olbia Costa Smeralda Airport",

		"label-luogopern": "Accommodation Location:",
		"label-hotel": "Hotel",
		"label-ilgabbiano": "\"Il Gabbiano\" Hotel",
		"label-excelsior": "Excelsior Hotel",
		"label-miralonga": "\"Miralonga\" Hotel",
		"label-bnb": "Bed & Breakfast",
		"label-dimoraelle": "Elle Residence",
		"label-villamanini": "\"Villa Manini\"",
		"label-upunenti": "\"U Punenti\"",
		"label-casevacanza": "Holiday Homes",
		"label-casamaria": "\"Casa Maria\"",
		"label-residenzamarginetto": "Marginetto Residence",
		"label-ilcaracolo": "\"Il Caracolo\"",
		"label-datapartenza": "Departure date and time:",
		"label-dataritorno": "Return date and time:",
		"label-nbagagli": "Number of bags:",
		"label-condizioni": "I have read and accept the conditions",
		"label-cartaidentita": "Insert file containing the image of the identity card",
		"label-invia": "Send",
		/* Fine prenotazione */


		/* Inzio conferma prenotazione */
		"titolo-conferma": ", thank you for booking with us!",
		"sottotitolo-conferma": "We confirm that your data has been received correctly,	you can check this from the copy of your answer below",
		/* Fine conferma prenotazione */

		
		/* Inizio storia */
		"titolo-galleriafoto": "Photo gallery",
		"titolo-spiagge": "Beaches",
		"testo-spiaggiarosa": "A solitary and wild nature welcomes those who approach the island of Budelli, famous for the unique Pink Beach. Cala di Roto, as it was called in ancient times, is a jewel of rare splendor that stands out and is striking for the particularity of its sand, colored pink by the shells of small marine animals. Made famous in the 1960s by Antonioni's film Red Desert, it is the symbol of the uncontaminated beauty of the La Maddalena Archipelago National Park. A protected and inaccessible area to protect this natural heritage.",
		"testo-spiaggiacavaliere": "On the island of Budelli, in front of the stretch of sea enclosed between Santa Maria and Razzoli, there is also the Cavaliere beach, famously known as Manto della Madonna. A white and immaculate veil, with delicate shades and infinite turquoise transparencies, touches the shore and the granite of the rocks. A very popular oasis in the summer months, but perfect for a September dip.",
		"testo-spiaggiasoraya": "In the south-eastern part of the island of Spargi you will find views that you will hardly forget. A visit to Cala Soraya is unmissable, a beach that owes its name to Queen Soraya, who loved it so much. With its characteristic crescent shape, it was originally called Cala Ciaccaro by the people of Maddalena, surrounded by splendid Phoenician junipers, helichrysum and maritime lilies.",
		/* Fine storia */


		/* Inizio alberghi */
		"titolo-alberghi": "Hotels",
		"sottotitolo-alberghi": "Here you can find out about the best accommodation places available in Maddalena",
		"testo-alberghi": "If we have managed to get you interested in this village, we recommend booking your trip at the link below, or seeing the most beautiful places in La Maddalena",
		"testo-cosavisitare": "What to visit?"
	},
};



function translateElement(element) {
	const key = element.getAttribute("data-i18n-key");
	const translation = translations[locale][key];
	if (translation != undefined) {
		element.innerText = translation;
	} else {
		console.error(`Translation not found for key: ${key}`);
	}
	if (document.location.pathname.endsWith("form.html")) {
		document.getElementById("label-aeroportiitaliani").label = translations[locale]["label-aeroportiitaliani"]
		document.getElementById("label-aeroportiesteri").label = translations[locale]["label-aeroportiesteri"]

		document.getElementById("label-hotel").label = translations[locale]["label-hotel"]
		document.getElementById("label-bnb").label = translations[locale]["label-bnb"]
		document.getElementById("label-casevacanza").label = translations[locale]["label-casevacanza"]
	} else if (document.location.pathname.includes("Prenotato.html")) {
		processFormData
	}
}

function translatePage() {
	document
		.querySelectorAll("[data-i18n-key]")
		.forEach(translateElement);
}

function setLocale(newLocale) {
	if (newLocale === locale) return;
	locale = newLocale;
	translatePage();
}

function bindLocaleSwitcher(initialValue) {
	const switcher = document.querySelector("[data-i18n-switcher]");
	switcher.value = initialValue;
	switcher.onchange = (e) => {
		setLocale(e.target.value);
	};
}

document.addEventListener("DOMContentLoaded", () => {
	setLocale(defaultLocale);
	bindLocaleSwitcher(defaultLocale);
});
