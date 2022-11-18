(function($) {

    "use strict";

    $(document).ready(function() {

        var kmt_width = $(window).width();

        if ($("#menu2").length) {
            $('#menu2').metisMenu();
        }

        if ($("#slider4").length) {

            $("#slider4").responsiveSlides({
                auto: true,
                pager: false,
                nav: true,
                speed: 500,
                namespace: "callbacks",
            });

            $(".callbacks_nav").hide();
            /* Begin hover callbacks_nav */
            $(".callbacks_container").hover(function() {
                $(this).find(".callbacks_nav").show();
            }, function() {
                $(this).find(".callbacks_nav").hide();
            });
            /* Begin hover callbacks_nav */

        }

        if ($('.owl_item_promotion').length) {

            $(".owl_item_promotion").owlCarousel({
                navigation: false,
                pagination: false,
                slideSpeed: 300,
                paginationSpeed: 400,
                autoPlay: false,
                items: 4,
                navText: ["", ""],
                navClass: ['.kmt-btn-slider .prev-item-promotion', '.kmt-btn-slider .next-item-promotion'],
                itemsCustom: [
                    [0, 1],
                    [640, 2],
                    [736, 2],
                    [812, 3],
                    [1200, 4]
                ]
            });

            $(".kmt-btn-slider .next-item-promotion").click(function() {
                $(".owl_item_promotion").trigger('owl.next');
            });

            $(".kmt-btn-slider .prev-item-promotion").click(function() {
                $(".owl_item_promotion").trigger('owl.prev');
            });

        }

        if ($('.owl_project').length) {

            $(".owl_project").owlCarousel({
                navigation: false,
                pagination: false,
                slideSpeed: 300,
                paginationSpeed: 400,
                autoPlay: false,
                items: 4,
                navText: ["", ""],
                itemsCustom: [
                    [0, 1],
                    [667, 2],
                    [1024, 3],
                    [1200, 4]
                ]
            });


        }

        if ($('.owl_news').length) {

            $(".owl_news").owlCarousel({
                navigation: false,
                pagination: false,
                slideSpeed: 300,
                paginationSpeed: 400,
                autoPlay: false,
                items: 4,
                navText: ["1", "2"],
                navClass: ['.kmt-btn-slider .prev-news', '.kmt-btn-slider .next-news'],
                itemsCustom: [
                    [0, 1],
                    [568, 2],
                    [1024, 3],
                    [1200, 4]
                ]
            });

            $(".next-news").click(function() {
                $(".owl_news").trigger('owl.next');
            });

            $(".prev-news").click(function() {
                $(".owl_news").trigger('owl.prev');
            });


        }

        if ($('.owl_partner').length) {

            $(".owl_partner").owlCarousel({
                navigation: false,
                pagination: false,
                slideSpeed: 1200,
                paginationSpeed: 1300,
                autoPlay: true,
                items: 6,
                navText: ["", ""],
                itemsCustom: [
                    [0, 2],
                    [568, 3],
                    [736, 4],
                    [1024, 5],
                    [1200, 6]
                ]
            });

        }

        if ($('.owl_feedback').length) {

            $(".owl_feedback").owlCarousel({
                navigation: false,
                pagination: true,
                slideSpeed: 1200,
                paginationSpeed: 1300,
                autoPlay: false,
                items: 1,
                navText: ["", ""],
                itemsCustom: [
                    [0, 1]
                ]
            });

        }


        if ($('.owl_item').length) {

            $(".owl_item").owlCarousel({
                navigation: false,
                pagination: false,
                slideSpeed: 300,
                paginationSpeed: 400,
                autoPlay: false,
                items: 4,
                navText: ["", ""],
                navClass: ['.btn-slider-item .prev', '.btn-slider-item .next'],
                itemsCustom: [
                    [0, 1],
                    [1200, 1]
                ]
            });

            $(".btn-slider-item .next_item").click(function() {
                $(".owl_item").trigger('owl.next');
            });

            $(".btn-slider-item .prev_item").click(function() {
                $(".owl_item").trigger('owl.prev');
            });

        }

        $(document).on('change', '#idCT', function() {
            var idCT = $(this).val();
            $.post(base_url + lang + '/get-model/' + idCT, {}, function(data) {
                $('#idCM').html(data);
            });
        });




        /* Stop menu */
        $(window).scroll(function() {
            if ($(this).scrollTop() > 200) {
                $('a#top').fadeIn();
            } else {
                $('a#top').fadeOut();
            }

        });

        $('a#top').hide().click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        if ($('.wrap_item').length) {
            $('.wrap_item').each(function() {
                //startListHeight($('.block_item'));
            });
        }

        if ($('.wrap_news').length) {
            $('.wrap_news').each(function() {
                startListHeight($('.wrap_news'));
            });
        }

        $(document).on("click", '#wrap_img_thumbs ul li a', function() {
            var img = $(this).attr('href');
            $('#wrap_img_dt img').attr('data-origin', img);
            $('#wrap_img_dt img').attr('src', img);
            return false;
        });




    });



})(window.jQuery);

function startListHeight($tag) {
    function setHeight(s) {
        var max = 0;
        s.each(function() {
            var h = $(this).height();
            max = Math.max(max, h);
        }).height('').height(max);
    }

    $(window).on('ready load resize', setHeight($tag));
}