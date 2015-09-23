/**
 * Created by Administrator on 2015/9/22 0022.
 */
$(window).ready(function () {
    var totalPage = 20;
    var totalRecords = 390;
    var pageNo = getParameter('pno');
    if(!pageNo){
        pageNo = 1;
    }
    kkpager.generPageHtml({
        pno : pageNo,
        total : totalPage,
        totalRecords : totalRecords,
        hrefFormer : 'index',
        hrefLatter : '.html',
        getLink : function(n){
            return this.hrefFormer + this.hrefLatter + "?pno="+n;
        }
    });
});

function getParameter(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
}