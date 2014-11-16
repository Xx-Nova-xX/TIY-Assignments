(function( window ) {
	'use strict';

$('.selected').css("font-weight", "bold");

$("#filters").click(function() { /*selected = All function*/
	$('.active, .completed').show();
	$('.selected').css("font-weight", "bold");
	$('.active, .completed').css("font-weight", "none");
});

$('#filters .active').click(function() { /*active function*/
	$('.active').show();
	$('.active').css("font-weight", "bold");
	$('.completed, .selected').css("font-weight", "none");
	$('#todo-list .completed').hide();
	return false;
});

$('#filters .completed').click(function() { /*completed function */
	$('.completed').show();
	$('.completed').css("font-weight", "bold");
	$('.active, .selected').css("font-weight", "none");
	$('#todo-list .active').hide();
	return false;
});


})( window );

/*(function(window) {
	'use strict';
}

$('#main' '.toggle').click(function() {
	$('.toggle').css("text-decoration", "line-through");
	return false;
});

})( window );*/