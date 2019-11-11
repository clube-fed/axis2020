//weather text formatter
function weatherTxtFormatter(el) {
    var str = el.innerHTML;
    var decimalIndex = str.indexOf(".");
    str = str.slice(0, decimalIndex - 1) + str.slice(decimalIndex + 1);
    el.innerHTML = el.innerHTML.replace(/(.$)/, "<span>$1</span>");
  }
  
  var weatherTxt = document.querySelector(".weather-txt");
  if (weatherTxt) {
    weatherTxtFormatter(weatherTxt);
  }