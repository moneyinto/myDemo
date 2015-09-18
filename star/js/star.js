/**
 * Created by Administrator on 2015/9/18 0018.
 */
$(window).ready(function () {
    var store = 0;
    $('.star ul').each(function () {
        var star = $(this).find('li');
        star.hover(function() {
            selectStar($(this).index(), star);
        }, function () {
            if (store == 0) {
                star.removeClass('on');
            } else {
                selectStar(store - 1, star)
            }
        }).click(function () {
            store = $(this).index() + 1;
            selectStar($(this).index(), star);
        })
    });

    function selectStar(index, star) {
        for (var i = 0; i < 5; i ++) {
            if (i <= index) {
                star.eq(i).addClass('on');
            } else {
                star.eq(i).removeClass('on');
            }
        }
    }
});