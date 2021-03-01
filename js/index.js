var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    loop:true,
    autoplay:{
        deplay:1000,
        disableOnInteraction: false
    }
});
$('.swiper-pagination').on('click','span',function(){
    var index = $(this).index()+1 ;
    mySwiper.slideTo(index, 1000, false)//切换到对应的slide，速度为1秒

});





