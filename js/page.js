$((function () {
    (function () {
        $.ajax({
            url:"../php/page.php",
            type:'post',
            dataType:'json',
            success:function (msg) {
                $('.num').html(msg.length);
                let str = '';
                $('.page').pagination({
                    pageCount:Math.ceil(msg.length/12),
                    totalData:msg.length,
                    showData:12,
                    current:1,
                    coping:true,
                    homePage: '首页',
                    endPage: '末页',
                    prevContent: '上页',
                    nextContent: '下页',
                    jump: true,
                    jumpBtn: '跳转', //跳转按钮文本
                },function () {
                    //设置初始显示页面
                    let arr = msg.slice(0,12);
                    let id =660;
                    for(let value of arr){
                        id++;
                        str+=`<li class="list" data-id = ${id}> 
                    <div class="pro-img">
                        <img src="${value.src}?w=800&h=800" alt="">
                    </div>
                    <p class="info">${value.title}</p>
                    <p class="pro-price"><span class="pro-unit">¥</span><span class="m-num">${value.price}</span></p>
                </li>`
                    }
                    $('.item').html(str);
                });
                $('.page').on('click',function () {
                    let page = $('.page').find('.active').html();
                    $.ajax({
                        url:"../php/page.php",
                        type:'post',
                        dataType:'json',
                        success:function (msg) {
                            let str = '';
                            let arr = msg.slice((page-1)*12, page*12);
                            let id = 660+(page-1)*12;
                            for(let value of arr){
                                id++;
                                str+=`<li class="list" data-id = ${id}>
                    <div class="pro-img">
                        <img src="${value.src}?w=800&h=800" alt="">
                    </div>
                    <p class="info">${value.title}</p>
                    <p class="pro-price"><span class="pro-unit">¥</span><span class="m-num">${value.price}</span></p>
                </li>`
                            }
                            $('.item').html(str);
                        },
                    })
                })
            }
        });
    })();
    $('.box-in').delegate('.list','click',function () {
        let id = $(this).attr('data-id');
        addCookie('id',id,1,'/');
        location.href = '../html/good.html';
    });
}));
