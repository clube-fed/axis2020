var header = $j('header');
var scrolled = false;


$j(window).scroll(function() {
  if (270 < $j(window).scrollTop() && !scrolled) {
    var headerHeight = header.height();
    header.addClass('fixed').css('top', 0 + 'px').animate({ top: '0px' }, 5000);
    $j('#content').css('padding-top', headerHeight + 'px');
    scrolled = true;
  }

  if (270 > $j(window).scrollTop() && scrolled) {
    header.removeClass('fixed').removeAttr('style');
    $j('#content').removeAttr('style');
    scrolled = false;
  }
});