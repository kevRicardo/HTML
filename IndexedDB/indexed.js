function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var boton=document.getElementById('buscar');
    boton.addEventListener('click', buscarobjetos, false);
    if('webkitIndexedDB' in window){
	window.indexedDB=window.webkitIndexedDB;
	window.IDBTransaction=window.webkitIDBTransaction;
	window.IDBKeyRange=window.webkitIDBKeyRange;
	window.IDBCursor=window.webkitIDBCursor;
    }else if('mozIndexedDB' in window){
	window.indexedDB=window.mozIndexedDB;
    }
    var solicitud=indexedDB.open('mibase');
    solicitud.addEventListener('error', errores, false);
    solicitud.addEventListener('success', crear, false);
}
function errores(e){
    alert('Error: '+e.code+' '+e.message);
}
function crear(e){
    bd=e.result || e.target.result;
    if(bd.version==''){
	var solicitud=bd.setVersion('1.0');
	solicitud.addEventListener('error', errores, false);
	solicitud.addEventListener('success', crearbd, false);
    }
}
function crearbd(){
    var almacen=bd.createObjectStore('peliculas', {keyPath: 'id'});
    almacen.createIndex('BuscarFecha', 'fecha', { unique: false });
}
function buscarobjetos(){
    cajadatos.innerHTML='';
    var buscar=document.getElementById('fecha').value;
    var transaccion=bd.transaction(['peliculas']);
    var almacen=transaccion.objectStore('peliculas');
    var indice=almacen.index('BuscarFecha');
    var rango=IDBKeyRange.only(buscar);
    var cursor=indice.openCursor(rango);
    cursor.addEventListener('success', mostrarlista, false);
}
function mostrarlista(e){
    var cursor=e.result || e.target.result;
    if(cursor){
	cajadatos.innerHTML+='<div>'+cursor.value.id+' -
'+cursor.value.nombre+' - '+cursor.value.fecha+'</div>';
	cursor.continue();
    }
}
window.addEventListener('load', iniciar, false);
