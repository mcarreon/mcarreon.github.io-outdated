window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

/* covers hovering of text */

$(function () {
    $('.navBar-1').hover(function () {
        $('#navBtn').css('color', '#B43CCB');
        $('#about').css('color', '#B67AFF');
        $('#portfolio').css('color', '#00BDFF');
        $('#library').css('color', '#00FDFF');
        $('#contact').css('color', '#00FFBD');
    }, function () {
        // on mouseout, reset the background colour
        $('#navBtn').css('color', '');
        $('#about').css('color', '');
        $('#portfolio').css('color', '');
        $('#library').css('color', '');
        $('#contact').css('color', '');
    });
});

$(function () {
    $('.navBar-2').hover(function () {
        $('#about').css('color', '#B67AFF');
    }, function () {
        // on mouseout, reset the background colour
        $('#about').css('color', '');
    });
});

$(function () {
    $('.navBar-3').hover(function () {
        $('#portfolio').css('color', '#00BDFF');
    }, function () {
        // on mouseout, reset the background colour
        $('#portfolio').css('color', '');
    });
});

$(function () {
    $('.navBar-4').hover(function () {
        $('#library').css('color', '#00FDFF');
    }, function () {
        // on mouseout, reset the background colour
        $('#library').css('color', '');
    });
});

$(function () {
    $('.navBar-5').hover(function () {
        $('#contact').css('color', '#00FFBD');
    }, function () {
        // on mouseout, reset the background colour
        $('#contact').css('color', '');
    });
});

/* cover sliding panels */

$(document).ready(function () {



});

$("#about-panel>.icon-panel").click(function () {
    $("#about-panel").animate({
        width: 'toggle'

    }, 2500);
});

$("#portfolio-panel>.icon-panel").click(function () {
    $("#portfolio-panel").animate({
        width: 'toggle'

    }, 2500);
});

$("#library-panel>.icon-panel").click(function () {
    $("#library-panel").animate({
        width: 'toggle'

    }, 2500);
});

$("#contact-panel>.icon-panel").click(function () {
    $("#contact-panel").animate({
        width: 'toggle'

    }, 2500);
});

$("#about-btn").click(function () {
    $("#about-panel").animate({
        width: 'toggle'

    }, 2500);
});

$("#portfolio-btn").click(function () {
    $("#portfolio-panel").animate({
        width: 'toggle'

    }, 2500);
});

$("#library-btn").click(function () {
    $("#library-panel").animate({
        width: 'toggle'

    }, 2500);
});

$("#contact-btn").click(function () {
    $("#contact-panel").animate({
        width: 'toggle'

    }, 2500);
});