/*EVENTS*/

//on after ListinsFinishedLoading

//removes image sizing on files
$j('.realestate-item .image img').each(function(){
  $j(this).attr('src',$j(this).attr('src').replace('_mh206_mw250',''));
});

//custom filter toggle

//add X to the filter wrap
var relWrap = $j('#relFilterWrapper');
$j(relWrap).append('<div class="close"><em class="nc-icon-outline ui-1_simple-remove"></em></div>');

//rel-launch is button toggle class
$j('.rel-launch').on('click', function(e) {
  e.preventDefault;
	relWrap.toggleClass('launch-refilter');
	toggleOverlay();
});

var relClose = $j('#relFilterWrapper > .close');
$j(relClose).on('click', function(e) {
	e.preventDefault;
	relWrap.removeClass('launch-refilter');
	toggleOverlay();
});

$j(document).on('click','.rel-modal',function(e) {
  e.preventDefault;
  relWrap.removeClass('launch-refilter');
  toggleOverlay();
});

function toggleOverlay() {
	if (relWrap.hasClass('launch-refilter')) {
		$j('body').addClass('launch-overlay');
	}

	else {
		$j('body').removeClass('launch-overlay');
	}
}
