
function concatenar(dato)
{
	dato = document.getElementById("hola").value+=dato;
	
}

function borrar() {
	document.getElementById('hola').value="";
}


function igual(){
	eq = document.getElementById('hola').value;
	resultado = eval(eq);
	document.getElementById('hola').value=resultado;
}


function secreto(){
	valor = document.getElementById('hola').value;
	if (valor == "008"){
	window.location.assign('acordeon.html');
	}
}


//utiliza una variable para cada cosa