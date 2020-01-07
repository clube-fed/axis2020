//event date formatter 
  // CHANGE MON-JUL<BR>15 to MON. JUL. 15<sup>th</sup>
    
//   function addPeriod(txt) {
//     var newTxt = txt+'.';
//     return newTxt;
//   }
function modifyTimeText(text) {
    var str = $j(text).text();
    var start = str.substring(0, str.length - 6);
    var midday = str.substring(str.length-2, str.length);
    
    return start + midday;
}

function ordinalSuffix(num) {
// ends in 1 => st
// ends in 2 => nd
// ends in 3 => rd
// everything else is th
// exceptions are 11th, 12th, 13th --> 112th, etc
var ordinalValSing = parseInt(num) % 10; //1 - 10
var ordinalValDuo = parseInt(num) % 100; //anything above 10 

if(ordinalValSing === 1 && ordinalValDuo != 11) {
  return "st"
}

if(ordinalValSing === 2 && ordinalValDuo != 12) {
  return "st"
}

if(ordinalValSing === 3 && ordinalValDuo != 13) {
  return "rd"
}

return "th"

}

function monthAbbr(txt) {
switch(txt) {
  case 'January':
    txt = 'Jan.'
    break;
  case 'February':
    txt = 'Feb.'
    break;
    case 'March':
    txt = 'Mar.'
    break;
    case 'April':
    txt = 'Apr.'
    break;
    case 'August':
    txt = 'Aug.'
    break;
    case 'September':
    txt = 'Sept.'
    break;
    case 'October':
    txt = 'Oct.'
    break;
    case 'November':
    txt = 'Nov.'
    break;        
    case 'December':
    txt = 'Dec.'
    break;
  default:
    txt = txt;
}
return txt;
}

function modifyEventText(el) {

var weekdayEl = $j(el).find($j('.calDOW'));
var monthEl = $j(el).find($j('.calMonth'));
var dayEl = $j(el).find($j('.calDay'));
var eventTime = $j(el).find($j('.event-time'));




var weekdayText = $j(weekdayEl).text();
var monthText = $j(monthEl).text();
var dayText = $j(dayEl).text();
// var timeText = modifyTimeText($j(eventTime));
// var ordinalVal = ordinalSuffix(dayText);

var newHTML = $j(el).html('<span class="calDOW">'+weekdayText+'</span><span class="calMonth">'+monthAbbr(monthText)+'</span><span class="calDay">'+dayText+'</span>')

return newHTML;
}