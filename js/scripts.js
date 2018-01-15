$(document).ready(function() {
  // burger menu toggle
  $('.nav__toggle').click(function() {
    $('.nav__main').toggleClass('is-open');
    $('.hamburger').toggleClass('is-open');
  })

  var scrollLink = $('.scroll');
  //smooth page scroll
  scrollLink.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1500);
  })

});
