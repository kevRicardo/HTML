function iniciar(){
	var elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');
	window.addEventListener('mousemove', animacion, false);

	/*var imagen = new Image();
	imagen.src="/home/vill/Documents/HTML/Canvas/juego.png";
	imagen.addEventListener("load", modificarimagen, false);*/
}
function animacion(e){
	lienzo.clearRect(0,0,300,500);

	var xraton = e.clientX;
	var yraton = e.clientY;
	var xcentro = 220;
	var ycentro = 150;
	var angulo = Math.atan2(xraton-xcentro,yraton-ycentro);
	var x = xcentro+Math.round(Math.sin(angulo)*10);
	var y = ycentro+Math.round(Math.cos(angulo)*10);

	lienzo.beginPath();
	lienzo.arc(xcentro,ycentro,20,0,Math.PI*2, false);
	lienzo.moveTo(xcentro+70,150);
	lienzo.arc(xcentro+50,150,20,0,Math.PI*2, false);
	lienzo.stroke();

	lienzo.beginPath();
	lienzo.moveTo(x+10,y);
	lienzo.arc(x,y,10,0,Math.PI*2, false);
	lienzo.moveTo(x+60,y);
	lienzo.arc(x+50,y,10,0,Math.PI*2,false);
	lienzo.fill();
}
/*function modificarimagen(e){
	imagen = e.target;
	var patron = lienzo.createPattern(imagen, 'repeat');
	lienzo.fillStyle = patron;
	lienzo.fillRect(0,0,500,300);
}*/
window.addEventListener("load", iniciar, false);