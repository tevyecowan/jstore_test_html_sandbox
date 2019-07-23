$(document).ready(function() {
	
window.onscroll = function() {scrollFunc()};

var navbar = $('#header');

var sticky = navbar.offsetTop;

function scrollFunc() {
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

	var pageArray = [$("#indexPg"), $("#aboutPg"), $("#archivePg")];
	
	$('.nav-item').click(function () {
		
		for (var i = 0; i < pageArray.length; i++){
			alert("clicked");
			
			if (pageArray[i].data('clicked', true)){
				pageArray[i].classList.add("active");
				alert("clicked" + pageArray[i].val())
			} 
			else {
				pageArray[i].classList.remove("active");
			}
		}
	});
	

});