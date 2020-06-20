function iniciar(){
	var elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');
/*Colores
	lienzo.fillStyle = "#000099";
	lienzo.strokeStyle = "#990000";

	lienzo.strokeRect(100, 100, 120, 120);
	lienzo.fillRect(110, 110, 100, 100);
	lienzo.clearRect(120, 120, 80, 80);
	*/
	var gradiente = /*lienzo.createRadialGradient(0,0,30,0,0,300);*/lienzo.createLinearGradient(0,0,10,100);
	gradiente.addColorStop(0.5, '#0000FF');
	gradiente.addColorStop(1, '#000000');
	lienzo.fillStyle = gradiente;

	lienzo.fillRect(10, 10, 100, 100);
	lienzo.fillRect(150, 10, 200, 100);
}
window.addEventListener("load", iniciar, false);