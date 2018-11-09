$(window).ready(function() {
  $("html").css("font-size", "62.5%");
  // ADA button
  if (Cookies.get("highcontrast") === "on") {
    $("html").addClass("highcontrast");
    $(".highcontrast #flyout li:has(ul)>a").css({ color: "#fff" });
    $("#highcontrast").text("High Contrast Off");
  }
  if (Cookies.get("yellowlinks") === "on") {
    $("html").addClass("yellowlinks");
    $("#yellowlinks").text("Yellow Links Off");
  }
  if (Cookies.get("greyscale") === "on") {
    $("html").addClass("greyscale");
    $("#greyscale").text("Grey Scale Off");
  }
  if (Cookies.get("underline-links") === "on") {
    $("html").addClass("underline-links");
    $("#underline-links").text("Underline Links Off");
  }
  if (Cookies.get("font-increased") === "on") {
    $("html").css("font-size", "+=5%");
    $("#font-size").text("Decrease Font Size");
  }
  // $(".accessible-btn button").on("click keydown", function(e) {
  //   if (e.keyCode === 13 || e.type === 'click') {
  //     e.preventDefault();
  //     if($(this).parent().parent().toggleClass("visible")){
  //       $(this).attr('aria-expanded', 'true');
  //       $('.accessibility-menu a').attr('tabindex', '0');
  //     } else {
  //       $(this).attr('aria-expanded', 'false');
  //       $('.accessibility-menu a').attr('tabindex', '-1');
  //     }
  //   }
  // });
$('#accessibility-button').on('click', function(e) {
  if ($(this).parent().parent().hasClass('visible')) {
    $(this).parent().parent().removeClass('visible');
    $(this).attr({'aria-expanded': 'false'});
    $('.accessibility-menu a').attr('tabindex', '-1');
  } else {
    $(this).parent().parent().addClass('visible');
    $(this).attr({'aria-expanded': 'true'});
    $('.accessibility-menu a').attr('tabindex', '0');
  }
  e.preventDefault();
});
// close menu if last item is tabbed through
$('.accessibility-menu ul>li:last-child').keydown(function(e) {
  if (e.which === 9 && e.shiftKey) {
    // Do nothing
  } else if (e.which === 9) {
    $('.accessibility-wrap').removeClass('visible');
    $('.accessibility-menu a').attr('tabindex', '-1');
    $('#accessibility-button').attr({'aria-expanded': 'false'});
  }
});
  $("#highcontrast").on("click keydown", function(e) {
    if (e.keyCode === 13 || e.type === 'click') {
      e.preventDefault();
      if (Cookies.get("highcontrast")) {
        Cookies.remove("highcontrast");
      } else {
        Cookies.set("highcontrast", "on", { expires: 7 });
      }
      if (Cookies.get("highcontrast") == "on") {
        $("html").addClass("highcontrast");
        $(this).text("High Contrast Off");
      } else {
        $("html").removeClass("highcontrast");
        $(this).text("High Contrast");
      }
    }
  });
  $("#yellowlinks").on("click keydown", function(e) {
    if (e.keyCode === 13 || e.type === 'click') {
      e.preventDefault();
      if (Cookies.get("yellowlinks")) {
        Cookies.remove("yellowlinks");
      } else {
        Cookies.set("yellowlinks", "on", { expires: 7 });
      }
      if (Cookies.get("yellowlinks") == "on") {
        $("html").addClass("yellowlinks");
        $(this).text("Yellow Links Off");
      } else {
        $("html").removeClass("yellowlinks");
        $(this).text("Yellow Links");
      }
    }
  });
  $("#greyscale").on("click keydown", function(e) {
    if (e.keyCode === 13 || e.type === 'click') {
      e.preventDefault();
      if (Cookies.get("greyscale")) {
        Cookies.remove("greyscale");
      } else {
        Cookies.set("greyscale", "on", { expires: 7 });
      }
      if (Cookies.get("greyscale") == "on") {
        $("html").addClass("greyscale");
        $(this).text("Greyscale Off");
      } else {
        $("html").removeClass("greyscale");
        $(this).text("Grey Scale");
      }
    }
  });
  $("#underline-links").on("click keydown", function(e) {
    if (e.keyCode === 13 || e.type === 'click') {
      e.preventDefault();
      if (Cookies.get("underline-links")) {
        Cookies.remove("underline-links");
      } else {
        Cookies.set("underline-links", "on", { expires: 7 });
      }
      if (Cookies.get("underline-links") == "on") {
        $("html").addClass("underline-links");
        $(this).text("Underline Links Off");
      } else {
        $("html").removeClass("underline-links");
        $(this).text("Underline Links");
      }
    }
  });
  $("#font-size").on("click keydown", function(e) {
    if (e.keyCode === 13 || e.type === 'click') {
      e.preventDefault();
      if (Cookies.get("font-increased")) {
        Cookies.remove("font-increased");
      } else {
        Cookies.set("font-increased", "on", { expires: 7 });
      }
      if (Cookies.get("font-increased")) {
        $("html").css("font-size", "+=5%");
        $(window).resize();
        $(this).text("Decrease Font Size");
      } else {
        $("html").css("font-size", "62.5%");
        $(this).text("Increase Font Size");
      }
    }
  });
});
