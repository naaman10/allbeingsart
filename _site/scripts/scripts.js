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
    likes: true,
    captions: true,
    limit: 6,
		success: function(data) {
			console.log(data);
      $(".instagram-lite").addClass('row');
      $(".il-item").addClass('col-6 col-md-4');
      $(".il-item a").on('click', function() {
        event.preventDefault();
        $(".instagram-likes").text("");
        $(".instagram-caption").text("");
        var postImage = $(this).children(".il-photo__img").attr('src');
        var postLink = $(this).attr('href');
        var postLikes = $(this).siblings(".il-photo__meta").children('.il-photo__likes').text();
        var postCaption = $(this).siblings(".il-photo__meta").children('.il-photo__caption').html();
        console.log(postLikes);
        console.log(postLink);
        var postId = $(this).attr('data-instagram-id');
        $(".instagram-media").attr('src', postImage);
        $("a.instagram-link").attr('href', postLink);
        $(".instagram-likes").append('<i class="fas fa-heart" id=""></i> ' + postLikes);
        $(".instagram-caption").append(postCaption);
        $("#instagramModal").modal('show');
      });
		},
		error: function(data) {
			console.log(data);
			$('.instagram-lite').remove();
		}
	});
});
$(".instagram-media").hover(function() {
  event.preventDefault();
  $(".instagram-link").css('display','block');
});
$(".instagram-media").click(function() {
  $("#instagramModal").modal('hide');
});
