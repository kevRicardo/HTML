function iniciar(){
    origen1 = document.getElementById('imagen');
    origen1.addEventListener('dragstart',arrastrado,false);
    origen1.addEventListener('dragend', finalizado, false);

    destino = document.getElementById('cajasoltar');
    destino.addEventListener('dragenter',entrando,false);
    destino.addEventListener('dragleave', saliendo, false);
    destino.addEventListener('dragover', function(e){
	e.preventDefault();},false);
    destino.addEventListener('drop',soltado,false);
}
function entrando(e){
    e.preventDefault();
    destino.style.background = 'rgba(0,150,0,0.2)';
}
function saliendo(e){
    e.preventDefault();
    destino.style.background = '#FFFFFF';
}
function finalizado(e){
    elemento = e.target;
    elemento.style.visibility = 'hidden';
}
function arrastrado(e){
    var codigo = '<img src="' + origen1.getAttribute('src') + '">';
    e.dataTransfer.setData('Text',codigo);
}
function soltado(e){
    e.preventDefault();
    destino.style.background = '#FFFFFF';
    destino.innerHTML = e.dataTransfer.getData('Text');
}
window.addEventListener('load', iniciar, false);
