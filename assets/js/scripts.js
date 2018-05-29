window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

/* handles blurring during toggle */

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

/*  deals with closing the panel */

$("#about-panel>.icon-panel").click(function () {    
    $("#blur-toggle").toggleClass('unblur');
    $("#blur-toggle").toggleClass('blur');
    $(".about-rewind").toggleClass('flip-animation-rewind')  
    $("#about-panel").animate({
        width: 'toggle'

    }, 2500);
});

$("#portfolio-panel>.icon-panel").click(function () {
    $("#blur-toggle").toggleClass('unblur');
    $("#blur-toggle").toggleClass('blur');
    $(".port-rewind").toggleClass('flip-animation-rewind')  
    $("#portfolio-panel").animate({
        width: 'toggle'

    }, 2500);

});

$("#library-panel>.icon-panel").click(function () {
    $("#blur-toggle").toggleClass('unblur');
    $("#blur-toggle").toggleClass('blur');
    $(".library-rewind").toggleClass('flip-animation-rewind')  
    $("#library-panel").animate({
        width: 'toggle'

    }, 2500);
});

$("#contact-panel>.icon-panel").click(function () {
    $("#blur-toggle").toggleClass('unblur');
    $("#blur-toggle").toggleClass('blur');
    $(".contact-rewind").toggleClass('flip-animation-rewind')  
    $("#contact-panel").animate({
        width: 'toggle'

    }, 2500); 
});

/*  deals with opening the panel */

$("#about-btn").click(function () {
    $("#blur-toggle").removeClass('unblur');
    $(".about-rewind").toggleClass('flip-animation-rewind')  
    $("#about-panel").animate({
        width: 'toggle'

    }, 2500);
    $("#blur-toggle").toggleClass('blur');
});

$("#portfolio-btn").click(function () {
    $("#blur-toggle").removeClass('unblur');
    $(".port-rewind").toggleClass('flip-animation-rewind')  
    $("#portfolio-panel").animate({
        width: 'toggle'

    }, 2500);
    $("#blur-toggle").toggleClass('blur');
});

$("#library-btn").click(function () {
    $("#blur-toggle").removeClass('unblur');
    $(".library-rewind").toggleClass('flip-animation-rewind')  
    $("#library-panel").animate({
        width: 'toggle'

    }, 2500);
    $("#blur-toggle").toggleClass('blur');
});

$("#contact-btn").click(function () {
    $("#blur-toggle").removeClass('unblur');
    $(".contact-rewind").toggleClass('flip-animation-rewind')  
    $("#contact-panel").animate({
        width: 'toggle'

    }, 2500);
    $("#blur-toggle").toggleClass('blur');
});