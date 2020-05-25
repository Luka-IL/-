$(document).ready(function () {

    $('.mom-item-block').hover(function () {
        $(this).children('label').addClass('label-hover');
        $(this).children('input').addClass('circle-hover');
    }, function () {
        $(this).children('label').removeClass('label-hover');
        $(this).children('input').removeClass('circle-hover');
    });

    $('.mom-item-block').on('click', function () {
        console.log('11');
        $('.mom-item-label').removeClass('opacity');
        $('.mom-item-circle').removeClass('opacity');

        $(this).children('label').addClass('opacity');
        $(this).children('input').addClass('opacity');

        $('.header-image-block').removeClass('opacity');
        $(this).siblings('.header-image-block').addClass('opacity');
    });

    $('.btn').hover(function () {
        $(this).removeClass('btn').addClass('btn-hover');
        $(this).children('.btn-arrow').removeClass('btn-arrow').addClass('btn-arrow-hover')
    }, function () {
        $(this).removeClass('btn-hover').addClass('btn');
        $(this).children('.btn-arrow-hover').removeClass('btn-arrow-hover').addClass('btn-arrow')
    })
    
    let firstSlide = $('.products-list').first().clone();
    console.log(firstSlide);

})
