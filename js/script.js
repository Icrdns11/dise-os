function generate(){
	document.getElementById('back').style.display='block';
	var soporte = ["Motion Graphics", "Web", "Redes Sociales", "Poster"];
	var objetivo = ["publicitario(a)", "informativo(a)"];
	var tipo = ["ilustraciones", "imágenes", "3d", "imágenes abstractas", "pictogramas"];
	var estilo = ["Vintage y", "Moderno y", "Futurista y"];
	var estilodos = ["maximalista", "minimalista"];
	var bimedia = ["Imagen sin texto,", "Imagen con texto,", "Imagen con texto integrado,", "Imagen texto,", "Texto sin imagen,"];
	var color = ["natural,", "exaltado,", "expresionista,", "fantasioso,"];
	var gestal = ["figura y fondo,", "buena forma,", "cierre,", "contraste,", "proximidad,", "similaridad,", "continuidad,"];
	var compo = ["traslación ", "rotación y", "reflexión y ", "dilatación y"];
	var compodos = ["simétrico(a) ", "asimétrico(a) "];
	var rand_first = Math.floor(Math.random()*soporte.length);
	var rand_second = Math.floor(Math.random()*objetivo.length); 
	var rand_third = Math.floor(Math.random()*tipo.length); 
	var rand_fourd = Math.floor(Math.random()*estilo.length); 
	var rand_five = Math.floor(Math.random()*estilodos.length);
	var rand_six = Math.floor(Math.random()*bimedia.length); 
	var rand_seven = Math.floor(Math.random()*color.length); 
	var rand_eight = Math.floor(Math.random()*gestal.length); 
	var rand_nine = Math.floor(Math.random()*compo.length); 
	var rand_last = Math.floor(Math.random()*compodos.length);
	document.getElementById('result-one').innerHTML = "<div><p>"+soporte[rand_first]+" "+objetivo[rand_second]+" con "+ tipo[rand_third]+"</p></div>";
	document.getElementById('result-two').innerHTML = "<h2>Estilo:</h2><div><p>"+estilo[rand_fourd]+" "+estilodos[rand_five]+"</p></div>";
	document.getElementById('result-three').innerHTML = "<h2>Caracteristicas:</h2><div><p>"+bimedia[rand_six]+" color "+color[rand_seven]+" ley de gestal: "+gestal[rand_eight]+" "+compo[rand_nine]+" "+compodos[rand_last]+"</p></div>";
}


document.getElementById("dark").addEventListener('click', light)
function light (){
	document.getElementById("body").classList.toggle("fondo")
	document.getElementById("dark").classList.toggle("iconoback")
}