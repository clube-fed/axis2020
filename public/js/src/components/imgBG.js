function ImgBG(e) {
    for (var r = e.trim().split(/\s*,\s*/), l = 0; l < r.length; l++)
      for (var t = document.querySelectorAll(r[l]), n = 0; n < t.length; n++) {
        var a = t[n].getElementsByTagName("*"),
          g = !1;
        if (a.length > 0)
          for (var o = 0; o < a.length; o++) {
            var s = a[o].nodeName;
            "IMG" == s &&
              0 == g &&
              ((t[n].style.backgroundImage = "url(" + a[o].src + ")"),
              (a[o].style.display = "none"),
              (g = !0));
          }
      }
  }
  ImgBG(".mp-bg > .mpContent");