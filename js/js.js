$(document).ready(function () {

    //Приcваивание стилей input и label в блоке header-mom при наведении

    $('.mom-item-block').hover(function () {
        $(this).children('label').addClass('label-hover');
        $(this).children('input').addClass('circle-hover');
    }, function () {
        $(this).children('label').removeClass('label-hover');
        $(this).children('input').removeClass('circle-hover');
    });

    //Смена изображений при клике на input в header-mom

    $('.mom-item-block').on('click', function () {
 
        $('.mom-item-block').removeClass('opacity');
        $(this).addClass('opacity');

        $('.header-image-block').removeClass('opacity');
        $(this).siblings('.header-image-block').addClass('opacity');
    });

    //Стиль кнопки "оформить заказ" при наведении
    
    $('.btn').hover(function () {
        $(this).removeClass('btn').addClass('btn-hover');
        $(this).children('.btn-arrow').removeClass('btn-arrow').addClass('btn-arrow-hover')
    }, function () {
        $(this).removeClass('btn-hover').addClass('btn');
        $(this).children('.btn-arrow-hover').removeClass('btn-arrow-hover').addClass('btn-arrow')
    });
    
    //Карусель с продуктами

    let owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 25,
        autoWidth: true,
        center: true
    });
    
    //Свои кнопки переключения

    $('.products-btn-right').click(function () {
        owl.trigger('next.owl.carousel', [500]);
    })

    $('.products-btn-left').click(function () {
        owl.trigger('prev.owl.carousel', [500]);
    })
    
    //Изменение прозрачности при смене прокрутке

    owl.on('changed.owl.carousel', function (event) {
        let numEv = event.item.index;
        $('.products-item').addClass('products-opacity')
        $('div article:eq(' + numEv + ')').removeClass('products-opacity')
    })
    
    //Маска на форму с телефоном

    $(function () {
        $("#phone").mask("8(999) 999-9999");
    });
    
    //Плавный скролл по якорям
    
     $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

})
