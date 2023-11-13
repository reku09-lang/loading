$(function(){
    $(window).on('load', function(){
        $('.pin').css({
            transform: "rotate(140deg)",
        });
        $('.loading').delay(2000).fadeOut(300);
    });
});