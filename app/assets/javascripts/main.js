$(document).on('click', '.button1', function(){
  $('html, body').animate({
    scrollTop: $(".two").offset().top
  }, 2000);
});

$(document).on('click', '.button2', function(){
  $('html, body').animate({
    scrollTop: $(".three").offset().top
  }, 2000);
});

$(document).on('click', '.skills', function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".two").offset().top
  }, 2000);
});

$(document).on('click', '.projects', function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".three").offset().top
  }, 2000);
});

$(document).on('click', '.contact', function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".four").offset().top
  }, 3500);
});