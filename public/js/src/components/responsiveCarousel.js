//responsify album for carousel

$j.fn.responsifyCarouselThumbs = function() {
    /*call $j().responsifyPhotoAlbum(); on window resize, and inside photoalbum events on load and after image change*/
  
    $j('[id^="photoPluginWrapper"]').each(function() {
      var selectedPADivHeight = $j(
        '> div:not([style*="none;"] ) .carousel',
        this
      ).height();
      /*spaceBelowPA in case you need whitespace for some reason*/
      var ww = $j(window).width();
      $j(this).css({
        width: "100%",
        height: selectedPADivHeight + "px",
        "min-height": selectedPADivHeight + "px"
      });
    });
  };
  
  $j(window).on("resize", $j().responsifyCarouselThumbs);