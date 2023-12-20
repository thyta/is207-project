$(document).ready(function(){
    $('.product-list-slider').slick({
        slidesToShow: 1,
        infinite: true,
        speed: 300,
 
        centerMode: true,
        variableWidth: true,
        slidesToScroll: 1,
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });