function mostraralerta(){
	alert('hizo clic!');
}
function hacerclic(){
	/*Se implementan formas de hacer clic en el primer p*/
	/*document.getElementsByTagName('p')[0].onclick=mostraralerta;*/
	/*document.querySelector("#principal p:first-child").onclick=mostraralerta;*/
	/*var lista=document.querySelectorAll("#principal p");
	lista[0].onclick=mostraralerta;*/
	/*Se implementa para todos los p*/
	/*var lista=document.querySelectorAll("#principal p");
	for (var f = 0; f < lista.length; f++){
		lista[f].onclick=mostraralerta;
	}*/
	var lista=document.getElementById('principal').querySelectorAll("p");
	lista[0].onclick=mostraralerta;
}
window.onload=hacerclic;