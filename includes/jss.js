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

/*
$('.nav-item').click(function(event) {
    var pageArray = [$("#indexPg"), $("#aboutPg"), $("#archivePg")];
	for (var i = 0; i < pageArray.length; i++){
		if ($(event.target).is(pageArray[i])) {
		   //alert(event.target.id + ' was clicked.'); 
		   $("#test").append(event.target.id)
			pageArray[i].attr("class", "nav-link active");
		}
	}
});
*/

	$('.nav-item').click(function(event) {
	$('.nav-item').removeClass('active');
	$(event.target).addClass('active');;
});

 $(document).on("mouseover mouseout", ".active", function(){
          alert("rwgweg");
     }); 

	

});