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
})