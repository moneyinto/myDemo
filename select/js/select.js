/**
 * Created by Administrator on 2015/9/21 0021.
 */
$(window).ready(function () {
    listItemClick();

    $('.text-box input[type="text"]')

        .focus(function () {
            $(this).parent('.text-box').addClass('text-box-focused');
        })

        .blur(function () {
            $(this).parent('.text-box').removeClass('text-box-focused');
        })

        .on('input', function () {
            $('.select-box').addClass('active');
            listItemStatus();
        });

    $('.text-box .text-box-right-arrow').click(function () {
        var selectBox = $('.select-box');

        $('.text-box input[type="text"]').focus();

        selectBoxToggle(selectBox);
    });

    $(document).click(function (e) {
        if($(e.target).closest(".text-box").length == 0 && $(e.target).closest(".select-box").length == 0) {
            $('.select-box').removeClass('active');
        }
    });
});

function selectBoxToggle(selectBox) {
    if (selectBox.hasClass('active')) {
        selectBox.removeClass('active');
    }

    else {
        selectBox.addClass('active');
        listItemStatus();
    }
}

function listItemStatus() {
    var inputText = $('.text-box input[type="text"]').val();
    $('.select-list-item').removeClass('active').each(function (index, elem) {
        if ($(elem).text().indexOf(inputText) >= 0) {
            $(elem).addClass('active');
        }
    });
}

function listItemClick () {
    $('.select-list-item').click(function () {
        var text = $(this).text();
            $('.text-box input[type="text"]').val(text);
            $('.select-box').removeClass('active');
    })
}