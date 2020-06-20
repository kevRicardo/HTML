function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var archivos=document.getElementById('archivos');
    archivos.addEventListener('change', procesar, false);
}
function procesar(e){
    var archivos=e.target.files;
    cajadatos.innerHTML='';
    var archivo=archivos[0];
    if(!archivo.type.match(/image.*/i)){
	alert('seleccione una imagen');
    }else{
	cajadatos.innerHTML+='Nombre: '+archivo.name+'<br>';
	cajadatos.innerHTML+='Tamaño: '+archivo.size+' bytes<br>';
	var lector=new FileReader();
	lector.onload=mostrar;
	lector.readAsDataURL(archivo);
    }
}
function mostrar(e){
    var resultado=e.target.result;
    cajadatos.innerHTML+='<img src="'+resultado+'">';
}
window.addEventListener('load', iniciar, false);
