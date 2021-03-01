 window.onload=clock;
function clock(){
    var today=new Date(),//当前时间
        year=today.getFullYear();
        month=today.getMonth()+1;
        day=today.getDate();
        h=today.getHours(),
        m=today.getMinutes(),
        s=today.getSeconds();
    var stopTime= "";//结束时间 //new Date("Feb 20 2021 14:00:00"),)
        currenTime = year + '/' + month + '/' + day + " " + h + ":" + m + ":" + s;
        nextTime =  year + '/' + month + '/' + day + " 14:00:00";
        if(currenTime.valueOf() > nextTime.valueOf()) {
            stopTime = new Date(year + '/' + month + '/' + (day + 1) + " " + "14:00:00");
        } else {
            stopTime = new Date(year + '/' + month + '/' + day  + " " + "14:00:00")
        }
        stopH=stopTime.getHours(),
        stopM=stopTime.getMinutes(),
        stopS=stopTime.getSeconds();
    var shenyu=stopTime.getTime()-today.getTime(),//倒计时毫秒数
        shengyuD=parseInt(shenyu/(60*60*24*1000)),//转换为天
        D=parseInt(shenyu)-parseInt(shengyuD*60*60*24*1000),//除去天的毫秒数
        shengyuH=parseInt(D/(60*60*1000)) < 10 ? '0' + parseInt(D/(60*60*1000)):parseInt(D/(60*60*1000)),//除去天的毫秒数转换成小时
        H=D-shengyuH*60*60*1000,//除去天、小时的毫秒数
        shengyuM=parseInt(H/(60*1000)) < 10 ? '0' + parseInt(H/(60*1000)) : parseInt(H/(60*1000)),//除去天的毫秒数转换成分钟
        M=H-shengyuM*60*1000;//除去天、小时、分的毫秒数
    S=parseInt((shenyu-shengyuD*60*60*24*1000-shengyuH*60*60*1000-shengyuM*60*1000)/1000) < 10 ? '0' + parseInt((shenyu-shengyuD*60*60*24*1000-shengyuH*60*60*1000-shengyuM*60*1000)/1000) : parseInt((shenyu-shengyuD*60*60*24*1000-shengyuH*60*60*1000-shengyuM*60*1000)/1000)//除去天、小时、分的毫秒数转化为秒
    document.getElementById("hour").innerHTML=(shengyuH);
    document.getElementById("minute").innerHTML=(shengyuM);
    document.getElementById("seconds").innerHTML=(S);
    // setTimeout("clock()",500);
    setTimeout(clock,500);
}