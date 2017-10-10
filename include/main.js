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
// otherwise we need to select work-images and work-image-large
var curPage = location.pathname.substring(1);
if ( curPage == 'index.html' || curPage == ''){
  toggleShowing('.gallery-item');
} else {
  toggleShowing('.work-image');
  toggleShowing('.work-image-large');
  toggleShowing('.work-image-medium');
}


//-------------  sticky nav  ---------------

var pageLogo = $(".landing-logo"),
    logoScrollLock = "landing-logo-scroll",
    logoHeight = $(".landing-image").height();

$(window).scroll(function() {

  // Locks the pageLogo when user scrolls to 45%
  // the length of the web page
  if( $(this).scrollTop() / $(this).height() >= .45) {
    pageLogo.addClass(logoScrollLock);
  } else {
    pageLogo.removeClass(logoScrollLock);
  }
});

var navBar = $("#nav"),
    navScrollLock = "nav-scroll",
    gallery = $(".gallery"),
    galleryPadding = "gallery-padding";

$(window).scroll(function() {

  if( $(this).scrollTop() > logoHeight) {
    navBar.addClass(navScrollLock);
    gallery.addClass(galleryPadding);
  } else {
    navBar.removeClass(navScrollLock);
    gallery.removeClass(galleryPadding);
  }
});


//---------------- resize landing image for mobile -----------------

var landingDiv = $("#landing-background-img"),
    landingImage = "landing-image",
    landingImageMobile = "landing-mobile-image";

$(window).ready(function() {

  if( $(window).width() <= 800) {
    console.log(landingDiv);
    landingDiv.removeClass(landingImage);
    landingDiv.addClass(landingImageMobile);
  } else {
    landingDiv.removeClass(landingImageMobile);
    landingDiv.addClass(landingImage);
  }
});



//-------- found online ----------
// $(function() {
//   if($(window).width() <= 610) {
//     $("img").each(function() {
//       $(this).attr("src", $(this).attr("src").replace("images/620x410/", "images/310x205/"));
//     });
//   }
// });

});
