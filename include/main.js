$(document).ready(function(){

  $("#home-page p").addClass("load");

  // ------------ Back to top button ---------------

  jQuery(document).ready(function() {

var offset = 250;

var duration = 300;

jQuery(window).scroll(function() {

if (jQuery(this).scrollTop() > offset) {

jQuery(".back-to-top").fadeIn(duration);

} else {

jQuery(".back-to-top").fadeOut(duration);

}

});

jQuery(".back-to-top").click(function(event) {

event.preventDefault();

jQuery("html, body").animate({scrollTop: 0}, duration);

return false;

})

});

//-------------  sticky nav  ---------------

var ll = $(".landing-logo"),
    lls = "landing-logo-scroll",
    ldi = $(".landing-image").height();

$(window).scroll(function() {
  if( $(this).scrollTop() >= ldi / 2) {
    ll.addClass(lls);
  } else {
    ll.removeClass(lls);
  }
});

var nv = $("#nav"),
    nvs = "nav-scroll";

$(window).scroll(function() {
  // console.log($(this).scrollTop(), ldi * 1, $(this).scrollTop() > ldi * 1)
  if( $(this).scrollTop() > ldi * 1) {
    nv.addClass(nvs);
  } else {
    nv.removeClass(nvs);
  }
});

  /*$(".modal, .modal-background").click(function() {

    // Lock the scroll bar while the modal is active
    $("body").toggleClass("scroll-locked");
    $(this).find(".modal-content, .modal-background").toggleClass("active");

    // Center the modal
    var offset = $(document).scrollTop();
    var viewportHeight = $(window).height();

    // Position the modal relative to the scroll location
    var modal = $(this).find(".modal-content");
    left = Math.max($(window).width() - modal.outerWidth(), 0) / 2;
    modal.css({
      top: $(window).scrollTop() + 70,
      left:left + $(window).scrollLeft()
    });
  });*/

});

//============= Mobile ==============


	/*if( windowWidth <= 640 ) {
		if( $("grid-item").length > 0 ) {
			mobileMenuClone.insertAfter("#menu");
			$("#navigation-mobile #menu-nav").attr("id", "menu-nav-mobile");
		}
	} else {
		$("#navigation-mobile").css("display", "none");
		if ($("#mobile-nav").hasClass("open")) {
			$("#mobile-nav").removeClass("open");
		}
	}
}*/
