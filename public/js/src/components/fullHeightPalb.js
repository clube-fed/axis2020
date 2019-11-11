$j.fn.fullHeightPalb = function() {
    /*call $j().responsifyPhotoAlbum(); on window resize, and inside photoalbum events on load and after image change*/
  
    $j('.media div[id^="photoPluginWrapper"]').each(function() {
      var selectedPADiv = $j('> div:not([style*="none;"])', this);
      var brandHeight = $j("header").outerHeight();
      var footerHeight = $j("footer").outerHeight();
      var smallHeight = $j(window).outerHeight();
      var selectedPADivHeight = $j(window).outerHeight() - footerHeight; //brand is 100px
      /*spaceBelowPA in case you need whitespace for some reason*/
      var spaceBelowPA = 0;
      var totalPAHeight = selectedPADivHeight + spaceBelowPA;
      console.log(smallHeight);
      $j(this).css({
        width: "100%",
        height: smallHeight + "px",
        "min-height": smallHeight + "px"
      });
  
      //If want to show at different window widths
      var ww = $j(window).width();
  
      if (ww > 767) {
        $j(this).css({
          width: "100%",
          height: totalPAHeight + "px",
          "min-height": totalPAHeight + "px"
        });
      } else {
        $j(this).css({
          width: "100%",
          height: smallHeight + "px",
          "min-height": smallHeight + "px"
        });
      }
    });
  };