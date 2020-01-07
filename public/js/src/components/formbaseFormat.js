//NEW FORM w/No Table
$j('.formBaseFormFooter').before('<div class="new-form row"></div><div class="form-disclaimer"><em>*Denotes Required Field</em></div>');
//ACCOUNT FOR DIFF IN MOSV AND DESK
var formWrap = $j('.formQuestionWrapper');

function formEl(el, label, gridsize) {
	var html = $j('<div class="form-element col-sm-' + gridsize + '"></div>');
	if (el.is('span')) {
		$j(el).prepend(label);
		$j(html).append(el);
	} else {
		$j(html).append(label, el);
	}
	return html;
}

$j(formWrap).each(function () {

	var label = $j(this).find('label:first').detach();
	//console.log(label);
	var labelTxt = $j(label).text();
	var el;
	if ($j('td.controlCell').length > 0) {
		el = $j(this).find('.controlCell').children().detach();
	} else {
		el = $j(this).find('.formControlCell').children().detach();
	}

	if (el.is('span')) {
		$j(label).attr('for', $j(el).children().first().attr('id'));
	} else {
		$j(label).attr('for', $j(el).attr('id'));
	}
	//console.log(el);
	if (el.is('span')) {
		$j(el).removeAttr('style');
	}

	if (el.is('table')) {
        var contents = $j(el).find("td, th").contents().detach();
        console.log(contents);
        $j(el).remove();
        el = $j('<div class="radio-chk"></div>');
        $j(el).append(contents);
        var radioEls = $j(el).children();
		for(var i = 0; i < radioEls.length; i+=2) {
			radioEls.slice(i, i+2).wrapAll('<div class="formbase-radio-chk-item"></div>');
		}
    }

	if (labelTxt.substring(labelTxt.length - 1) == ':') {
		labelTxt = labelTxt.substring(0, labelTxt.length - 1);
	}

	// if (el.is('input') || el.is('textarea')) {
	// 	$j(el).attr('placeholder',labelTxt);
	// }
	var newEl;
	if (el.is('input') || el.is('span')) {
		newEl = formEl(el, label, '6');
	} else {
		newEl = formEl(el, label, '12');
	}
	console.log(newEl);
	$j('.new-form').append(newEl);
});

$j('.formBaseFormFooter').next('div').attr('align', 'left');
$j('.formBaseForm tr').css('display', 'none');
$j('#Saving').next('input.abut.FbSubmitBtn').wrap('<div class="text-center"></div>');