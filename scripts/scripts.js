mySite = {}

mySite.clearFields = () => {
  setTimeout(function() {
    $('#nameField').val('');
    $('#emailField').val('');
    $('#messageField').val('');
  }, 500)

  // swal("Here's the title!", "...and here's the text!")
  Swal.fire({
    title: 'Message Sent!',
    text: 'Looking forward to chatting with you!',
    type: 'success',
    confirmButtonText: 'Continue',
    background: 'rgb(30, 35, 40)',
    confirmButtonColor: '#00A651',
  })
}

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

  $('#contact').on('submit', function() {
    mySite.clearFields();
  })

}) // Doc Ready Ends