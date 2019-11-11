//nav-basic for main and subnav
$j('.nav-offcanvas ul.level0, .nav-utility > ul').addClass('ul-basic clearfix');
$j('body').addClass('offcanvas offcanvas-right');
$j('[data-toggle="offcanvas"], [data-toggle="offcanvas-close"], .nav-modal').click(function() {
  $j('.offcanvas').toggleClass('open-shelf');
});
//WRAPPING LINKS THAT ARE FOLDERS
$j('.nav-offcanvas li.ulMenuItem, .sub-menu ul > li').each(function() {
  $j(this).contents().filter(function() {
    return this.nodeType === 3; // Node.TEXT_NODE
  }).wrap('<a href="#" class="link-off"></a>');
});

$j('.nav-offcanvas .ulMenu.level0').find('.ulMenu').attr('role', 'menu');
$j('.nav-offcanvas .ulMenu.level0 ul').parent().children('a').append('<span class="dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></span>');
$j('.nav-offcanvas .ulMenu.level1').parent('li.ulMenuItem.level1').addClass('dropdown');
$j('.nav-offcanvas .ulMenu.level1').parent('li.ulMenuItem.level2').addClass('dropdown dropdown-submenu');
$j('[data-toggle=dropdown]').on('mousedown',function(event){
  event.preventDefault();
}).on('click', function(event) {
  // Avoid following the href location when clicking
  event.preventDefault();
  // Avoid having the menu to close when clicking
  event.stopImmediatePropagation();
  // Re-add .open to parent sub-menu item
  $j(this).parent().parent().toggleClass('open').siblings().removeClass('open');
  //$j(this).parent().parent().find('ul').parent().find('li.dropdown').addClass('open');
});