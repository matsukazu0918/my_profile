$(function() {
    $('.top-name, .top-job').textillate({
        // フェードイン
        in: {
            effect: 'fadeIn', //アニメーション効果、エフェクトの種類
            delayScale: 1.5, //遅延時間の指定
            delay: 50, //文字ごとの遅延時間
            sync: false, //『true』全ての文字に同時に適応される
            shuffle: false //ランダム
        }
    });

    // コンテンツのフェードイン処理
    $(window).on('load scroll', function() {

        var box = $('.fade-in');
        var animated = 'animated';

        box.each(function() {

            var boxOffset = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var wh = $(window).height();

            if (scrollPos > boxOffset - wh + 100) {
                $(this).addClass(animated);
            }
        });

    });

    // ハンガーメニュー
    $('.menu-trigger').on('click', function(event) {
        $(".top, .middle, .bottom").toggleClass('active');
        $('#overlay').fadeToggle();
        event.preventDefault();
    });

    $('.overlay-item a').click(function() {
        $('#overlay').fadeOut();
    });

    $('a[href^="#"]').click(function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});