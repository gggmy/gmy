var swiper = new Swiper ('.seckill-2.swiper-container', {
    // direction: 'vertical', // 垂直切换选项

    // 如果需要分页器
    // pagination: {
    //     el: '.seckill-3 .swiper-pagination',
    // },

    // //如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // loop:true,
    // autoplay:{
    //     deplay:1000,
    //     disableOnInteraction: false
    // },
    // spaceBetween : 20,
    slidesPerView : 4,
});