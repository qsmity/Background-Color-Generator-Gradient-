var _ = require('lodash'); 

var numArray = [1, 2, 3, 5, 6, 7]; 
console.log("array", _.without(array, 3)); 
var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var css = document.getElementById("h3");
var body = document.getElementById("body"); 
var button = document.querySelector(".color3"); 

function setOnLoad() {
	setGradient(); 
};

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ input1.value 
	+ ", " 
	+ input2.value 
	+ ")";

	css.textContent = body.style.background; 
};

function randomNum() {
	return Math.floor(Math.random() * 255); 
};

function randomColor() {
	var a = randomNum();
	var b = randomNum();
	var c = randomNum(); 

	return body.style.background = "rgb(" 
	+ a 
	+", "
	+ b
	+ ", "
	+ c 
	+ ")"
}; 

setOnLoad(); 

input1.addEventListener("input", setGradient);

input2.addEventListener("input", setGradient);

button.addEventListener("click", function(){
		body.style.background = "linear-gradient(to right, " 
	+ randomColor() 
	+ ", " 
	+ randomColor()
	+ ")";
});


