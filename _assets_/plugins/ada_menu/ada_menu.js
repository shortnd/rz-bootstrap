$(window).ready(function() {
  $("html").css("font-size", "62.5%");
  // ADA button
  if (getCookie('highcontrast')) {
    $("html").addClass("highcontrast");
    $(".highcontrast #flyout li:has(ul)>a").css({ color: "#fff" });
    $("#highcontrast").text("High Contrast Off");
  }
  if (getCookie('yellowlinks')) {
    $("html").addClass("yellowlinks");
    $("#yellowlinks").text("Yellow Links Off");
  }
  if (getCookie('greyscale')) {
    $("html").addClass("greyscale");
    $("#greyscale").text("Grey Scale Off");
  }
  if (getCookie('underline-links')) {
    $("html").addClass("underline-links");
    $("#underline-links").text("Underline Links Off");
  }
  if (getCookie('font-size')) {
    $("html").css("font-size", "+=5%");
    $("#font-size").text("Decrease Font Size");
  }
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
      if(getCookie("highcontrast")) {
        removeCookie("highcontrast");
        $("html").removeClass('highcontrast');
        $(this).text('high Contrast');
        return false;
      }
      setCookie("highcontrast", "on", 7);
      $("html").addClass("highcontrast");
      $(this).text("High Contrast Off");
    }
  });
  $("#yellowlinks").on("click keydown", function(e) {
    if (e.keyCode === 13 || e.type === 'click') {
      e.preventDefault();
      if(getCookie("yellowlinks")){
        removeCookie("yellowlinks");
        $("html").removeClass("yellowlinks");
        $(this).text('Yellow Links');
        return false;
      }
      setCookie("yellowlinks", "on", 7);
      $("html").addClass("yellowlinks");
      $(this).text("Yellow Links Off");
    }
  });
  $("#greyscale").on("click keydown", function(e) {
    if (e.keyCode === 13 || e.type === 'click') {
      e.preventDefault();
      if (getCookie("greyscale")) {
        removeCookie("greyscale");
        $("html").removeClass("greyscale");
        $(this).text("Grey Scale");
        return false;
      }
      setCookie("greyscale", "on", 7);
      $("html").addClass("greyscale");
      $(this).text("Grey Scale Off");
    }
  });
  $("#underline-links").on("click keydown", function(e) {
    if (e.keyCode === 13 || e.type === 'click') {
      e.preventDefault();
      if(getCookie("underline-links")) {
        removeCookie("underline-links");
        $("html").removeClass("underline-links");
        $(this).text("Underline Links");
        return false;
      }
      setCookie("underline-links", "on", 7);
      $("html").addClass("underline-links");
      $(this).text("Underline Links Off");
    }
  });
  $("#font-size").on("click keydown", function(e) {
    if (e.keyCode === 13 || e.type === 'click') {
      e.preventDefault();
      if(getCookie("font-increase")) {
        removeCookie("font-increase");
        $("html").css("font-size", "62.5%");
        $(this).text("Increase Font Size");
        $(window).resize();
        return false;
      }
      setCookie("font-increase", "on", 7);
      $("html").css("font-size", "+=%5");
      $(window).resize();
      $(this).text("Decrease Font Size");
    }
  });
});
