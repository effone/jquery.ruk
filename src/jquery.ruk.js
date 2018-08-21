(function ($) {
    $.fn.ruk = function (options) {
        var settings = $.extend({
            only: true
        }, options);
        $(this).addClass("ruk").children('div div').children('div:first-child').addClass("rq").next('div').addClass('ra');

        $('.rq').on('click', function () {
            if (settings.only) {
                $('.rq').not(this).next('.ra').slideUp('fast');
            }
            $(this).next('.ra').slideToggle('fast');
        })
    };
}(jQuery));