$(document).ready(function() {
    $('.fourth-slick').on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        console.log(currentSlide);
        const fourth_page = nextSlide+1;
        document.querySelector('.fourth_current').textContent = '0'+fourth_page;
    });

})
    AOS.init();

    $('.main-slick').slick({
        slidesToShow:1,
        slidesToScroll:1,
        infinite: true,
        speed: 500,
        fade: true,
        prevArrow: $('.banner-prev'),
        nextArrow: $('.banner-next'),
    });


$('.single-item').slick({
        slidesToShow:1,
        slidesToScroll:1,
        infinite: true,
        speed: 500,
        fade: true,
        prevArrow: $('.banner-prev'),
        nextArrow: $('.banner-next')
    });


    $('.fourth-slick').slick({
        slidesToShow:1,
        slidesToScroll:1,
        infinite: true,
        speed: 500,
        vertical: true,
        verticalSwiping: true,
        prevArrow: $('.fourth-prev'),
        nextArrow: $('.fourth-next')
    });


