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

});
