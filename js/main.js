function validateForm(){
	/* Escribe tú código aquí */
	function nombre(){
	var nombre = document.getElementById("name").value;
	if(!(/^[A-Z][a-z]{3,19}$/).test(nombre)) {


	}

	var cajaDiv = document.getElementsByClassName("name-container input-box")[0];
	var x = document.createElement("span");
	var t = document.createTextNode("Escribe tu nombre correcto");
	x.appendChild(t);
	cajaDiv.appendChild(x);
	

}
nombre();

function apellido(){
	var apellido = document.getElementById("lastname").value;
	if(!(/^[A-Z][a-z]{3,19}$/).test(apellido)) {

	}
	var cajaDiv = document.getElementsByClassName("lastname-container input-box")[0];
	var x = document.createElement("span");
	var t = document.createTextNode("Escribe tu apelllido correcto");
	x.appendChild(t);
	cajaDiv.appendChild(x);
	

}
apellido();

}

function email() {
	var dirEmail = document.getElementById("input-Email").value;

	        if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(dirEmail)){
	
	var x = document.createElement("span");
	var t = document.createTextNode("Escribe tu email correcto");
	var cajaDiv = document.getElementsByClassName("email-container input-box")[0];
	

	x.appendChild(t);
	cajaDiv.appendChild(x);
		} 	

}

email();

function contrasena(){
var password = document.getElementById("input-Password").value;

if (password=="123456" || password=="098765" || !(/^(?=.*\d).{6,}$/).test(password)){

	var x = document.createElement("span");
	var t = document.createTextNode("Escribe tu contreseña correcto");
	var cajaDiv = document.getElementsByClassName("form-group input-box")[0];
	

	x.appendChild(t);
	cajaDiv.appendChild(x);
}

}
	
	contreseña();
	

function select(){

		var select = document.getElementsByClassName("form-control").selectedIndex;

		if( select == null || select == 0 ) {
	  	
		} 

		var cajaDiv = document.getElementsByClassName("form-group input-box")[1];
		var x = document.createElement("span");
  	var t = document.createTextNode("Debe seleccionar su bicicleta");
 		x.appendChild(t);
 		cajaDiv.appendChild(x);
	}
	select();