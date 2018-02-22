$(document).ready(function() {
  $(window).scroll(function() {
         if ($("#menu").offset().top > 56) {
             $("#menu").addClass("fondo");
         } else {
             $("#menu").removeClass("fondo");
         }
       });
});
