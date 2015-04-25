
function Chat(usuario, mensaje){ // creada clase // OJO DEFINIR CLASES EN SINGULAR
	this.usuario = usuario;
	this.mensaje = mensaje;

}

var mensaje = new Chat('Usuario', 'Mensaje');

Chat.mensaje = []; // array de mensajes

Chat.enviar = function(e){
	e.preventDefault();
	var usuario = document.getElementById('usuario').value;
	var mensaje = document.getElementById('chatmsg').value;
	var msg = new Chat(usuario, chatmsg);
	
	Chat.mensaje.push(msg);

	Chat.enviar(e);	
}