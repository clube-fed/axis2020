//Album Functions
// Plugin Load Finish
function aFirstLoad(gs) {
  var curIndexDiv =
    gs.CurrentDivID.substring(0, gs.CurrentDivID.length - 1) + gs.CurrentIndex;
  gs.PluginWrapper.css("min-height", $j("#" + curIndexDiv).height() + "px");
}
// On Before Transition Starts
function aBeforeTransition(gs) {
  var curIndexDiv =
    gs.CurrentDivID.substring(0, gs.CurrentDivID.length - 1) + gs.CurrentIndex;
  var tHeight = 0;
  $j("#" + curIndexDiv).show();
  tHeight = $j("#" + curIndexDiv).height();
  $j("#" + curIndexDiv).hide();
  gs.PluginWrapper.css("min-height", tHeight + "px");
}

// Resize
function aScrollResize(tag) {
  var aScrollTarget = $j('[id^="photoPluginWrapper"]');
  if (tag) {
    aScrollTarget = $j(tag).find('[id^="photoPluginWrapper"]');
  }
  aScrollTarget.each(function () {
    var pHeight = 0;
    if ($j(this).has('.photoGalleryWrapDiv[style*="z-index: 60"]').length) {
      pHeight = $j(this).find('.photoGalleryWrapDiv:not([style*="none"])').height();
    } else {
      pHeight = $j(this).find('.photoGalleryWrapDiv:not([style*="none"])').height();
    }
    $j(this).css("min-height", pHeight + "px");
  });
}

function aScrollResizeGallery(tag) {
  var aScrollTarget = $j('[id^="photoPluginWrapper"]');
  if (tag) {
    aScrollTarget = $j(tag).find('[id^="photoPluginWrapper"]');
  }
  aScrollTarget.each(function () {
    var pHeight = 0;
    if (
      $j(this).has('.photoGalleryThumbPageDiv[style*="z-index: 50"]').length
    ) {
      pHeight = $j(this)
        .find('.photoGalleryThumbPageDiv[style*="z-index: 50"]')
        .height();
    } else {
      pHeight = $j(this)
        .find(".photoGalleryThumbPageDiv:visible")
        .height();
    }
    $j(this).css("min-height", pHeight + "px");
  });
}