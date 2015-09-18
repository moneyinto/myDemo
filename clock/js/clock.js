/**
 * Created by Administrator on 2015/9/18 0018.
 */
$(window).ready(function () {
    Clock.init();
});

var Clock = {
    init: function () {
        this.drawScale($('.min-scale'), 60, '185px');
        this.drawScale($('.hour-scale'), 12, '175px');
        this.drawNumbers($('.number'));
        this.move();
    },

    drawScale: function (elem, total, translateX) {
        var degrees = 360/total;
        var scaleHtml = '';
        for(var i=0; i<total; i++){
            scaleHtml += '<li style="transform:rotate('+ (i * degrees) + 'deg) translate(' + translateX + ',-50%)"></li>';
        }
        elem.html(scaleHtml);
    },

    drawNumbers: function (elem) {
        var radius = elem.width() / 2;

        var strHtml = '';
        for(var i=1; i<=12; i++){
            var myAngle = (i-3)/6 * Math.PI;

            var myX = radius + radius*Math.cos(myAngle),
                myY = radius + radius*Math.sin(myAngle);

            strHtml += '<li style="left:' + myX + 'px; top:'+ myY +'px">' + i + '</li>';
        }
        elem.html(strHtml);
    },

    move: function (){
    var domHour = $(".hour"),
        domMin = $(".min"),
        domSec = $(".sec");

    setInterval(function(){
        var now = new Date(),
            hour = now.getHours(),
            min = now.getMinutes(),
            sec = now.getSeconds();

        var secAngle = sec*6 - 90,
            minAngle = min*6 + sec*0.1 - 90,
            hourAngle = hour*30 + min*0.5 - 90;

        domSec.css('transform', 'rotate(' + secAngle + 'deg)');
        domMin.css('transform', 'rotate(' + minAngle + 'deg)');
        domHour.css('transform', 'rotate(' + hourAngle + 'deg)');
    },1000);
}
};