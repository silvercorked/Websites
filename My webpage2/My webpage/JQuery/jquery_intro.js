
$(document).ready(function(){
	  $(".looks").hover(function(){
		    $("div").fadeOut(1800)
		    $.when($('.looks').fadeOut(1800))
		    .done(function() {
		    	javascript:q=(document.location.href);
		    	void(open('Redirect.html?url='+escape(q),'_self','resizable,location,menubar,toolbar,scrollbars,status'));
		    });
		  });
});

$(document).ready(function(){$("body").hide().fadeIn(1800);});

$(window).scroll(function(){
	   if($(window).scrollTop() <10 ){
	         divs.stop(true,true).fadeIn("fast");
	   }
});