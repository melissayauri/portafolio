$(function() {
  /* Efecto en el navbar*/
  $('#navbar').hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 350) {
      $('#navbar').fadeIn(1000);
    } else {
      $('#navbar').fadeOut(1000);
    }
  });
  /* Efecto hover para que se muestre la información del proyecto*/
  $('.proyecto-img').hover(
    function() {
      $(this).children().eq(0).fadeIn(1000);
    },
    function() {
      $(this).children().eq(0).fadeOut();
    }
  );
});
