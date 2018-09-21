(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        function showimg(x) {
            if (x > 3) {
                x = 1;
            }
            setTimeout(function (x) {
                var y = x + 1;
                if (x == 3) {
                    y = 1;
                }
                var classname = '.team-large .team-member-single:nth-child(' + y + ')';
                $(classname).addClass('show');
                var classnamer = '.team-large .team-member-single:nth-child(' + x + ')';
                $(classnamer).removeClass('show');
                if (x < 4) {
                    var x = x + 1;
                    showimg(x);
                }
            }, 3000, x);
        }
        showimg(1);

        function showimgres(x) {
            if (x > 6) {
                x = 1;
            }
            setTimeout(function (x) {
                var y = x + 1;
                if (x == 6) {
                    y = 1;
                }
                var classname = '.team-res .team-member-single:nth-child(' + y + ')';
                $(classname).addClass('show');
                var classnamer = '.team-res .team-member-single:nth-child(' + x + ')';
                $(classnamer).removeClass('show');
                if (x < 7) {
                    var x = x + 1;
                    showimgres(x);
                }
            }, 3000, x);
        }
        showimgres(1);
        $("#menu").on("click", function (e) {
            e.preventDefault();
            $(".left-menu").css('display', 'block');
            $(".right-menu").css('display', 'block');
            $(".menu-wrap").css('display', 'none');
            $(".left-menu").css('display', 'block');
        });
        $(".cancel").on("click", function (e) {
            e.preventDefault();
            $(".left-menu").css('display', 'none');
            $(".right-menu").css('display', 'none');
            $(".menu-wrap").css('display', 'block');
        });
    });
    jQuery(window).on('load', function () {});
}(window.jQuery));