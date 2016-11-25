$("document").ready(function(){
    
$("#map").hide();
    
// Menu Toggle 
$("#menu-toggle").click(function(e) {
e.preventDefault();
$("#wrapper").toggleClass("toggled");
    
$(".music").fadeOut(1500);
$(".search-form").delay(1500).fadeIn(1700);
$("#menu-toggle").html("Close Search");
});



}); // close (document).ready
 