var iniciat = false;
var nom;

function name(nom) {
	console.log(nom);
	window.localStorage.setItem('user', nom );
	document.getElementById("success").innerHTML = "<font color='green'><b>T'has registrat correctament!, clica l'enllaç de sota per tornar a la pàgina principal</b></font>"
}

function numero() {
	document.getElementById("success").innerHTML = "<font color='red'><b>Si us plau, no utilitzis números al camp nom/cognoms!</b></font>"
}


window.onload=function(){
	document.getElementById('submit').addEventListener('submit', function(e){
	    e.preventDefault();
	    nom = document.getElementById('nom').value;
	    var primera = nom[0];
	    var segona = nom.substring(1, nom.length);
	   	nom = primera.toUpperCase() + segona;
	    cognom = document.getElementById('cognom').value;
	    var num = parseInt(nom);
	    var num2 = parseInt(cognom);
	    (isNaN(num) && isNaN(num2)) ? name(nom) : numero()
	})
}