$(document).ready(function() {

  $(window).on("scroll", function() {
      var scrollDistance = $(window).scrollTop();

      if (scrollDistance >= 80) {
          $("#app-header")
              .removeClass("top")
              .addClass("sticky");
      }

      else {
          $("#app-header")
              .removeClass("sticky")
              .addClass("stop");
      }
  });


});
