//add smooth scroll class to links
$j('.anchorSpan').parent('a').each(function () {
    $j(this).addClass('anchorLink');
});

//manipulate the TRACKHYPERLINK INTO AN ACTUAL URL
function createAxisLinkObj(href) {
    var hrefSplit = href.split('TrackHyperlink&URL=')[1];
    var encodedHref = hrefSplit.split('&')[0];
    var hashedUrl = decodeURIComponent(encodedHref);
    var linkObj = document.createElement('a');
    linkObj.href = hashedUrl;
    return linkObj;
}

function toggleSelectedState(el) {
    var parent = $j(el).parent('li');
    var sibs = $j(parent).siblings();
    $j(sibs).each(function(){
        if($j(this).hasClass('selectedItem')) {
            $j(this).removeClass('selectedItem');
        }
    });
    $j(parent).addClass('selectedItem');
}

if (window.location.hash.length) {
    var hash = window.location.hash;
    //set selectedState when hit the page
    $j('header .anchorLink[href*="'+encodeURIComponent(window.location.hash)+'"]').parent('li').addClass('selectedItem');
    //scroll to top
    scroll(0, 0);
    // takes care of some browsers issue
    setTimeout(function () {
        scroll(0, 0);
    }, 1);
    //now go animate to hash
    $j("html, body").animate({
        scrollTop: $j(hash).offset().top - 120
    }, 2000);
}

//on page scroll
$j('header').on('click', '.anchorLink', function (event) {
    // Remove links that don't actually link to anything
    // On-page links
    
    var axisAnchor = createAxisLinkObj($j(this)[0].href); // URL
    console.log($j(axisAnchor.hash));
    if (
        location.pathname.replace(/^\//, '') == axisAnchor.pathname.replace(/^\//, '') &&
        location.hostname == axisAnchor.hostname
    ) {
        // Figure out element to scroll to
        var target = $j(axisAnchor.hash);
        target = target.length ? target : $j('[name=' + axisAnchor.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            toggleSelectedState($j(this));
            $j('html, body').animate({
                scrollTop: target.offset().top -120
            }, 1000, function () {
                // Callback after animation
                // Must change focus!
                var $jtarget = $j(target);
                $jtarget.focus();
                if ($jtarget.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $jtarget.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    $jtarget.focus(); // Set focus again
                };
            });
        }
    }
});