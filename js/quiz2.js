// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){
	$('.links li a').on('click', function(e) {
		e.preventDefault();
		alert('you clicked a link, good for you');
	});

	console.log("this is a message for you!!!");
})(jQuery);

$("button#goodbye").click(function() {
    $("div#show").css("display", "none");
	$("footer").css("display", "block");
});

var listItems = $(".olc li");
listItems.each(function(idx, li) {
    var product = $(li);
	$(product).css("color", "yellow");  
	$(product).css("text-decoration","underline");
});

var ac = document.getElementsByClassName("ac");
var i;
for (i = 0; i < ac.length; i++) {
    ac[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
$("button#right").click(function(){
	$("body").css("text-align","right");
	$("button#right").css("display","none");
	$("button#left").css("display","inline");
});
$("button#left").click(function(){
	$("body").css("text-align","left");
	$("button#left").css("display","none");
	$("button#right").css("display","inline");
});