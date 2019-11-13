$j('.scroller').on('click', function (e) {
    e.preventDefault();

    $j('html, body').animate({
        scrollTop: $j('#pbhmanchor').offset().top
    }, 700);
});