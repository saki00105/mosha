//ホバーのサブメニュー表示
$(function(){
    $('ul.menu li').hover(function () {
        $('.sub-menu:not(:animated)',this).addClass('open').slideDown(200);
        },
        function(){
            $('.sub-menu',this).removeClass('open').hide();
        }
    );

});

$(function(){
    $('.menu-item-has-children').hover(function () {
        $(this).addClass('open');
        },
        function(){
            $(this).removeClass('open');
        }
    );

});


//クリックのNav表示
$(function(){
    $(".Nav__btn").click(function () {
      $(".Nav__body").slideToggle();
      $('.Nav__body').toggleClass('open');
      $(".Nav__body").css("display","block");
    return false;
    });
});



//ハンバーガーメニュー
$(function(){
    $(".Nav__btn").click(function () {
        $(".box").toggleClass('open');
      return false;
    });
});


// $(function(){
//     $(".box").click(function () {
//     var $open = $(this).find("open");
//         if($open.hasclass("open")){
//             $(this).find('span').text('メニューを閉じる');
//         }else{
//             $(this).find('span').text('メニューを開く');
//         }
//     });
// });
    


//リサイズ
$(function(){
    $(window).resize(function(){
        $(".Nav__body").removeClass("open");

        if ($(window).width() <= 1200 ) {
            $(".Nav__body").css("display","none");
        }else{
            $(".Nav__body").css("display","block");
        }
        return false;
    });

    $(window).resize(function(){
        $(".box").removeClass("open");
    });
});
