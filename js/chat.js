
function Chat(usuario, mensaje){ // creada clase // OJO DEFINIR CLASES EN SINGULAR
	this.usuario = usuario;
	this.mensaje = mensaje;

}

var mensaje = new Chat('Usuario', 'Mensaje');

Chat.mensaje = []; // array de mensajes

// send mensaje
Chat.enviar = function(e){
	e.preventDefault();
	var usuario = document.getElementById('usuario').value;
	var mensaje = document.getElementById('chatmsg').value;
	var msg = new Chat(usuario, chatmsg);
	Chat.mensaje.push(msg);
	console.log(Chat.mensaje);
	
	Chat.borrar(e);
	Chat.mostrar();
}

// clear mensaje
Chat.borrar = function(e){
	var mensaje = document.getElementById('chatmsg');
	chatmsg.value ='';

}

// mostrar chats
Chat.mostrar = function(){
	var conversa = '';
	Chat.mensaje.map(function(elemento, indice){

		conversa += '<article>';
				 + '<h4>' + elemento.usuario + '</h4>';
				 + '<p>' + elemento.chatmsg + '</p>';
				 + '</article>';
	})

	document.getElementById('conversa').innerHTML = conversa;
}






