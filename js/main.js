$(document).ready(function () {


// Hero image animation  
    $("#stars").fadeIn(8000);
    $("#rocket").animate({
        'top': '50',
        'width': '237px'
    }, 5000);
    $("#clouds").show(9000);


//Navigation
    $(window).scroll(function () {

        if ($(window).scrollTop() >= 50) {
            $('header').css({
                'background': 'rgba(238, 244, 249, 0.95)',
                '-webkit-transiton': 'all .5s',
                '-moz-transiton': 'all .5s',
                'transition': 'all .5s',
                'border-bottom': '2px solid rgba(153, 153, 153, 0.2)'
            });


        } else {
            $('header').css({
                'background': 'rgb(238, 244, 249)',
                'border-bottom': 'none'
            });
        }

    });


//navbar-toggler click
    var clicked = 0;

    $(".navbar-toggler").click(function () {
        clicked++;

        if (clicked % 2 == 0) {
            $('.navbar').css({
                'background': 'transparent',
            });
        } else {
            $('.navbar').css({
                'background': 'rgb(238, 244, 249)',
                '-webkit-transiton': 'all .5s',
                '-moz-transiton': 'all .5s',
                'transition': 'all .5s'
            });
        }
    });


/*
Carousel
*/
    $('#carousel-example').on('slide.bs.carousel', function (e) {
/*
CC 2.0 License Iatek LLC 2018 - Attribution required
*/
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 4;
        var totalItems = $('.carousel-item').length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                } else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });

});