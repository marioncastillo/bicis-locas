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
	if(!(/^[A-Z][a-z]{3,19}$/).test(apellido)) 

}
	var email = document.getElementById("input-Email").value;
	var password = document.getElementById("input-Password").value;
	var selecion = document.getElementsByClassName("form-control").selectedIndex;


}