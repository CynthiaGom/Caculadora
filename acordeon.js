
//REGRESAR

botonr = document.getElementById('r');//

	botonr.addEventListener('click',reg,true);

function reg(){
	window.location.assign('index.html');
}


//LO QUE MANTIENE GUARDADAS LAS NOTAS

window.addEventListener('load',cargar, true); //cuando se carga la pag

	function cargar(){
			
			text.innerHTML = localStorage.getItem('text'); //el texto es igual al lo que está en el localstorage
		}




//GUARDAR

botong = document.getElementById('g');
botong.addEventListener('click',guar, true);

function guar(){
	text=document.getElementById('text')//definimos que 'text' es lo que está dentro de txt(el documento pueh)
	text.innerHTML=text.value //inner.html es igual al valor del texto
	localStorage.setItem('text',text.innerHTML);//en el localstorage guardar 
}



//innerHTML (?)
//Porque no poner .value desde el inicio? {32}
//('text',text.innerHTML) (?)