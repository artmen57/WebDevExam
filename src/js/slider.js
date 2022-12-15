$(document).ready(function(){
    $('.slider_carousel').slick({
        slidesToshow: 3,
        slidesToscroll:3,
        infinite: true,
        variableWidth: true,
        prevArrow: '<div class="left"><img src="icons/left.svg" alt=""></div>',
        nextArrow: '<div class="right"><img src="icons/right.svg" alt=""></div>'
    });
  });