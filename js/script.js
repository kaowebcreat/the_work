
$(function () {
    $(".represent_slick01").slick({
      autoplay: true,
      dots: true,
    });
  });

  $(document).ready(function() {
    function checkFadeIn() {
        $('.fade-in-section').each(function() {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < viewportBottom - 100) { // 100px earlier than element comes into view
                $(this).addClass('is-visible');
            }
        });
    }

    $(window).on('scroll', checkFadeIn);
    checkFadeIn(); // For initial check on page load
});