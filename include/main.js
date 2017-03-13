$(document).ready(function(){

  $("#home-page p").addClass("load");

  // ------------ Back to top button ---------------

  $(document).ready(function() {

var offset = 250;

var duration = 300;


$(window).scroll(function() {

    if ($(this).scrollTop() > offset) {

        $(".back-to-top").fadeIn(duration);

    } else {

        $(".back-to-top").fadeOut(duration);

    }

});

$(".back-to-top").click(function(event) {

    event.preventDefault();

    $("html, body").animate({scrollTop: 0}, duration);

    return false;

})

});


//-------- landing elements -----------

// $(window).scroll(function() {
//
//     var wScroll = $(this).scrollTop();
//
//     if(wScroll > $('.gallery-item').offset().top - ($(window).height() / 1.5)) {
//         $(".gallery-item").each(function(i){
//             setTimeout(function(){
//                 $(".gallery-item").eq(i).addClass("is-showing");
//             }, 150 * (i+1));
//         });
//     };
//
//     if(wScroll > $(imgContainer).offset().top - ($(window).height() / 1.5)) {
//         $(imgContainer).each(function(i){
//             setTimeout(function(){
//                 $(imgContainer).eq(i).addClass("is-showing");
//             }, 150 * (i+1));
//         });
//     };
//
// });


// Toggle landind elements of the given imgContainer

var toggleShowing = function(imgContainer){
    $(window).scroll(function() {
      var wScroll = $(this).scrollTop();
      if(wScroll > $(imgContainer).offset().top - ($(window).height() / 1.3)) {
          $(imgContainer).each(function(i){
              setTimeout(function(){
                  $(imgContainer).eq(i).addClass("is-showing");
              }, 120 * (i+1));
          });
      };
    });
}


// If we are on the home page select 'gallery-item'
// otherwise we need to select spread-images
var curPage = location.pathname.substring(1);
if ( curPage == 'index.html' || curPage == ''){
  toggleShowing('.gallery-item');
} else {
  toggleShowing('.work-image');
  toggleShowing('.work-image-large');
}

//-------------  masonry layout ------------

// $(function(){
//
//     var spreads = $('#spreads');
//
//     spreads.imagesLoaded(function(){
//         spreads.masonry({
//             itemSelector : '.header-image'
//         });
//     });
// });

//-------------  remove blank divs on mobile ------------

var bhi = $(".blank-header-image"),
    rbhi = $(".remove-blank-header-image");


// if( typeof window.orientation !== 'undefined' ) {
//   console.log('active');
//   bhi.addClass(rbhi);
// } else {
//   bhi.removeClass(rbhi);
// }

bhi.addClass(rbhi);

//-------------  sticky nav  ---------------

var ll = $(".landing-logo"),
    lls = "landing-logo-scroll",
    ldi = $(".landing-image").height();

$(window).scroll(function() {
  if( $(this).scrollTop() >= ldi / 2.7) {
    ll.addClass(lls);
  } else {
    ll.removeClass(lls);
  }
});

var nv = $("#nav"),
    nvs = "nav-scroll",
    gallery = $(".gallery"),
    galpad = "gallery-padding";

$(window).scroll(function() {

  if( $(this).scrollTop() > ldi * 1) {
    nv.addClass(nvs);
    gallery.addClass(galpad);
  } else {
    nv.removeClass(nvs);
    gallery.removeClass(galpad);
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

//-------------  load img  ---------------

$(document).ready(function() {

$(".header-image-fade").fadeIn();


});
