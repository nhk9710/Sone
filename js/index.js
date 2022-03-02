
    AOS.init();

    $('.single-item').slick({
        slidesToShow:1,
        slidesToScroll:1,
        infinite: true,
        speed: 500,
        fade: true,
        prevArrow: $('.banner-prev'),
        nextArrow: $('.banner-next')
    });

    $('.main-slick').slick({
        slidesToShow:1,
        slidesToScroll:1,
        infinite: true,
        speed: 500,
        fade: true,
        prevArrow: $('.banner-prev'),
        nextArrow: $('.banner-next')
    });