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