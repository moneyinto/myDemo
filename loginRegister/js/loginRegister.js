/**
 * Created by Administrator on 2015/8/31 0031.
 */

var verifyHint = {
    phoneNumber: {
        required: '请输入手机号',
        rules: '手机格式不正确',
        remote: '手机已使用'
    },

    password: {
        required: '请输入密码',
        rules: '只能包含英文、数字和符号',
        length: '密码长度在6-32个字符之间',
        repeat: '两次密码不一致'
    },

    verify: {
        required: '请输入验证码',
        remote: '验证码不正确'
    }
};

var passportReg = {
    pwd: /^.*[A-Za-z0-9_\.-]+.*$/,
    email: /^[A-Z_a-z0-9-\.]+@([A-Z_a-z0-9-]+\.)+[a-z0-9A-Z]{2,4}$/,
    phone: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0-9]|17[0-9])\d{8}$/
};

var loginRegister = {
    init: function () {
        this.tabs($('#loginRegister'));
        this.login();
        this.register();
        this.inputFocus();
        this.inputOnkepress();
    },

    tabs: function (elem) {
        elem.find('.tabs-header li').each(function (i) {
            $(this).click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                elem.find('.tab').eq(i).show().siblings().hide();
            })
        })
    },

    inputFocus: function () {
        $('input').focus(function () {
            $(this).removeClass('input-error').next('.error-text').remove();
        });
    },

    inputOnkepress: function () {
        $('input').bind('keypress',function () {
            if(event.keyCode == "13") {
                $(this).blur();
                $('#loginRegister .active').text() == '登录' ? $('#login').click() : $('#register').click();
            }
        });
    },

    login: function () {
        var self = this;
        $('#login').bind('click', function () {
            self.validate({
                phone: $('.login-tab input[name="phoneNumber"]'),
                password: $('.login-tab input[name="password"]'),
                verifyCode: $('.login-tab input[name="verify"]')
            });
        });
    },

    register: function () {
        var self = this;
        $('#register').bind('click', function () {
            self.validate({
                phone: $('.register-tab input[name="phoneNumber"]'),
                password: $('.register-tab input[name="password"]'),
                confirmPassword: $('.register-tab input[name="confirmPassword"]'),
                verifyCode: $('.register-tab input[name="verify"]')
            });
        });
    },

    validate: function (inputElem) {
        this.phoneValidate(inputElem.phone);
        this.passwordValidate(inputElem.password, inputElem.confirmPassword);
        this.verifyCodeValidate(inputElem.verifyCode);
    },

    phoneValidate: function (phone) {
        var phoneNumber = phone.val();
        if (phoneNumber == '') this.createHint(verifyHint.phoneNumber.required, phone);
        if (phoneNumber != '' && !passportReg.phone.test(phoneNumber)) this.createHint(verifyHint.phoneNumber.rules, phone);
    },

    passwordValidate: function (pwd, conPwd) {
        var password = pwd.val();

        if (conPwd == undefined) {    //登录验证
            this.passwordJudge(password, pwd);
            return;
        }
        var confirmPassword = conPwd.val();
        this.passwordJudge(password, pwd);
        this.passwordJudge(confirmPassword, conPwd, password);
    },

    passwordJudge: function (data, elem, password) {
        if (data == '') return this.createHint(verifyHint.password.required, elem);
        if (data != '' && data.length < 6 || data.length > 32) return this.createHint(verifyHint.password.length, elem);
        if (data != '' && !passportReg.pwd.test(data)) return this.createHint(verifyHint.password.rules, elem);
        if (password != undefined && password != data) this.createHint(verifyHint.password.repeat, elem);

    },

    verifyCodeValidate: function (verifyCode) {

    },

    createHint: function (message, $elem) {
        var html = '<div class="error-text"><span class="error">' + message + '</span></div>'
        $elem.addClass('input-error').parent('.form-cont').append(html);
    }
};

$(window).ready(function () {
    loginRegister.init();

});
