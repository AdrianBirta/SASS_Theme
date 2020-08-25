define(['jquery', 'slick'], function ($) {
    if($('.who-are-we-slider')[0]) {
        $('.who-are-we-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: $('.prev-slide'),
            nextArrow: $('.next-slide'),
            autoplay: true,
            autoplaySpeed: 5000,
        });
    }
});