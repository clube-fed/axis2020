//1. Call global slick slider min js
//<script src="##SITEPATH##/A_Master/library/js/Slick/slick.min.js"></script>

//2. Define function initSlick below script call

//3. Set up photo album plugin to carousel, flow, show all slides

//4. Add HTML snippet for item

//5. Add initSlick to onPluginLoadFinish + onCategoryChange

function initSlick(){
  $j('[id*="photoPluginWrapper"] > .photoGalleryThumbPageDiv:not([style*="none"]) > .carousel').slick({
  centerMode: true,
  centerPadding: '15%',
  slidesToShow: 1,
  prevArrow:'<button type="button" class="slick-prev"><em class="nc-icon-glyph arrows-1_bold-left"></em><span class="sr-only">Previous</span></button>',
  nextArrow:'<button type="button" class="slick-next"><em class="nc-icon-glyph arrows-1_bold-right"></em><span class="sr-only">Next</span></button>',
  responsive: [
   {
    breakpoint: 767,
    settings: {
     centerPadding: '7%'
    }
   }
  ]
  });
}
