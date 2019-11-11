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