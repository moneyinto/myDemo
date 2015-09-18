/**
 * Created by Administrator on 2015/9/18 0018.
 */
$(window).ready(function () {
    var navBar = $('li.mainlevel');
    var delytime;
    navBar.mouseenter(function(){
        var self = $(this);
        delytime = setTimeout(function(){
            self.find('ul').slideDown();
        },200);
    });
    navBar.mouseleave(function(){
        clearTimeout(delytime);
        $(this).find('ul').slideUp();
    });
});