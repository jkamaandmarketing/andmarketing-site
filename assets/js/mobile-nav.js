
$(document).ready(function() {
	$(".menu-trigger").on("click", function(e) {
	    $(this).stop(false, false).toggleClass('active');
        $(".mobilenav").slideToggle(500);
        $("body").toggleClass("noscroll");
	});
});


$( function(){
  $( '.click_hide' ).click( function(){
    $(".mobilenav").fadeOut();
	$("body").removeClass("noscroll");
  } );
} );

$( function(){
	$(".click_hide").on("click", function(e) {
	    $(".menu-trigger").stop(false, false).toggleClass('active');
		$("body").removeClass("noscroll");
  } );
} );