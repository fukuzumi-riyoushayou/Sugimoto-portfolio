$(function(){ 
    $('#menu-btn').click(function() {
        var $menu = $('#menu-content');
        if($menu.hasClass('menu-content-open')) {
            $menu.removeClass('menu-content-open');
            $menu.slideUp();
        } else {
            $menu.addClass('menu-content-open');
            $menu.slideDown();
        }
    });

    $('.close').click(function() {
        $('#menu-content').slideUp().removeClass('menu-content-open');
        $("#menu-btn-check").prop("checked",false);
    });

    $(window).on('load scroll',function() {
        if ($(this).scrollTop() > 200) {
            $('.gotop-btn').addClass('active');
        } else {
            $('.gotop-btn').removeClass('active');
        }
    });
    $(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) <= 100) {
	    $('.gotop-btn').removeClass('active');
	}
    });

    // 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

//ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeUp');
        // 画面内に入ったらfadeInというクラス名を追記
        }
    });
}
    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述

});