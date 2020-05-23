$(document).ready(function () {

    $('.mom-item-circle').hover(function() {
        $(this).addClass('circle-hover');
        $(this).prev().addClass('label-hover');
    }, function() {
        $(this).removeClass('circle-hover');
        $(this).prev().removeClass('label-hover');
    })
    
   $('.mom-item-label').hover(function() {
        $(this).addClass('label-hover');
        $(this).next().addClass('circle-hover');
    }, function() {
        $(this).removeClass('label-hover');
        $(this).next().removeClass('circle-hover');
    }) 
    
})
