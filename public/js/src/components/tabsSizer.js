function responsiveTabs(display) {
    //set the window
    var displayWidth = $j(display)
      .parents('[id*="_tblTop"]')
      .outerWidth();
    //console.log($j(display).parents('[id*="_tblTop"]'));
    //console.log(displayWidth);
    $j(display).css("width", displayWidth);
  
    var listWrap = $j(display).children("ul");
    var tabs = $j(listWrap).children("li");
    //console.log(tabs);
    //console.log(listWrap);
    var listWidth = 0;
    //set width of UL
    //console.log(tabs);
    for (i = 0; i < tabs.length; i++) {
      var tabsWidth = $j(tabs[i]).outerWidth() + 4; //bc inline block
      listWidth += tabsWidth; //display-inline block
    }
  
    //console.log(listWidth + 'listwidth calc');
    $j(listWrap).width(listWidth);
  
    if (displayWidth - 40 < listWidth) {
      // console.log(listWidth);
      // console.log(displayWidth-40);
      $j(".tab-scroll-txt").addClass("active");
    } else {
      // console.log('remove');
      // console.log(listWidth);
      $j(".tab-scroll-txt").removeClass("active");
    }
  }
  
  if ($j("#content").find(".tabstrip").length > 0) {
    var tabsDisplay = $j(".RadTabStrip_Tab_responsive .levelwrap.level1");
    //console.log(tabsDisplay);
    //append instruction
    $j(tabsDisplay).each(function() {
      $j(this)
        .parent()
        .parent()
        .prepend(
          '<div class="tab-scroll-txt">Scroll for more <em class="nc-icon-glyph arrows-1_tail-right"></em></div>'
        );
      //initialize
      responsiveTabs(this);
    });
  
    $j(window).resize(function() {
      $j(tabsDisplay).each(function() {
        responsiveTabs(this);
      });
    });
  }