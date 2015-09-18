/**
 * Created by Administrator on 2015/9/4 0004.
 */

$(window).ready(function () {
    $('#Alert').click(function () {
        MYMODAL.alert('提示', '你把我给弹出来了！');
    });

    $('#Confirm').click(function () {
        MYMODAL.confirm('提示', '你把我给弹出来了！', function () {
            alert(1);
        });
    });
});

var MYMODAL = {
    myModelHtml: function (id, title, content, cancelHtml) {
        var html = '<div class="my-model" id=' + id + '><div class="my-model-header">' + title +
        '<span class="my-model-close"><a></a></span></div><div class="my-model-body">' + content +
        '</div><div class="my-model-footer"><a class="my-model-sure">确定</a>';
        if(cancelHtml != undefined) {
            html = html + cancelHtml;
        }
        html = html + '</div></div><div class="my-mask" id="myMask"></div>';
        return html;
    },

    alert: function (title, content) {
        var self = this;
        var alertModel = this.myModelHtml('myModelAlert', title, content);

        $('body').append(alertModel);

        self.sure(function () {
            self.close('myModelAlert')
        });

        self.closeBtn('myModelAlert');

        self.maskClick('myModelAlert');
    },

    confirm: function (title, content, sure) {
        var self = this;
        var cancelHtml = '<a class="my-model-cancel">取消</a>';
        var confirmModel = this.myModelHtml('myModelAlert', title, content, cancelHtml);

        $('body').append(confirmModel);

        self.sure(sure);

        self.cancel();

        self.closeBtn('myModelAlert');

        self.maskClick('myModelAlert');
    },

    sure: function (callback) {
        $('.my-model-sure').click(function () {
            callback();
        });
    },

    cancel: function () {
        var self = this;
        $('.my-model-cancel').click(function () {
            self.close('myModelAlert')
        });
    },

    maskClick: function (id) {
        var self = this;
        $('#myMask').click(function () {
            self.close(id);
        });
    },

    closeBtn: function (id) {
        var self = this;
        $('.my-model-close a').click(function () {
             self.close(id);
        });
    },

    close: function (id) {
        $('#' +id).remove();
        $('#myMask').remove();
    }
};

var left, top, $this;
$(document).delegate('#myModelAlert .my-model-header', 'mousedown', function (e) {
    left = e.clientX, top = e.clientY, $this = $(this).css('cursor', 'move');
    this.setCapture ? (
        this.setCapture(),
            this.onmousemove = function (ev) { mouseMove(ev || event); },
            this.onmouseup = mouseUp
        ) : $(document).bind("mousemove", mouseMove).bind("mouseup", mouseUp);
});

function mouseMove(e) {
    var target = $this.parents('#myModelAlert');
    var l = Math.max((e.clientX - left + Number(target.css('margin-left').replace(/px$/, '')) || 0), -target.position().left);
    var t = Math.max((e.clientY - top + Number(target.css('margin-top').replace(/px$/, '')) || 0), -target.position().top);
    l = Math.min(l, $(window).width() - target.width() - target.position().left);
    t = Math.min(t, $(window).height() - target.height() - target.position().top);
    left = e.clientX;
    top = e.clientY;
    target.css({ 'margin-left': l, 'margin-top': t });
}
function mouseUp(e) {
    var el = $this.css('cursor', 'default').get(0);
    el.releaseCapture ?
        (
            el.releaseCapture(),
                el.onmousemove = el.onmouseup = null
            ) : $(document).unbind("mousemove", mouseMove).unbind("mouseup", mouseUp);
}