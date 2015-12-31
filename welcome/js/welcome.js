/**
 * Created by moneyinto on 15/12/31.
 */
var welcome = (function (slider) {
    var _init = function () {
        new slider({
            selector: '#jingle_welcome'
        });
    };

    var _coinRandomAnimation = function () {
        var time = 4 * Math.random();
        _setTime(time);
    };

    var _setTime = function (time) {
        var css = {
            'animation': 'slideInDown ' + time + 's infinite',
            '-webkit-animation': 'slideInDown ' + time + 's infinite'
        };
        $('.coin').css(css);
        setTimeout(function () {
            _coinRandomAnimation();
        }, time*1000)
    };

    return {
        init                : _init,
        coinRandomAnimation : _coinRandomAnimation
    }
})(slider);

$(window).ready(function () {
    welcome.init();
    welcome.coinRandomAnimation();
});