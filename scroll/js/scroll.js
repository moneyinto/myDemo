/**
 * Created by Administrator on 2015/9/24 0024.
 */
$(window).ready(function () {
//    $(selector).slimScroll({
//        width: 'auto', //容器宽度,默认无
//        height: '1000px', //容器高度,默认250px
//        size: '10px', //滚动条宽度,默认7px
//        position: 'right', //滚动条位置,可选值:left,right,默认right
//        color: '#ffcc00', //滚动条颜色,默认#000000
//        alwaysVisible: true, //是否禁用隐藏滚动条,默认false
//        distance: '20px', //距离边框距离,位置由position参数决定,默认1px
//        start: $('#child_image_element'), //滚动条初始位置,可选值top,bottom,$(selector)--内容元素位置,默认top
//        railVisible: true, //滚动条背景轨迹,默认false
//        railColor: '#222', //滚动条背景轨迹颜色,默认#333333
//        railOpacity: 0.3, //滚动条背景轨迹透明度,默认0.2
//        wheelStep: 10, //滚动条滚动值默认20
//        allowPageScroll: false, //滚动条滚动到顶部或底部时是否允许页面滚动,默认false
//        disableFadeOut: false //是否禁用鼠标在内容处一定时间不动隐藏滚动条,当设置alwaysVisible为true时该参数无效,默认false
//    });

    $('.window').slimScroll({
        width: '100%',
        height: $(window).height() + 'px'
    });

    $('.content-demo').slimScroll({
        width: '200px',
        height: '300px'
    });
});