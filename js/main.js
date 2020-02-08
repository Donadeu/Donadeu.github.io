
function iniciat(nom){
	document.getElementById('signin').innerHTML = "Hola, " + nom + "  ";
	document.getElementById('desconexio').innerHTML = "<b>DESCONNEXIÓ</b>";
	document.getElementById('recomanacio').setAttribute("href", "/html/recomanacio.html");
}

window.onload=function(){	
	var nothing;
	var nom = window.localStorage.getItem('user');
	console.log("nom emmagatzemat: " + nom);
	if (nom !== null) {
		((nom.trim() !== '') || (nom.trim() !== undefined)) ? iniciat(nom) : nothing = 0 
	}
	
	document.getElementById('desconexio').addEventListener('click', () => {
		window.localStorage.clear();
		location.reload();
		document.getElementById('signin').innerHTML = `<a class="nav-link" href="/html/registre.html">REGISTRA'T</a>`;
		document.getElementById('desconexio').innerHTML = " ";
	})

	document.getElementById('recomanacio').addEventListener('click', () => {
		nom === null ? alert("Si us plau, registra't abans d'utilitzar el recomanador") : nothing = 0
	})
}