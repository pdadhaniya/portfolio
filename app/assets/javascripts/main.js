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

$(document).on('click', '.about-me', function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $("body").offset().top
  }, 2000);
});

$(document).on('click', '.skills', function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".skills-section").offset().top
  }, 2000);
});

$(document).on('click', '.projects', function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".projects-section").offset().top
  }, 2000);
});

$(document).on('click', '.contact-me', function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".contact-section").offset().top
  }, 3500);
});