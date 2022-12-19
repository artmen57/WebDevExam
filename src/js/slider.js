$(document).ready(function(){
    $('.slider_carousel').slick({
        slidesToshow: 3,
        slidesToscroll: 3,
        infinite: true,
        variableWidth: true,
        centerPadding: '60px',
        centerMode: true,
        adaptiveHeight: true,
        prevArrow: '<div class="left"><img src="icons/left.svg" alt=""></div>',
        nextArrow: '<div class="right"><img src="icons/right.svg" alt=""></div>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToshow: 1,
                    slidesToscroll: 1,
                }   
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToshow: 1,
                    slidesToscroll: 1,
                    arrows: false
                }
            }        
        ]
    });
  });

