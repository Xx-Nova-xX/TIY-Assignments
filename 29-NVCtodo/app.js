$("#filters").click(function() {
	$('.active, .completed').show();
	console.log("1st");
});

$('#filters .active').click(function() {
	$('.active').show();
	$('#todo-list .completed').hide();
	console.log("2nd");
	return false;
});

$('#filters .completed').click(function() {
	$('.completed').show();
	$('#todo-list .active').hide();
	console.log("3rd");
	return false;
});