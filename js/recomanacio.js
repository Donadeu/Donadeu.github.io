var resposta1;
var resposta2;
var resposta3;
var opcio1 = `<a style="color:black" href="https://www.pccomponentes.com/msi-gf63-thin-9sc-047xes-intel-corei7-9750h-16gb-512gb-ssd-gtx-1650-156" target="_blank" rel="noopener noreferrer"><b>MSI GF63 Thin 9SC-047XES</b></a>`;
var opcio2 = `<a style="color:black" href="https://www.pccomponentes.com/lenovo-ideapad-s145-15ast-amd-a9-9425-8gb-512gb-ssd-156" target="_blank" rel="noopener noreferrer"><b>Lenovo Ideapad S145-15AST</b></a>`;
var opcio3 = `<a style="color:black" href="https://www.pccomponentes.com/toshiba-satellite-pro-r40-d-111-intel-celeron-3865u-4gb-128gb-ssd-14" target="_blank" rel="noopener noreferrer"><b>Toshiba Satellite Pro R40-D-111</b></a>`;
var opcio4 = `<a style="color:black" href="https://www.pccomponentes.com/hp-omen-15-dc1036ns-intel-core-i7-9750h-16gb-1tb-ssd-gtx-1660ti-156" target="_blank" rel="noopener noreferrer"><b>HP OMEN 15-DC1036NS</b></a>`;
var opcio5 = `<a style="color:black" href="https://www.pccomponentes.com/acer-aspire-5-a515-54-735n-intel-core-i7-10510u-8gb-512gb-ssd-156" target="_blank" rel="noopener noreferrer"><b>Acer Aspire 5 A515-54-735N</b></a>`;

function mostrarOpcio(value) {
	var opcio;
	if (value < 6) {
		opcio = opcio3;
	}
	else if(value < 12){
		opcio = opcio2;
	}
	else if(value < 18){
		opcio = opcio5;
	}
	else if(value < 24){
		opcio = opcio1;
	}
	else if(value <= 30){
		opcio = opcio4;
	}
	document.getElementById("success").innerHTML = `<p>Dades processades. La teva millor opció és: </p>` + opcio;
}

function getValue(resposta) {
	if (resposta =="molt") {
		return 10;
	}
	else if(resposta == "normal"){
		return 5;
	}
	else if (resposta == "poc") {
		return 0;
	}
}

function getValue1(resposta) {
	if (resposta =="molt") {
		return 0;
	}
	else if(resposta == "normal"){
		return 5;
	}
	else if (resposta == "poc") {
		return 10;
	}
}

window.onload=function(){
	var nom = window.localStorage.getItem('user');
	document.getElementById("salutacio").innerHTML = "Hola " + nom + ", deixa que t'ajudi a escollir un ordinador adequat per a tu.";
	document.getElementById('botosubmit').addEventListener('click', () => {
	    var pregunta1 = document.getElementsByName('preu');
	    var pregunta2 = document.getElementsByName('rendiment');
	    var pregunta3 = document.getElementsByName('grafic');
		for (var i = 0, length = pregunta1.length; i < length; i++) {
		  	if (pregunta1[i].checked) {
		    	resposta1 = pregunta1[i].value;
		    }
		    if (pregunta2[i].checked) {
		    	resposta2 = pregunta2[i].value;
		    }
		    if (pregunta3[i].checked) {
		    	resposta3 = pregunta3[i].value;
		    }
		}
		var value = getValue1(resposta1) + getValue(resposta2) + getValue(resposta3);
		console.log("value: " + value);
		mostrarOpcio(value);
	})
}