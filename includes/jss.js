$(document).ready(function() {
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



var rand;
$("#submit").click(function(){
	//alert("submitted");
	rand = Math.floor((Math.random(0,100)*100)+1);
	$("#test").empty();
	 $("#test").append(" " + rand)
});

	$('#indexPg').click(function () {
		$("#indexPg").attr("class", "nav-link active");
		$("#aboutPg").attr("class", "nav-link");
		$("#archivePg").attr("class", "nav-link");
	});
	$('#aboutPg').click(function () {
		$("#aboutPg").attr("class", "nav-link active");
		$("#indexPg").attr("class", "nav-link");
		$("#archivePg").attr("class", "nav-link");
	});
	$('#archivePg').click(function () {
		$("#archivePg").attr("class", "nav-link active");
		$("#aboutPg").attr("class", "nav-link");
		$("#indexPg").attr("class", "nav-link");
	});
});