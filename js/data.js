$(function () {
//    获取推荐商品模块数据
    (async function () {
        await $.ajax({
            url:'../php/data.php',
            type:'get',
            success:function (msg) {
                let arr = JSON.parse(msg);
                let str ='';
                $.each(arr,function (index,value) {
                    str+=`<li class="list clearfix">
                    <div class="item-img">
                        <img src="${value.src}" alt="">
                    </div>
                    <p class="pro-des">
                        ${value.title}
                    </p>
                    <div class="msg">
                        <p class="tips"><span>${value.key}</span></p>
                        <p class="info">${value.des}</p>
                        <p class="price">
                            <span class="type">￥</span>
                            <span class="num">${value.num}</span>
                        </p>
                    </div>
                </li>`
                });
                $('.box-item').html(str);
            }
        })
    })();
    $('#to-top').click(function () {
        $("html,body").stop().animate({scrollTop:0},500);
    });
    $('.fix-nav li').hover(function () {
        $(this).children('div').css('display','block');
    },function () {
        $(this).children('div').css('display','none');
    });
    (async function () {
        await $.ajax({
            url:'../php/new-item1.php',
            data:'id=9',
            type:'post',
            success:function (msg) {
                let arr = JSON.parse(msg);
                let str='';
                $.each(arr,function (index,value) {
                    str+=`<li class="item-info">
                    <div class="box-img">
                        <img src="${value.src}" alt="">
                    </div>
                    <div class="msg-box">
                        <p class="pro-info" title="">${value.title}</p>
                        <p class="pro-price">
                            <span class="type">￥</span>
                            <span class="money">${value.price}</span>
                            <span class="pro-flag">起</span>
                            <span class="market-price">
                                <span class="pro-unit">¥</span>
                                <span class="m-num">${value.discount}</span>
                            </span>
                        </p>
                    </div>
                </li>`
                });
                $('.top-item').html(str);
            }
        })
    })()
    $.ajax({
        url:'../php/new-item.php',
        data:'id=8',
        type:'post',
        success:function (msg) {
            let arr = JSON.parse(msg);
            let str='';
            $.each(arr,function (index,value) {
               str+=`<li class="item-info">
                    <div class="box-img">
                        <img src="${value.src}" alt="">
                    </div>
                    <div class="msg-box bottom">
                        <p class="pro-info" title="">${value.title}</p>
                        <p class="pro-desc">
                            ${value.price}
                        </p>
                        <p class="pro-price">
                            <span class="type">￥</span>
                            <span class="money">${value.discount}</span>
                            <span class="pro-flag">起</span>
                        </p>
                    </div>
                </li>`
            })
            $('.new-item').html(str);
        }
    });
    let step= 8;
    let num = 8;
    $('.box-btn-right').click(function () {
        step++;
        if(step==$('.item-info').length+1){
            step--;
            return;
        }
        let width = $('.item-info').eq(0).outerWidth();
        let x=-((step-num)*width+5*(step-num));
        $('.top-item').stop().animate({
                'left':x,
        },500);
    });
    $('.box-btn-left').click(function () {
        step--;
        if(step==7){
            step++;
            return;
        }
        let width = $('.item-info').eq(0).outerWidth();
        let x=-((step-num)*width+5*(step-num));
        $('.top-item').stop().animate({
            'left':x,
        },500);
    });
});