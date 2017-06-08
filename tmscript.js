$(document).ready(function() {
  $(window).on("hashchange", function(){
  $('section').hide();
  $(window.location.hash).show();
  $(".gallery").colorbox({rel:'gallery'});
});


});
