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
        $('#menu-content').slideUp(1000).removeClass('menu-content-open');
        $("#menu-btn-check").prop("checked",false);
    });
});