//wrap classes for event and news items
var eventWrapClassName = 'cal-event';
var newsWrapClassName = 'newsItem';

//all els
$j('.mpContent table, .mpContent iframe, [id^=photoPlugin] table, [id^=photoPlugin] iframe, [id^=calPlugin] table, [id^=calPlugin] iframe, [id^=newsPlugin] table, [id^=newsPlugin] iframe').removeAttr('scrolling frameborder border height width cellspacing cellpadding align valign');

//events/news
$j('.'+eventWrapClassName+'').attr('alt', $j('+eventWrapClassName+').text() );
$j('.'+newsWrapClassName+'').attr('alt', $j('+newsWrapClassName+').text() );

//generic
$j('span[onclick*="http://kb.clubessential.com"]').removeAttr('onclick').wrap('<a href="http://kb.clubessential.com" target="_blank"></a>'); 
$j('.dashboardSpanLink').unwrap();
$j('.dashboardSpanLink[onclick*="view=l2"]').removeAttr('onclick').wrap('<a href="Default.aspx?p=v35Calendar&view=l2" target="_blank"></a>');
$j('.dashboardSpanLink[onclick*="view=l3"]').removeAttr('onclick').wrap('<a href="Default.aspx?p=v35Calendar&view=l3" target="_blank"></a>');
$j('.dashboardSpanLink[onclick*="view=l4"]').removeAttr('onclick').wrap('<a href="Default.aspx?p=v35Calendar&view=l4" target="_blank"></a>');
$j('.clickToEditAnchor').removeAttr('onmouseout').removeAttr('onmouseover');
$j('.levelwrap [id*="radTabsTop_tb"]').removeAttr('href');
$j('a[onclick*="photoPlugSettings"] > img').each(function(){var albumString = $j(this).parent().attr('onclick');var cutAlbumPropertiesID = albumString.slice(16, 20);$j(this).attr('alt', 'Click Here to Edit Photo Album '+ cutAlbumPropertiesID +'').removeAttr('title');  });
$j('#adminDashboard, #adminDashboardMenu, #adminDashboardCETab').attr('role', 'navigation');
$j('#adminDashboard').attr('aria-label', 'User & Administrator Site Menu Bars');
$j('#adminDashboardMenu').attr('aria-label', 'Administrator Site Menu Dropdown');
$j('#adminDashboardCETab').attr('aria-label', 'User Site Menu Dropdown');
$j('#rdpPagePropsCloseImage').attr('alt', 'Close Page Properties');
$j('#PageSecurityCloseImage').attr('alt', 'Close Page Security');
$j('#rdpPagePropsDiv').attr('role', 'complementary').attr('aria-labelledby', 'rdpPagePropsDiv');
$j('#rdpPagePropsDiv iframe').attr('title', 'Page Properties Iframe');
$j('#PageSecurityDiv').attr('role', 'complementary').attr('aria-labelledby', 'PageSecurityDiv');
$j('#PageSecurityDiv iframe').attr('title', 'Page Security Iframe');
$j('#logoutDiv').attr('role', 'form').attr('aria-labelledby', 'logoutDiv');
$j('#logoutDiv iframe').attr('title', 'Logout Iframe');
$j('#ReserverPickerMgrDiv').attr('role', 'form').attr('aria-labelledby', 'ReserverPickerMgrDiv');
$j('#ReserverPickerMgrDiv iframe').attr('title', 'Reserve As');
$j('#rbm_HelpMEDiv').attr('role', 'form').attr('aria-labelledby', 'rbm_HelpMEDiv');
$j('#rbm_HelpMEDiv iframe').attr('title', 'Netcaddy Help');
$j('[id^="masterPageUC_MPCA"] [id$="_tblTop"], [id^="masterPageUC_MPCA"] [id$="_tblTop"] td, [id^="masterPageUC_MPCA"] [id$="_tblTop"] table,' +
'[id^="masterPageUC_MPCA"] img,.clickToEditDiv,'+
'#rdpPagePropsDiv table, #rdpPagePropsDiv td, #rdpPagePropsDiv img, #rdpPagePropsDiv iframe,'+
'#PageSecurityDiv table, #PageSecurityDiv td, #PageSecurityDiv img, #PageSecurityDiv iframe,'+
'#logoutDiv table, #logoutDiv td, #logoutDiv img, #logoutDiv iframe,'+
'[id^="editReg"] table, [id^="editReg"] td, [id^="editReg"] iframe,'+
'#ReserverPickerMgrDiv table, #ReserverPickerMgrDiv td, #ReserverPickerMgrDiv iframe,'+
'#rbm_HelpMEDiv table, #rbm_HelpMEDiv td, #rbm_HelpMEDiv iframe,'+
'.rbm_Content > table, .rbm_Content > table td,'+ 
'.rbm_bookingTimeSelectorFilterTable tr, [id$="Booking_LoadingPanelUno"] table, [id$="Booking_LoadingPanelUno"] td').removeAttr('scrolling frameborder border height width cellspacing cellpadding align valign');
$j('.sploder iframe[id^="editEvent"]').removeAttr('scrolling frameborder border cellspacing cellpadding align valign');
$j('.sploder[id^="editEvent"]').each(function(){var editEventString = $j(this).attr('id');var editEventID = editEventString.slice(9, 13);$j(this).attr('role', 'complementary').attr('aria-labelledby', $j(this).attr('id'));$j(this).find('iframe').attr('title', 'Add Event '+$j(this).attr('id')+' Iframe');$j(this).find('span[id^="editEvent"]').append(' '+editEventID);});
$j('.sploder[id^="editReg"]').each(function(){var editRegString = $j(this).attr('id');var editRegID = editRegString.slice(9, 13);$j(this).attr('role', 'complementary').attr('aria-labelledby', $j(this).attr('id'));$j(this).find('iframe').attr('title', 'Add Event '+$j(this).attr('id')+' Iframe');$j(this).find('span[id^="editEvent"]').append(' '+editRegID);});
$j('[onclick*="navigationProperties"]').each(function(){var navString = $j(this).attr('onclick');var cutNavPropertiesID = navString.slice(37, 43);if($j(this).parent().parent().parent().attr('id') == "mNav"){cutNavPropertiesID = "Click Here to Edit Mobile Nav ID " + cutNavPropertiesID;}else if($j(this).parent().parent().parent().attr('class') == "subNav"){cutNavPropertiesID = "Click Here to Edit Sidebar Nav ID";}else{cutNavPropertiesID = "Click Here to Edit Nav ID " + cutNavPropertiesID;}$j(this).children('img').attr('alt', cutNavPropertiesID);});
$j('[onclick*="accordionPlugSettings"]').each(function(){var accordString = $j(this).parent().next('.RadPanelBar').attr('id');var cutAccordPropertiesID = accordString.slice(24, 26);cutAccordPropertiesID = "Click Here to Edit Accordion " + cutAccordPropertiesID + " Properties";$j(this).children('img').attr('alt', cutAccordPropertiesID);});
$j('html').attr('lang','en');
$j('[src*="plg_corner.gif"]').remove();
$j('.calendarPrevLink').attr('alt','previous');
$j('.calendarNextLink').attr('alt','next');
$j('.calendarLegend img[src*="losed"]').attr('alt','Closed');
$j('.calendarLegend img[src*="old"][src*="ut"]').attr('alt','Sold Out');
$j('.calendarLegend img[src*="ait"][src*="ist"]').attr('alt','Wait Listed');
$j('.calendarLegend img[src*="eserved"]').attr('alt','Reserved');
$j('.calendarLegend img[src*="vailable"]').attr('alt','Available');
$j('.calendarLegend img[src*="ot"][src*="pen"]').attr('alt','Not Yet Open');
$j('img[src*="ico_CalTodayPointer.gif"]').attr('alt','Today');
$j('#eventView #eventHeaderBack img[src$="leftArrow.gif"]').attr('alt','back');
$j('#eventView #eventHeaderTitle img[src$="leftArrow.gif"]').attr('alt','prev event');
$j('#eventView #eventHeaderTitle img[src$="rightArrow.gif"]').attr('alt','next event');
$j('img[src$="vcardicon.gif"]').attr('alt','Add to Contacts');
$j('img[src$="_inactive.gif"]').attr('alt','Inactive');
$j('img[src$="ico_s4_admin.gif"]').attr('alt','Administrator');
$j('img[src$="ico_s4_editor.gif"]').attr('alt','Editor');
$j('img[src$="Print.gif"]').attr('alt','Click to view Printable Version');
$j('table[id$="Photo"] p img').attr('alt','Member Photo');
$j('table[id$="Photo"] p img[src*="memphotona.gif"]').attr('alt','Member Photo not available');
$j('table[id$="Photo"] p img[src$="memphotona.gif"]').attr('src','A_Master/Images/memphotona_HIGHCONTRAST.gif');
$j('#adminDashboardCETab #ceDashboardColumn2 > ul:first-of-type >li.groupHeader:first-of-type > h3').text('Global');
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/chanceflurries.png"]').attr({alt: 'current weather condition is chance of flurries',title: 'current weather condition is chance of flurries'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/chancerain.png"]').attr({alt: 'current weather condition is chance of rain',title: 'current weather condition is chance of rain'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/chancesleet.png"]').attr({alt: 'current weather condition is chance of sleet',title: 'current weather condition is chance of sleet'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/chancesnow.png"]').attr({alt: 'current weather condition is chance of snow',title: 'current weather condition is chance of snow'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/chancetstorms.png"]').attr({alt: 'current weather condition is chance of thunderstorms',title: 'current weather condition is chance of thunderstorms'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/clear.png"]').attr({alt: 'current weather condition is clear',title: 'current weather condition is clear'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/cloudy.png"]').attr({alt: 'current weather condition is cloudy',title: 'current weather condition is cloudy'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/flurries.png"]').attr({alt: 'current weather condition is snow flurries',title: 'current weather condition is snow flurries'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/fog.png"]').attr({alt: 'current weather condition is foggy',title: 'current weather condition is foggy'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/hazy.png"]').attr({alt: 'current weather condition is hazy',title: 'current weather condition is hazy'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/mostlycloudy.png"]').attr({alt: 'current weather condition is mostly cloudy',title: 'current weather condition is mostly cloudy'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/mostlysunny.png"]').attr({alt: 'current weather condition is mostly sunny',title: 'current weather condition is mostly sunny'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/nt_chancesnow.png"]').attr({alt: 'current night time weather condition is chance of snow',title: 'current night time weather condition is chance of snow'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/nt_cloudy.png"]').attr({alt: 'current night time weather condition is cloudy',title: 'current night time weather condition is cloudy'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/nt_fog.png"]').attr({alt: 'current night time weather condition is foggy',title: 'current night time weather condition is foggy'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/nt_hazy.png"]').attr({alt: 'current night time weather condition is hazy',title: 'current night time weather condition is hazy'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/nt_mostlycloudy.png"]').attr({alt: 'current night time weather condition is mostly cloudy',title: 'current night time weather condition is mostly cloudy'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/nt_partlycloudy.png"]').attr({alt: 'current night time weather condition is partly cloudy',title: 'current night time weather condition is partly cloudy'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/nt_rain.png"]').attr({alt: 'current night time weather condition is rain',title: 'current night time weather condition is rain'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/nt_sleet.png"]').attr({alt: 'current night time weather condition is sleet',title: 'current night time weather condition is sleet'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/nt_snow.png"]').attr({alt: 'current night time weather condition is snow',title: 'current night time weather condition is snow'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/nt_tstorms.png"]').attr({alt: 'current night time weather condition is thunderstorms',title: 'current night time weather condition is thunderstorms'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/partlycloudy.png"]').attr({alt: 'current weather condition is partly cloudy',title: 'current weather condition is partly cloudy'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/partlysunny.png"]').attr({alt: 'current weather condition is partly sunny',title: 'current weather condition is partly sunny'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/rain.png"]').attr({alt: 'current weather condition is rain',title: 'current weather condition is rain'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/sleet.png"]').attr({alt: 'current weather condition is sleet',title: 'current weather condition is sleet'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/snow.png"]').attr({alt: 'current weather condition is snow',title: 'current weather condition is snow'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/sunny.png"]').attr({alt: 'current weather condition is sunny',title: 'current weather condition is sunny'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/tstorms.png"]').attr({alt: 'current weather condition is thunderstorms',title: 'current weather condition is thunderstorms'});
$j('img[src^="A_Master/NET/WeatherPlugin/Icons/"][src$="/windy.png"]').attr({alt: 'current weather condition is windy',title: 'current weather condition is windy'});
function ariasForModules() {
	var i;
	var moduleAnchors = [
		'#defaultnetform:not([action*="ynamic"][action*="odule"]) .master-wrap > .module.container a',
		'#defaultnetform:not([action*="ynamic"][action*="odule"]) .master-wrap > .module.container button',
		'#defaultnetform:not([action*="ynamic"][action*="odule"]) .master-wrap > .module.container [onclick]',
		'#defaultnetform:not([action*="ynamic"][action*="odule"]) .master-wrap > .module.container [ononmousedown]'
	];
	var moduleSelfClosers = [
		'.login-page-box .abut',
		'#defaultnetform:not([action*="ynamic"][action*="odule"]) .master-wrap > .module.container input[type="submit"]',
		'#defaultnetform:not([action*="ynamic"][action*="odule"]) .master-wrap > .module.container input[type="button"]'
	]
	for (i = 0; i< moduleAnchors.length || i< moduleSelfClosers.length; ++i) {
		$j(moduleAnchors[i]).each( function(){	
			var ariaLinkLabel = "Click to view " + $j(this).text();
			$j(this).attr({'aria-label':ariaLinkLabel,'title':ariaLinkLabel});
		});	
		$j(moduleSelfClosers[i]).each( function(){	
			var ariaLinkLabel = "Click to " + $j(this).attr('value');
			$j(this).attr({'aria-label':ariaLinkLabel,'title':ariaLinkLabel});
		});	
	}
}
ariasForModules();
$j('.module.container #calendarLinkBar a, .module.co	ntainer table[id$="_tblProfilePage"] a, #updatePhotoiframe a, .module .adminBar input[type="button"], .module .adminbar input[type="button"], .module .adminBar input[type="submit"], .module .adminbar input[type="submit"], #printLink a').attr({tabindex:'0',role:'button'});
function accessibleDialogs() {	
		$j('<img class="sr-only" src="https://members.hasentreecountryclub.com/A_Master/library/css/rhClub_css/ADA/altAltClose.png" alt="click to close">').prependTo('.axisDialogBox .dialogActions ul li.close a');
	$j('.axisDialogBox').find('a, input, button').attr({tabindex:'0',role:'button'});	
			var tabSetOuter = $j('.axisDialogBox').find('select, input, textarea, button, a, #ctl00_memberpicker_imgLetterChooser');
			var tabbableOuter = $j(tabSetOuter).filter(':visible');	
			$j(tabbableOuter).addClass('tabbable');
			var firstTabbableOuter = tabbableOuter.eq(1);
			var lastTabbableOuter = tabbableOuter.last();
			firstTabbableOuter.focus();
			lastTabbableOuter.on('keydown', function (e) {
			   if ((e.which === 9 && !e.shiftKey)) {
				   e.preventDefault();
				   $j('.axisDialogBox .dialogActions ul li.close a').focus();
			   }
			});
			firstTabbableOuter.on('keydown', function (e) {
				if ((e.which === 9 && e.shiftKey)) {
					e.preventDefault();
					lastTabbableOuter.focus();
				}
			});
	$j('.axisDialogBox iframe').load( function(){
		setTimeout(function () { 
			$j('.axisDialogBox iframe').contents().find('#ctl00_memberpicker_imgLetterChooser').attr({class:'tabbable',role:'button',tabindex:'0'});
			var tabSetInner = $j('.axisDialogBox iframe').contents().find('select, input, textarea, button, a, #ctl00_memberpicker_imgLetterChooser');
			var tabbableInner = $j(tabSetInner).filter(':visible');
			$j(tabbableInner).addClass('tabbable');
			var firstTabbableInner = tabbableInner.eq(1);
			var lastTabbableInner = tabbableInner.last();
			firstTabbableInner.focus();
			lastTabbableInner.on('keydown', function (e) {
			   if ((e.which === 9 && !e.shiftKey)) {
				   e.preventDefault();
				   $j('.axisDialogBox .dialogActions ul li.close a').focus();
			   }
			});
			firstTabbableInner.on('keydown', function (e) {
				if ((e.which === 9 && e.shiftKey)) {
					e.preventDefault();
					lastTabbable.focus();
				}
			});
		}, 3000);
	});
	$j('.axisDialogBox .dialogActions ul li.close a').keypress( function(){
		$j(this).trigger('click');
	});	
}
$j('[onclick*="showAxisDialog"], [onclick*="EditArticle"], *[onclick*="editQuestion"], a.rtbWrap[title="Help"], [onclick*="showViewEditor"], [onclick*="EditTweener"], [onclick*="forgotUnPWdlg"]').click( function(){
	accessibleDialogs();
});	
$j('[onclick*="showAxisDialog"], [onclick*="EditArticle"], *[onclick*="editQuestion"], a.rtbWrap[title="Help"], [onclick*="showViewEditor"], [onclick*="EditTweener"], [onclick*="forgotUnPWdlg"]').on('keypress', function (e) {
	if ((e.which == 13)) {
		e.preventDefault();
		accessibleDialogs();
	}
});
$j('a[onclick*="changeUN"]').attr('aria-label','click to open username change dialog box');
$j('a[onclick*="changePW"]').attr('aria-label','click to open password change dialog box');
$j('a[onclick*="changeUN"],a[onclick*="changePW"]').attr('role','button');
$j('.mobileButton[id*="ilter"]').attr({role:'button'});
$j('.module [id$=tblAdminBar] td a, .module [id$=tblAdminBar] td input').attr({role:'button'});
$j('#articlePrintLink > a').attr({role:'button'});
$j('.editArticleLink').attr({role:'button'});
$j('body[class*=ArticleList] a[href*="_ArticleView"]').attr({role:'link'});
