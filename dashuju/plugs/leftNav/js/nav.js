$(function(){
    // nav收缩展开
    $('.nav-item>a').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            }else{
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.nav-item.nav-show').removeClass('nav-show');
            }
        }
    });

    $('li a').click(function(){
        if(!$(this).parent('li').hasClass('nav-act')){
            $('li').removeClass('nav-act')
            $(this).parent('li').addClass('nav-act').siblings('li').removeClass('nav-act');
        }
    })
    //nav-mini切换
    $(".nav").mouseover(function (e){
            $('.nav').removeClass('nav-mini');
        });
    $(".nav").mouseout( function (){
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
        });

    //固定
   $('.fixed').click(function(){
       if($('.fixed').hasClass('act')){
           $('.fixed').removeClass('act')
           $(".nav").mouseover(function (e){
               $('.nav').removeClass('nav-mini');
           });
           $(".nav").mouseout( function (){
               $('.nav-item').children('ul').removeAttr('style');
               $('.nav').addClass('nav-mini');
           });
       }else{
           $('.fixed').addClass('act')
           $('.nav').unbind( "mouseover" ).unbind( "mouseout" )
       }
   })
});