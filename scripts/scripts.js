// Doc Ready Begins
$(function() {

  // Smooth scroll
  $('a').smoothScroll({
    speed: 1000
  });

  // Opens and closes hamburger menu on click
  $('.hamburger > i').on('click', function() {
    $('.hamburger > i').toggleClass('fa-times fa-bars');
    $('.dropMenu').slideToggle();
  })
  
  //Closes hamburger when a nav link is clicked
  $('.dropMenu a').on('click', function() {
    $('.hamburger > i').toggleClass('fa-times fa-bars');
    $('.dropMenu').slideToggle();
  });

  // prevent refresh on form submit
  $('#contact').on('submit', function(event) {
    event.preventDefault();
  })

}) // Doc Ready Ends