(function ($) {
  "use strict";

  const scrollButton = $(".back-to-top");

  // Show / hide button on scroll
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      scrollButton.stop(true, true).fadeIn(200);
    } else {
      scrollButton.stop(true, true).fadeOut(200);
    }
  });

  // Smooth scroll to top
  scrollButton.on("click", function (e) {
    e.preventDefault();

    $("html, body").stop(true).animate(
      {
        scrollTop: 0
      },
      500
    );
  });

})(jQuery);
