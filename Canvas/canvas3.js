function iniciar(){
	var elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');
	//Guardando el estado
	lienzo.save();
	lienzo.translate(50,70);
	lienzo.font = "bold 20px verdana, sans-serif";
	lienzo.fillText("PRUEBA1",0,30);
	lienzo.restore();
	lienzo.fillText("PRUEBA2",0,30);

	//Se dibuja un cuadro rojo, y se superpone solo en las letras
	lienzo.fillStyle = "#990000";
	lienzo.fillRect(100,100,300,100);
	lienzo.globalCompositeOperation = "destination-atop";
	lienzo.fillStyle = "#AAAAFF";
	lienzo.font = "bold 80px verdana, sans-serif";
	lienzo.textAlign = "center";
	lienzo.textBaseline = "middle";
	lienzo.fillText("PRUEBA",250,110);

	//Dibujando una imagen
	var imagen = new Image();
	imagen.src = "/home/vill/Documents/HTML/Canvas/juego.png";
	imagen.addEventListener("load", modificarimagen, false);
	/*imagen.addEventListener("load", function(){
		lienzo.drawImage(imagen,0,0,elemento.width,elemento.height)
	}, false);*/
}
function modificarimagen(e){
	imagen = e.target;
	lienzo.drawImage(imagen,0,0);
	var info = lienzo.getImageData(0,0,175,262);
	var pos;
	for(x = 0; x <= 175; x++){
		for(y = 0; y <= 262; y++){
			pos = (info.width*4*y)+(x*4);
			info.data[pos] = 255-info.data[pos];
			info.data[pos+1] = 255-info.data[pos+1];
			info.data[pos+2] = 255-info.data[pos+2];
		}
	}
	lienzo.putImageData(info,0,0);
}
window.addEventListener("load", iniciar, false);