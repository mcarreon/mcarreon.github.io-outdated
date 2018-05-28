window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(function() {
    $('.navBar-1').hover(function() {
      $('#navBtn').css('color', '#B43CCB');
    }, function() {
      // on mouseout, reset the background colour
      $('#navBtn').css('color', '');
    });
  });

  $(function() {
    $('.navBar-2').hover(function() {
      $('#about').css('color', '#B67AFF');
    }, function() {
      // on mouseout, reset the background colour
      $('#about').css('color', '');
    });
  });

  $(function() {
    $('.navBar-3').hover(function() {
      $('#portfolio').css('color', '#00BDFF');
    }, function() {
      // on mouseout, reset the background colour
      $('#portfolio').css('color', '');
    });
  });

  $(function() {
    $('.navBar-4').hover(function() {
      $('#library').css('color', '#00FDFF');
    }, function() {
      // on mouseout, reset the background colour
      $('#library').css('color', '');
    });
  });

  $(function() {
    $('.navBar-5').hover(function() {
      $('#contact').css('color', '#00FFBD');
    }, function() {
      // on mouseout, reset the background colour
      $('#contact').css('color', '');
    });
  });