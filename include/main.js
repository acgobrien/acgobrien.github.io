$(document).ready(function(){

  $("#home-page p").addClass("load");


  $(".modal, .modal-background").click(function() {

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
  });

});

//============= Mobile ==============


	/*if( windowWidth <= 640 ) {
		if( $('grid-item').length > 0 ) {
			mobileMenuClone.insertAfter('#menu');
			$('#navigation-mobile #menu-nav').attr('id', 'menu-nav-mobile');
		}
	} else {
		$('#navigation-mobile').css('display', 'none');
		if ($('#mobile-nav').hasClass('open')) {
			$('#mobile-nav').removeClass('open');
		}
	}
}*/
