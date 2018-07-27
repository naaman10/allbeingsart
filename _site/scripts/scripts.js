(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

$(function() {

	$('.instagram-lite').instagramLite({
		accessToken: '5819940543.4d0de12.ecb76494c8694bf1a60201e8473d99ca',
		list: true,
		urls: true,
    limit: 6,
		success: function(data) {
			console.log(data);
      $(".instagram-lite").addClass('row');
      $(".il-item").addClass('col-6 col-md-4');
      $(".il-item").on('click', function() {
        event.preventDefault();
        $("#instagramModal").replaceWith('<div class="modal" tabindex="-1" role="dialog" id="instagramModal"></div>');
        var postLink = $(this).children('a').attr('href');
        $("#instagramModal").append('<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="' + postLink + '" data-instgrm-version="9" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote>');
        console.log("post: " + postLink);
        $("#instagramModal").modal('show');
      });
		},
		error: function(data) {
			console.log(data);
			$('.instagram-lite').remove();
		}
	});
});
