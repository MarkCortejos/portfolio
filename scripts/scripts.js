// Doc Ready Begins
$(function() {

  $('a').smoothScroll({
    speed: 1000
  });

  $('.hamburger > i').click(function() {
    $('.hamburger > i').toggleClass('fa-times fa-bars');
    $('.dropMenu').slideToggle();
  })

  $('#contact').on('submit', function(event) {
    event.preventDefault();
  })

}) // Doc Ready Ends