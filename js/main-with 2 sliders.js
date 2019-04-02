$(document).ready(function () {

    var $input, introSliderList;

    $input = $('.form__input-num');

    $input.inputmask({
        mask: "99",
        greedy: false,
        "placeholder": ""
    });

    /*---header---*/

    //open mob menu
    $('.hamburger').on('click', function (e) {
        e.preventDefault();

        $(this).toggleClass('is-active');
        $('body, html').toggleClass('no-scroll');
        $('.header').toggleClass('is-open');
    });

    $('.header__cart-link').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var $this = $(this),
            href = $this.attr('href');
        $('.header__cart-modal' + href).toggleClass('is-visible');
    })

    $(document).on('click', function (e) {
        if (!e) e = window.event;
        if ($('.header__cart-modal').is('.is-visible')) {
            if (!$(e.target).closest('.header__cart-modal.is-visible').length) {
                $('.header__cart-modal.is-visible').removeClass('is-visible')
            }
        }
    });

    /*---- end of header------*/

    /*product quantity action*/
    $('.product__quantity-btn').on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
            input = $this.parent().find('.form__input-num'),
            inputVal = parseInt(input.val());

        if ($this.hasClass('product__quantity-decrease')) {
            if (inputVal === 0) {
                input.val(0);
            } else {
                input.val(inputVal - 1);
            }
        } else if ($this.hasClass('product__quantity-increase')) {
            if (inputVal === 99) {
                input.val(99);
            } else {
                input.val(inputVal + 1);
            }
        }
    });

    /*---homepage--*/

    // $('.intro__slider').slick({
    //     dots: false,
    //     arrows: true,
    //     fade: true,
    //     adaptiveHeight: true
    // });

    // introSliderList = $('.intro__slider-list');
    introSliderList = $('.intro__slider');
    introSliderList.slick({
        autoplay: true,
        infinite: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 0,
        speed: 5000,
        pauseOnHover: false,
        cssEase: 'linear',
        swipe: false,
        slidesToShow: 3,
        centerMode: true,
        // slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                pauseOnHover: false,
                pauseOnFocus: false,
                swipe: false,
                autoplay: true,
                infinite: true
            },
            breakpoint: 570,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnHover: false,
                pauseOnFocus: false,
                swipe: false,
                autoplay: true,
                infinite: true
            }
        }]
    }).on("afterChange", function(event, slick, currentSlide) {
        if( $('.intro__slider .slick-center').hasClass('intro__slider-product-slide') ) {
            introSliderList.slick('slickPause');
            setTimeout(function () {
                introSliderList.slick('slickPlay');
            }, 3500)
        } else {
            introSliderList.slick("setOption", "speed", 5000);
        }

    });

    $('.product-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    /*Product page modal*/

    // $('.product__modal-link').on('click', function (e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     var $this = $(this),
    //         href = $this.attr('href');
    //     $('#overlay').fadeIn();
    //     $this.parents('.product-page__content').find('.product__modal' + href).addClass('is-active').fadeIn();
    //     $('body', 'html').addClass('no-scroll');
    // });

    // $('.product__modal-close').on('click', function (e) {
    //     var $this = $(this);
    //     $('#overlay').fadeOut();
    //     $this.parents('.product__modal').removeClass('is-active').fadeOut();
    //     $('body', 'html').removeClass('no-scroll');
    // });

    // $(document).on('click', function (e) {
    //     if (!e) e = window.event;
    //     if ($('.product__modal').is('.is-active')) {
    //         if (!$(e.target).closest('.product__modal.is-active').length) {
    //             $('.product__modal.is-active').removeClass('is-active').fadeOut();
    //             $('#overlay').fadeOut();
    //             $('body', 'html').removeClass('no-scroll');
    //         }
    //     }
    // });

    $('.news-slider').slick({
        dots: true,
        arrows: true,
        fade: true
    });

    $(window).resize(function () {
        $('.header__cart-modal').removeClass('is-visible');
        $('.hamburger').removeClass('is-active');
        $('body, html').removeClass('no-scroll');
        $('.header').removeClass('is-open');
    });

    $(window).scroll(function () {

    });

});