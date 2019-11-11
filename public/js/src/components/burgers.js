var $jhamburger = $j('.hamburger');
$jhamburger.on('click', function (e) {
    $jhamburger.toggleClass("is-active");
    // Do something else, like open/close menu
});