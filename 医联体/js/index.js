$('.nav li').not('.navbg').off('click').mouseover(function() {
    var shif = parseInt($(this).offset().left) - $('.banner ul').offset().left + 'px';
    $('.navbg').css('left', shif);
    if ($(window).width() <= 768) {
        var shif = parseInt($(this).offset().top) - $('.banner ul').offset().top + 'px';
        $('.navbg').css('top', shif);
    }
});
$('.nav li').not('.navbg').off('click').mouseout(function() {
    console.log($('.nav').find('.navbgg'));
    var shif = parseInt($('.nav').find('.navbgg').offset().left) - $('.banner ul').offset().left + 'px';
    $('.navbg').css('left', shif);
    if ($(window).width() <= 768) {
        var shif = parseInt($('.nav').find('.navbgg').offset().top) - $('.banner ul').offset().top + 'px';
        $('.navbg').css('top', shif);
    }
});
$('.nav li').not('.navbg').click(function() {
    var shif = parseInt($(this).offset().left) - $('.banner ul').offset().left + 'px';
    $('.navbg').css('left', shif);
    $(this).addClass('navbgg').siblings().removeClass('navbgg');
    if ($(window).width() <= 768) {
        var shif = parseInt($(this).offset().top) - $('.banner ul').offset().top + 'px';
        $('.navbg').css('top', shif);
        $(this).addClass('navbgg').siblings().removeClass('navbgg');
    }
});
$(window).resize(function() {
    if ($(window).width() <= 768) {
        var shif = parseInt($('.nav').find('.navbgg').offset().top) - $('.banner ul').offset().top + 'px';
        $('.navbg').css('top', shif);
        $('.nav').find('.navbgg').addClass('navbgg').siblings().removeClass('navbgg');
        $('.navbg').css('left', 0);
    }
    if ($(window).width() >= 992) {
        $('.navbg').css('top', 0);
    }
    // if ($('.nav li').is('.navbgg')) {
    // var shif = parseInt($('.nav').find('.navbgg').offset().left) - $('.banner ul').offset().left + 'px';
    // $('.navbg').css('left', shif);
    // $('.nav').find('.navbgg').addClass('navbgg').siblings().removeClass('navbgg');
    // if ($(window).width() <= 768) {
    //     var shif = parseInt($('.nav').find('.navbgg').offset().top) - $('.banner ul').offset().top + 'px';
    //     $('.navbg').css('top', shif);
    //     $('.nav').find('.navbgg').addClass('navbgg').siblings().removeClass('navbgg');
    // }
    // }
});
$(document).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('nav').addClass('scrolltops');
    } else {
        $('nav').removeClass('scrolltops');
    }
});