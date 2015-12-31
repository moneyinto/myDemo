/**
 * Created by Administrator on 2015/9/25 0025.
 */
$(window).ready(function () {
    var box = $('.st-box .st-body .st-content-box');
    var squareBox = box[0];
    var ellipseBox = box[1];
    var arcBox = box[2];
    var triangleBox = box[3];
    var trapezoidBox = box[4];
    var semicircleBox = box[5];
    FIGURE.bindClick(squareBox, 'square');
    FIGURE.bindClick(ellipseBox, 'ellipse');
    FIGURE.bindClick(arcBox, 'arc');
    FIGURE.bindClick(triangleBox, 'triangle');
    FIGURE.bindClick(trapezoidBox, 'trapezoid');
    FIGURE.bindClick(semicircleBox, 'semicircle');
});

var FIGURE = {
    bindClick: function(self, elem) {
        var input = $('.st-' + elem + '-reg', self);
        var figure = '.st-' + elem;
        var reg;
        $('.add-reg', self).click(function () {
            reg = Number(input.val() == '' ? 0 : input.val()) + 10;
            $(figure, self).css('transform', 'rotate(' + reg + 'deg)');
            input.val(reg);
        });

        $('.red-reg', self).click(function () {
            reg = Number(input.val() == '' ? 0 : input.val()) - 10;
            $(figure, self).css('transform', 'rotate(' + reg + 'deg)');
            input.val(reg);
        });

        $('.sure', self).click(function () {
            $(figure, self).css('transform', 'rotate(' + input.val() + 'deg)');
        });
    }
};