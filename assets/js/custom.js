$(document).ready(function () {

    // data aos

    AOS.init();

    // custom

    $('#bars').click(function () {
        $('.responsive-menu').slideToggle();
    })

    $('.select-show').click(function () {
        $('.choices').slideDown();
        $('.select-hide').show();
        $('.select-show').hide();
    })

    $('.select-hide').click(function () {
        $('.choices').slideUp();
        $('.select-show').show();
        $('.select-hide').hide();
    })

    // alcohol

    $('.a-pic').click(function () {
        $('.price').fadeIn(1500);
        $(this).fadeOut();
    })

    $('.price').click(function () {
        $('.a-pic').fadeIn();
        $('a-hide').hide();
        $(this).fadeOut(1500);
    })

})