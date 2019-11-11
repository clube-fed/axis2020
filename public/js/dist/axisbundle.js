function MiniPageMouseout() {
    return false;
}

function MiniPageMouseover() {
    return false;
}

$j("#content .mpContent img").addClass("img-fluid");
$j(".adminbar")
    .parent()
    .parent()
    .parent()
    .addClass("adminbar-wrap");
$j('.module-wrap img[src*="1x1"]').css("opacity", 0);
//SPLASH NAV
const body = document.querySelector("body");
const menu = document.querySelector("header .ulMenu");
const menuToggle = document.querySelector('[aria-controls="menu"]');

function toggleMenu(e) {
  e.preventDefault();
  //get boolean of menu state (open/close (true/false))
  const open = JSON.parse(menuToggle.getAttribute("aria-expanded"));
  //change the state to opposite
  body.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", !open);
  menu.hidden = !menu.hidden;
}

function initCENav() {
  menu.hidden = true;
  //wrap textnodes in link to keep structure
  const menuItems = menu.getElementsByTagName("li");
  //OLD AXIS DELIVERS FOLDERS AS TEXTNODE => filter below creates an array of textNodes to manage on init
  const menuItemsArr = Array.from(menuItems);
  const childNodes = menuItemsArr.map(el => {
    const childNodesArr = Array.from(el.childNodes);
    return childNodesArr.filter(children => children.nodeType === 3);
  });

  const textNodes = childNodes.filter(textNodes => textNodes.length > 0);
  textNodes.map(el => {
    const txtToLink = document.createElement("a");
    txtToLink.setAttribute("href", "#");
    txtToLink.classList.add("no-link");
    txtToLink.innerHTML = el[0].textContent;
    el[0].parentNode.prepend(txtToLink);
    el[0].remove();
  });
  //add submenu classes and toggles
  menuItemsArr.map(el => {
    const liChildren = Array.from(el.children);
    liChildren.map(child => {
      if (child.nodeName === "UL") {
        child.classList.add("dropdown");
        child.parentNode.classList.add("has-dropdown");
        const toggleEl = document.createElement("button");
        toggleEl.classList.add("dropdown-toggle", "menu-toggle");
        toggleEl.innerHTML = '<span class="sr-only">Toggle Submenu</span>';
        child.parentNode.querySelector("a").append(toggleEl);
        const backToggle = document.createElement("li");
        backToggle.classList.add("drop-back");
        backToggle.innerHTML =
          '<a href="#" class="back-toggle"><button class="menu-toggle back-arrow"><span class="sr-only">Toggle Submenu Back</span></button>Back</a>';
        child.prepend(backToggle);
      }
    });
  });
}

function toggleSubmenu(e) {
  const linkEl = e.target.parentNode; //link
  const listItemEl = linkEl.parentNode; //list Item
  const listEl = listItemEl.parentNode; // parent ul

  if (e.target.classList.contains("dropdown-toggle")) {
    e.preventDefault();
    const listChildren = Array.from(listItemEl.children);
    const subMenuEl = listChildren.filter(el => el.nodeName === "UL");
    subMenuEl[0].classList.toggle("dropdown-on");
    listEl.classList.toggle("dropdown-off");
  }

  if (e.target.classList.contains("no-link")) {
    e.preventDefault();
    const outerListEl = e.target.parentNode.parentNode; // li < ul
    const parentEl = e.target.parentNode; // < li
    const parentElArr = Array.from(parentEl.children);
    const activeListEl = parentElArr.filter(el => el.nodeName === "UL");
    activeListEl[0].classList.toggle("dropdown-on");
    outerListEl.classList.toggle("dropdown-off");
  }

  if (e.target.classList.contains("back-toggle")) {
    e.preventDefault();
    const outerListEl = e.target.parentNode.parentNode.parentNode.parentNode; //click on a go up to li < ul < li < ul
    const activeListEl = e.target.parentNode.parentNode;
    activeListEl.classList.toggle("dropdown-on");
    outerListEl.classList.toggle("dropdown-off");
  }

  if (e.target.classList.contains("back-arrow")) {
    e.preventDefault();
    const outerListEl =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode; //click on a go up to a li < ul < li < ul
    const activeListEl = e.target.parentNode.parentNode.parentNode; // span to a to li to ul
    activeListEl.classList.toggle("dropdown-on");
    outerListEl.classList.toggle("dropdown-off");
  }
}

//ada tabbed effects to turn menu off

function navTabFocusInHandler(el) {
	console.log(el);
	//are you focusing in the header
	if (!($j(el).is('header .ulMenu a'))) {
		$j('header .focus-open').removeClass('focus-open');
		$j('header button[aria-controls="menu"]').attr('aria-expanded','false');
		$j('header .ulMenu.level0').attr('hidden',true);
		return;
	}
	//get parent el for DOM traversing 
	var parent = $j(el).parent('li');
 
	//check to see if this is already open
	if ($j(parent).hasClass('focus-open')) {
		return;
	}
	//check to see if the neighbor is open
	if ($j(parent).siblings().hasClass('focus-open')) {
		$j(parent).siblings().removeClass('focus-open');
	}
	
	//if not open ... open up it's children
	if ($j(parent).children('ul').length > 0) {
		//has children so open up
		$j(parent).addClass('focus-open')
	}

    
	
}

// //helper function that gives you nav levels to compare
// function ulMenuLevelSniff(classname) {
//     var str = $j(classname).attr('class');
//     var classArr = str.split(' ');
//     console.log(classArr);
//     var levelStr = classArr.find(el => el.includes('level'));
//     var levelArr = levelStr.split('');
//     var levelVal = parseFloat(levelArr.pop());
//     return levelVal;
// }

$j('a').on('focus',function(){
	navTabFocusInHandler($j(this));
});

initCENav();
menuToggle.addEventListener("click", toggleMenu);
menu.addEventListener("click", function(evt) {
  toggleSubmenu(evt);
});
function ImgBG(e) {
    for (var r = e.trim().split(/\s*,\s*/), l = 0; l < r.length; l++)
      for (var t = document.querySelectorAll(r[l]), n = 0; n < t.length; n++) {
        var a = t[n].getElementsByTagName("*"),
          g = !1;
        if (a.length > 0)
          for (var o = 0; o < a.length; o++) {
            var s = a[o].nodeName;
            "IMG" == s &&
              0 == g &&
              ((t[n].style.backgroundImage = "url(" + a[o].src + ")"),
              (a[o].style.display = "none"),
              (g = !0));
          }
      }
  }
  ImgBG(".mp-bg > .mpContent");
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
    if ($j(this).has('.photoGalleryWrapDiv[style*="z-index: 50"]').length) {
      pHeight = $j(this)
        .find('.photoGalleryWrapDiv[style*="z-index: 50"]')
        .height();
    } else {
      pHeight = $j(this)
        .find(".photoGalleryWrapDiv:visible")
        .height();
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
function resizeSitewrap() {
    //Resize Trigger for Photo Album's (Sets Min Height)-->
    aScrollResize();
    aScrollResizeGallery();
    // Reset Calendars
    eventLeft = 0;
    $j(".element-item .events-wrapper").scrollLeft(0);
}
$j(window).bind("load", function () {
    resizeSitewrap();
    var resizeTimer = null;
    $j(window).resize(function () {
        if (resizeTimer) {
            clearTimeout(resizeTimer);
        }
        resizeTimer = setTimeout(resizeSitewrap, 10);
    });
});
$j(".side-menu ul.level1")
    .parent()
    .addClass("open-panel");
$j(".side-menu li.ulMenuItem.level1").each(function () {
    $j(this)
        .contents()
        .filter(function () {
            return this.nodeType === 3; // Node.TEXT_NODE
        })
        .wrap('<a href="#" class="link-off"></a>');
});
$j(".open-panel > a").after(
    '<span class="submenu-toggle"><span class="caret"></span></span>'
);
$j(".open-panel > a + .submenu-toggle").click(function (e) {
    e.preventDefault();
    $j(this)
        .parent()
        .toggleClass("opened");
    $j(this)
        .parent()
        .children("ul.level1")
        .slideToggle();
});
function cteBuild(el) {
    if ($j(el).parents("a").length) {
        var cte = $j(el)
            .parents("a")
            .next();
    } else {
        var cte = $j(el).next();
    }
    console.log(cte);
    var imgCte = $j(el)
        .find('[class*="-img"] .clickToEditDiv')
        .detach();
    var txtCte = $j(el)
        .find('[class*="-txt"] .clickToEditDiv')
        .detach();
    $j(cte)
        .find('[class*="-cte-img"]')
        .append(imgCte);
    $j(cte)
        .find('[class*="-cte-txt"]')
        .append(txtCte);
    $j(cte)
        .find('[class*="-cte-link"] > .mpContent')
        .html("");
}

//wrap item in a link
function calloutLinkWrap(el, type) {
    //console.log(el);
    var itemLink = $j.trim(
        $j(el)
        .next()
        .find("." + type + "-cte-link > .mpContent")
        .text()
    );
    //console.log('.' + type + '-cte-link > .mpContent');
    if (itemLink === "") {
        return;
    } else {
        $j(el).wrap('<a class="' + type + '-link" href="' + itemLink + '"></a>');
    }
}

if ($j(".callouts").length) {
    $j(".callout-item").each(function () {
        calloutLinkWrap(this, "callout");
        cteBuild(this); //cteBuild always called last
    });
}

//legacy panel-single > now billboard
if ($j(".panel-single").length) {
    $j(".panel-single .panel-item").each(function () {
        cteBuild(this);
    });
}

if ($j(".billboard").length) {
    $j(".billboard .billboard-item").each(function () {
        cteBuild(this);
    });
}
$j(".GS-toggle").on("click", function () {
    $j(".global-scripts").toggleClass("minimized");
});
$j("#toggle-edits").change(function () {
    if (!this.checked) {
        //  ^
        $j(".clickToEditDiv").show();
        $j('img[title="Click to edit Plugin Properties"]')
            .parentsUntil("table")
            .show();
        $j('img[title="Click to edit navigation properties"]')
            .parentsUntil("div")
            .show();
    } else {
        $j(".clickToEditDiv").hide();
        $j('img[title="Click to edit navigation properties"]')
            .parentsUntil("div")
            .hide();
        $j('img[title="Click to edit Plugin Properties"]')
            .parentsUntil("table")
            .hide();
    }
});
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
//weather text formatter
function weatherTxtFormatter(el) {
    var str = el.innerHTML;
    var decimalIndex = str.indexOf(".");
    str = str.slice(0, decimalIndex - 1) + str.slice(decimalIndex + 1);
    el.innerHTML = el.innerHTML.replace(/(.$)/, "<span>$1</span>");
  }
  
  var weatherTxt = document.querySelector(".weather-txt");
  if (weatherTxt) {
    weatherTxtFormatter(weatherTxt);
  }
