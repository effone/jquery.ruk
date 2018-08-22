(function ($) {
    $.fn.ruk = function (opts) {
        var conf = $.extend({
            only: false
        }, opts);
        $(this).addClass("ruk").children('div div').children('div:first-child').addClass("rq").next('div').addClass('ra');

        $('.rq').on('click', function () {
            if (conf.only) {
                $('.rq').not(this).next('.ra').slideUp('fast');
            }
            $(this).next('.ra').slideToggle('fast', function () {
                if ($.isFunction(conf.after)) {
                    conf.after.call(this, $(this).parent().index() + 1, $(this).is(':visible'));
                }
            });
        })
    };
}(jQuery));