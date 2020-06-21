function iniciar(){
	cajadatos = document.getElementById('cajadatos');
	var boton = document.getElementById('boton');
	boton.addEventListener('click', enviar, false);
}
function enviar(){
	var datos = new FormData();
	datos.append('nombre','Juan');
	datos.append('apellido','Perez');
	var url = "procesar.php";
	var solicitud = new XMLHttpRequest();
	solicitud.addEventListener('load', mostrar, false);
	solicitud.open("POST", url, true);
	solicitud.send(datos);
}
function mostrar(e){
	cajadatos.innerHTML = e.target.responseText;
}
window.addEventListener('load', iniciar, false);