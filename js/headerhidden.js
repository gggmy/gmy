$(function () {
    var headerHidden = document.getElementById('headerHidden');
    var zhengZhao = document.getElementById('zhengZhao');

    zhengZhao.onmouseover = function (){
        headerHidden.style.display = 'block';
    }
    zhengZhao.onmouseout = function (){
        headerHidden.style.display = 'none';
    };
});