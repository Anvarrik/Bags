$(function ($) {
    $(function () {

        $('ul.options__caption').on('click', 'li:not(.options__item__active)', function () {
            $(this)
                .addClass('options__item__active').siblings().removeClass('options__item__active')
                .closest('div.options__tabs').find('div.options__content').removeClass('options__content__active').eq($(this).index()).addClass('options__content__active');
        });

    })
});
let button = $('.btn');
let overlay = $('.overlay');
let close = $('.popup__close');
let form =$('.popup__block');
let second = $('.popup__bot__reg__btn');
let thanks = $('.popup__thanks');
let burger = $('.burger');
let nav = $('.header__nav');
let phone = $('.tel');
let over = $('.overlay__second');
let closes = $('.popup__footer__close');
let buton = $('.buton');


phone.inputmask('+\\9\\96(999)99-99-99');



button.on('click', function () {
    overlay.fadeIn('slow');
form.fadeIn('slow')
    thanks.fadeOut('slow')
});

close.on('click',function () {
overlay.fadeOut('slow');
    form.fadeOut('slow')
});

second.on('click',function (e) {
    e.preventDefault();
    overlay.fadeOut('slow');
    form.fadeOut('slow');
    overlay.fadeIn('slow');
   thanks.fadeIn('slow ')
});
burger.on('click',function () {
    nav.toggleClass('active');
    burger.toggleClass('active')
});
buton.on('click', function () {
over.fadeIn('slow')
})
closes.on('click', function () {
over.fadeOut('slow')

})








