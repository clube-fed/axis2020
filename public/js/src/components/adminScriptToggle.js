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