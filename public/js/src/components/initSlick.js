function slickEl(el,slidesNum) {
    $j(el).slick({
       dots: false,
       arrows: true,
       infinite:false,
       slidesToShow: slidesNum,
       slidesToScroll: 1,
       speed:300,
       prevArrow: '<button type="button" class="slide-m-prev"><em class="nc-icon-glyph arrows-1_minimal-left"><span class="sr-only">Previous</span></em></button>',
       nextArrow: '<button type="button" class="slide-m-next"><em class="nc-icon-glyph arrows-1_minimal-right"><span class="sr-only">Next</span></em></button>',
       responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        }
      ]
    });
  }