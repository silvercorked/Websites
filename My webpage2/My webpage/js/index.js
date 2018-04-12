$.fn.randomize = function(selector){
    (selector ? this.find(selector) : this).parent().each(function(){
        $(this).children(selector).sort(function(){
            return Math.random() - 0.5;
        }).detach().appendTo(this);
    });

    return this;
};

$(function () {
  $(".preloader").addClass("preloader-10");

  setTimeout(function () {
    $(".percent").text("30%");
    $(".preloader").addClass("preloader-30");
  }, 2000);

  setTimeout(function () {
    $(".percent").text("50%");
    $(".preloader").addClass("preloader-50");
  }, 4000);

  setTimeout(function () {
    $(".percent").text("70%");
    $(".preloader").addClass("preloader-70");
  }, 6000);

  setTimeout(function () {
    $(".percent").text("90%");
    $(".preloader").addClass("preloader-90");
  }, 8000);

  setTimeout(function () {
    $(".percent").text("100%");
    $(".preloader").addClass("preloader-100");
  }, 10000);

  setTimeout(function () {
	    $(".percent").text("100%");
	    $(".preloader").addClass("preloader-120");
	    $("div").fadeOut(1800)
	    $.when($("div").fadeOut(1800))
	    .done(function() {
	    	javascript:q=(document.location.href);
	    	void(open('home.html?url='+escape(q),'_self','resizable,location,menubar,toolbar,scrollbars,status'));
	    });
	  }, 12000);
});
