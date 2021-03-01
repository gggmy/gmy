$(function(){
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

    var $oLi =$('.pic ul li');
    var $picImg = $('#small img')
    var $picBig = $('#big img')
    $oLi.hover(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var src = $(this).find('img').attr('src');
        $picImg.attr('src',src);
        $picBig.attr('src',src);
    });
})