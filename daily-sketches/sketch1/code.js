var java_elem = document.getElementById("java");
var script_elem = document.getElementById("script");
var mouse_elem = document.getElementById("mouse");
var move_elem = document.getElementById("move");

document.onmousemove = function(event) {

	java_elem.style.width = event.pageX + "px";
	java_elem.style.height = event.pageY + "px" -200;

	script_elem.style.width = (window.innerWidth - event.pageX) + "px";
	script_elem.style.height = event.pageY + "px";
	script_elem.style.left = event.pageX + "px";

	mouse_elem.style.width = event.pageX + "px";
	mouse_elem.style.height = (window.innerHeight - event.pageY) + "px";
	mouse_elem.style.top = event.pageY + "px";

	move_elem.style.width = (window.innerWidth - event.pageX) + "px";
	move_elem.style.height = (window.innerHeight - event.pageY) + "px";
	move_elem.style.left = event.pageX + "px";
	move_elem.style.top = event.pageY + "px";

}

function show_image()
{
	document.getElementById("image_holder").style.display="block";  
	document.getElementById("textDisappear").style.display="none";
 }

 