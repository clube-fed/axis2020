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