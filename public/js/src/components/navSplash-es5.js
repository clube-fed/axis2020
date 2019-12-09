//SPLASH NAV
var body = document.querySelector("body");
var menu = document.querySelector("header .ulMenu");
var menuToggle = document.querySelector('[aria-controls="menu"]');

function toggleMenu(e) {
  e.preventDefault(); //get boolean of menu state (open/close (true/false))

  var open = JSON.parse(menuToggle.getAttribute("aria-expanded")); //change the state to opposite

  body.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", !open);
  menu.hidden = !menu.hidden;
}

function initCENav() {
  menu.hidden = true; //wrap textnodes in link to keep structure

  var menuItems = menu.getElementsByTagName("li"); //OLD AXIS DELIVERS FOLDERS AS TEXTNODE => filter below creates an array of textNodes to manage on init

  var menuItemsArr = Array.from(menuItems);
  var childNodes = menuItemsArr.map(function (el) {
    var childNodesArr = Array.from(el.childNodes);
    return childNodesArr.filter(function (children) {
      return children.nodeType === 3;
    });
  });
  var textNodes = childNodes.filter(function (textNodes) {
    return textNodes.length > 0;
  });
  var url = window.location.hostname; //if in not in CE environment -- look for empty strings

  if (url != 'localhost') {
    textNodes.map(function (el) {
      var txtToLink = document.createElement("a");
      txtToLink.setAttribute("href", "#");
      txtToLink.classList.add("no-link");
      txtToLink.innerHTML = el[0].textContent;
      el[0].parentNode.prepend(txtToLink);
      el[0].remove();
    });
  } //add submenu classes and toggles


  menuItemsArr.map(function (el) {
    var liChildren = Array.from(el.children);
    liChildren.map(function (child) {
      if (child.nodeName === "UL") {
        child.classList.add("dropdown");
        child.parentNode.classList.add("has-dropdown");
        var toggleEl = document.createElement("button");
        toggleEl.classList.add("dropdown-toggle", "menu-toggle");
        toggleEl.innerHTML = '<span class="sr-only">Toggle Submenu</span>';
        child.parentNode.querySelector("a").append(toggleEl);
        var backToggle = document.createElement("li");
        backToggle.classList.add("drop-back");
        backToggle.innerHTML = '<a href="#" class="back-toggle"><button class="menu-toggle back-arrow"><span class="sr-only">Toggle Submenu Back</span></button>Back</a>';
        child.prepend(backToggle);
      }
    });
  });
}

function toggleSubmenu(e) {
  var linkEl = e.target.parentNode; //link

  var listItemEl = linkEl.parentNode; //list Item

  var listEl = listItemEl.parentNode; // parent ul

  if (e.target.classList.contains("dropdown-toggle")) {
    e.preventDefault();
    var listChildren = Array.from(listItemEl.children);
    var subMenuEl = listChildren.filter(function (el) {
      return el.nodeName === "UL";
    });
    subMenuEl[0].classList.toggle("dropdown-on");
    listEl.classList.toggle("dropdown-off");
  }

  if (e.target.classList.contains("no-link")) {
    e.preventDefault();
    var outerListEl = e.target.parentNode.parentNode; // li < ul

    var parentEl = e.target.parentNode; // < li

    var parentElArr = Array.from(parentEl.children);
    var activeListEl = parentElArr.filter(function (el) {
      return el.nodeName === "UL";
    });
    activeListEl[0].classList.toggle("dropdown-on");
    outerListEl.classList.toggle("dropdown-off");
  }

  if (e.target.classList.contains("back-toggle")) {
    e.preventDefault();
    var _outerListEl = e.target.parentNode.parentNode.parentNode.parentNode; //click on a go up to li < ul < li < ul

    var _activeListEl = e.target.parentNode.parentNode;

    _activeListEl.classList.toggle("dropdown-on");

    _outerListEl.classList.toggle("dropdown-off");
  }

  if (e.target.classList.contains("back-arrow")) {
    e.preventDefault();
    var _outerListEl2 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode; //click on a go up to a li < ul < li < ul

    var _activeListEl2 = e.target.parentNode.parentNode.parentNode; // span to a to li to ul

    _activeListEl2.classList.toggle("dropdown-on");

    _outerListEl2.classList.toggle("dropdown-off");
  }
} //ada tabbed effects to turn menu off


function navTabFocusInHandler(el) {
  console.log(el); //are you focusing in the header

  if (!$j(el).is('header .ulMenu a')) {
    $j('header .focus-open').removeClass('focus-open');
    $j('header button[aria-controls="menu"]').attr('aria-expanded', 'false');
    $j('header .ulMenu.level0').attr('hidden', true);
    return;
  } //get parent el for DOM traversing 


  var parent = $j(el).parent('li'); //check to see if this is already open

  if ($j(parent).hasClass('focus-open')) {
    return;
  } //check to see if the neighbor is open


  if ($j(parent).siblings().hasClass('focus-open')) {
    $j(parent).siblings().removeClass('focus-open');
  } //if not open ... open up it's children


  if ($j(parent).children('ul').length > 0) {
    //has children so open up
    $j(parent).addClass('focus-open');
  }
} // //helper function that gives you nav levels to compare
// function ulMenuLevelSniff(classname) {
//     var str = $j(classname).attr('class');
//     var classArr = str.split(' ');
//     console.log(classArr);
//     var levelStr = classArr.find(el => el.includes('level'));
//     var levelArr = levelStr.split('');
//     var levelVal = parseFloat(levelArr.pop());
//     return levelVal;
// }


$j('a').on('focus', function () {
  navTabFocusInHandler($j(this));
});
initCENav();
menuToggle.addEventListener("click", toggleMenu);
menu.addEventListener("click", function (evt) {
  toggleSubmenu(evt);
});