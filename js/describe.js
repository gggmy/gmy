$(function () {
    let id = getCookie('id')-660;
    (async function () {
        await $.ajax({
            url:'../php/xiangqingye.php',
            type:'get',
            data:'id='+id,
            datatype:'json',
            success:function (msg) {
                let obj = JSON.parse(msg)[0];
                let reg=/src/;
                let str='';

                $.each(obj,function (index,value) {
                    if(reg.test(index)){
                        str += `<li>
                        <img src="${value}">
                    </li>`
                    }
                });
                $('#small-pic').html(str);
                let src = $('#small-pic li img').eq(0).attr('src');
                $('#small img').attr('src',src);
                $('#big img').attr('src',src);
            }
        })
    })();
    $('#small').mouseenter(function (){
        $('#mask,#big').show()
    })
    $('#small').mouseleave(function (){
        $('#mask,#big').hide()
    })
    $('#small').mousemove(function (ev){
        var l = ev.pageX-$(this).offset().left-93;
        var t = ev.pageY-$(this).offset().top-93;
        if(l <= 0){
            l = 0
        }else if(l >= 186){
            l = 186
        }

        if(t <= 0){
            t = 0
        }else if(t >= 186){
            t = 186
        }
        //改变遮罩层位置
        $('#mask').css({
            //当前鼠标的位置减当前遮罩层距左的距离
            left:l,
            top:t
        })

        //同时改变放大图片的位置，2倍与遮罩层的位置，而且反方向。
        $('#big img').css({
            left:-2 * l,
            top:-2 * t
        })
    })

    // var $oLi =$('.pic ul li');
    $('.pic ul').mouseenter(function () {
       $('.pic ul li').mouseenter(function () {
           var $picImg = $('#small img')
           var $picBig = $('#big img')
           $(this).addClass('on').siblings().removeClass('on');
           var src = $(this).find('img').attr('src');
           $picImg.attr('src',src);
           $picBig.attr('src',src);
       })
    });
    (function () {
        let id = getCookie('id')-660;
        $.ajax({
            url:'../php/xiangqing.php',
            data:'id='+id,
            type:'get',
            success:function (msg) {
                let obj  =JSON.parse(msg)[0];
                let str = '';
                    str+=`<div class="title">
                    <img src="../img/logo5.png">
                    <h2>${obj.title}</h2>
                    <p>${obj.desc}</p>
                </div>
                <div class="card">
                    <div class="price">
                        <p>售价</p>
                        <p>￥<span>${obj.price}</span></p>
                        <p>￥${obj.dis}</p>
                        <p>特价</p>
                    </div>
                    <div class="service">
                        <div class="service-1">
                            <p>服务</p>
                            <a href="#">!</a>
                        </div>
                        <div class="service-2">
                            <span>√</span>
                            <p>满99包邮</p>
                        </div>
                        <div class="service-3">
                            <span>√</span>
                            <p>小米自营</p>
                        </div>
                        <div class="service-4">
                            <span>√</span>
                            <p>7天无理由</p>
                        </div>
                    </div>
                    <div class="address">
                        <p>配送区域</p>
                        <span>北京 北京市 海淀区</span>
                        <span>有货</span>
                        <a href="#">修改</a>
                    </div>
                    <div class="number">
                        <p>数量</p>
                        <div class="count">
                            <input type="button" value="-"><input type="text" value="1"><input type="button" value="+">
                        </div>
                    </div>
                    <div class="car">
                        <p>加入购物车</p>
                        <p>立即购买</p>
                        <p><a href="#" class="iconfont icon-shoucang"></a>收藏</p>
                        <p><a href="#" class="iconfont icon-kefu-copy"></a>客服</p>
                    </div>
                </div>`
                $('.main-right').html(str);
            }
        })
    })()
});