$(document).ready(function(e) {
	$('body').live('mousemove', function(e) {
		var xPos = e.pageX;
		var yPos = e.pageY;
		$('#cont1').css({
			marginLeft : xPos / -1,
			marginTop : yPos / -1
		});
	});
});
$(document).ready(function(e) {
	$('body').live('mousemove', function(e) {
		var xPos = e.pageX;
		var yPos = e.pageY;
		$('#cont2').css({
			marginLeft : xPos / -1,
			marginTop : yPos / -1
		});
	});
});
