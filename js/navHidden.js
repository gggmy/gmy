var oLi1 = document.getElementById('li-1');
var oLi2 = document.getElementById('li-2');
var otuiJian = document.getElementById('tuiJian');
var oHome = document.getElementById('homeDianqi');



oLi1.onmouseenter= function (){
    otuiJian.style.display = 'block';
    otuiJian.onmouseover= function (){
        otuiJian.style.display = 'block';
    }
    otuiJian.onmouseout= function (){
        otuiJian.style.display = 'none';
    }
}

oLi1.onmouseleave= function (){
    otuiJian.style.display = 'none';
}

oLi2.onmouseenter= function (){
    oHome.style.display = 'block';
    oHome.onmouseover= function (){
        oHome.style.display = 'block';
    }
    oHome.onmouseout= function (){
        oHome.style.display = 'none';
    }
}

oLi2.onmouseleave= function (){
    oHome.style.display = 'none';
}




