//header active
$('.header__nav-link').on('click', function() {
    $('.header__nav-link').removeClass('header__nav-link_active');
    $(this).addClass('header__nav-link_active');
});

//menu mobile
$(document).ready(function() {
    //burger btn
    $('.menu__burger').click(function() {
            $(this).toggleClass('close');
        })
        //burger menu
    $(".menu__burger").click(function() {
        $(this).toggleClass("active");
        $('.mobile__nav').slideToggle(300, function() {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');
            }
        });
    });
    $('.block-2__text').marquee({
        duration: 15000,
        startVisible: true,
        duplicated: true
    });
    $('.block-5__slider-wrap').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,

            }
        }, {
            breakpoint: 950,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerPadding: '40px',
            }
        }, ]
    });
    //прокрутка вверх 
    $('#scroll_top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
})