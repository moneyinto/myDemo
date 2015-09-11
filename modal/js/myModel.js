/**
 * Created by Administrator on 2015/9/4 0004.
 */

$(window).ready(function () {
    $('#Alert').click(function () {
        MYMODEL.alert('提示', '你把我给弹出来了！');
    });

    $('#Confirm').click(function () {
        MYMODEL.confirm('提示', '你把我给弹出来了！', function () {
            alert(1);
        });
    });
});

var MYMODEL = {
    myModelHtml: function (id, title, content) {
        return '<div class="ny-model" id=' + id + '><div class="my-model-header">' + title +
        '<span class="my-model-close"><a></a></span></div><div class="my-model-body">' + content +
        '</div><div class="my-model-footer"><a class="my-model-sure">确定</a></div></div><div class="my-mask" id="myMask"></div>';
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
        var confirmModel = this.myModelHtml('myModelAlert', title, content);

        $('body').append(confirmModel);

        self.sure(sure);

        self.closeBtn('myModelAlert');

        self.maskClick('myModelAlert');
    },

    sure: function (callback) {
        $('.my-model-sure').click(function () {
            callback();
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