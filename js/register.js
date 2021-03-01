window.onload = function (){
    // let zc = document.getElementById('zc');
    // zc.onclick = function(){
    //     var sjhm = document.getElementById('sjhm').value;
    //
    //     var qqsj = 'sjhm='+sjhm;
    //
    //     var qq = new XMLHttpRequest();
    //     qq.open('GET',"../php/register.php?"+qqsj);
    //     qq.send();
    //     qq.onload=function(){
    //             document.getElementById('lg').innerHTML = qq.responseText;
    //     }
    //
    // }
    var oZc = document.getElementById('zc');
    oZc.onclick= function (){
        alert('注册成功！')
        location.href = 'login.html';
    }
}