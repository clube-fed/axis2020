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