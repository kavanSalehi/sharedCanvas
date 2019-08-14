var canvas = document.getElementById('canvas1'); //our drawing canvas
var ctx = canvas.getContext('2d');
let boxes = [];


var draw_canvas = function(){
	//ctx.fillStyle="#000000";
	//ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.fillStyle ="#ff0000";
	ctx.fillRect(20,20,100,100);
}

function handle_enter_session_button() {
   //get the user input
    var username = document.getElementById("userTextField1").value;
	var shipColour = document.getElementById("userTextField2").value;
}


//this function is run when the page loads
document.addEventListener("DOMContentLoaded",function(){

	//configure the canvas
	draw_canvas();
});
