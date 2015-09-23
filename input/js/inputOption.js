/**
 * Created by Administrator on 2015/9/23 0023.
 */
var inputOption = {
    inputEnter: function (self) {
        if (event.keyCode == 13) {
            var input = $('#inputEnterToTab input');
            var index = $(self).index();
            if (index == Number(input.length)) {
                input.eq(0).focus();
            } else {
                input.eq(index).focus();
            }
        }
    }
};