var parallaxEls = document.querySelectorAll('.mp-parallax');
  var parallaxArr = Array.from(parallaxEls);

  function parallaxEl(el, yScroll) {
    var children = Array.from(el.childNodes);
    // console.log(children);
    var elToParallax = children.filter(function (child) {
      return child.className === 'mpContent';
    });
    var scroll = (yScroll - el.offsetTop)/3;
    var y = scroll > 0 ? -scroll:scroll;
    return elToParallax[0].style.backgroundPosition = '50% '+y+'px';
  }

  //if element is in view run parallaxEl
  function checkForParallaxInView(parallaxItem) {
      var isVisible = false;
      var yScrollPosition = window.scrollY;
      var header = document.querySelector('header');
      var headerHeight = header.offsetHeight;        
      var startScrollFn = parallaxItem.offsetTop - parallaxItem.offsetHeight + headerHeight;
      var endScrollFn = parallaxItem.offsetTop + parallaxItem.offsetHeight + headerHeight;
      // console.log('--------------------------');
      // console.log(`ypos is ${yScrollPosition}`);
      // console.log(`start is ${startScrollFn}`);
      // console.log(`end is ${endScrollFn}`);
      // console.log('--------------------------');

      if(yScrollPosition > startScrollFn && yScrollPosition < endScrollFn) {
        return isVisible = true;
      } else {
        return isVisible = false
      }
  }

  function initParallax(parallaxArr) {
    if(parallaxArr.length === 0) {
      return
    }
    for(var i = 0; i<parallaxArr.length; i++) {
      if(checkForParallaxInView(parallaxArr[i])) {
        parallaxEl(parallaxArr[i], window.scrollY);
      } 
    }
  }
  
    window.addEventListener("scroll", function(e){
      initParallax(parallaxArr);
    });