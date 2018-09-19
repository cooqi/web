$(function(){

    var Timerr;
    function aa(){
        for(var i=0;i<4;i++){
            var m=parseInt(Math.random()*700+100);
            var j2=parseInt(Math.random()*300+1200);
            var j=parseInt(Math.random()*1600+000);
            var j1=parseInt(Math.random()*300+300);
            var n=parseInt(Math.random()*10+(-10));
            $('.chart-bg').prepend('<div class="dot"><div class="dot"><div class="dot"><div class="dot"><div class="dot"></div></div></div></div></div>')
            $('.chart-bg').children('div.dot').eq(0).css({'left':j,'top':n})
            $('.chart-bg').children('div.dot').eq(0).animate({'left':j-j1,'top':$('body').height(),'opacity':0},j2)

        }
    }
    aa();
    setInterval(function(){
        aa();
    },500);
    setInterval(function(){
        for(var jj=0;jj<$('.chart-bg>div.dot').length/4;jj++){
            $('.chart-bg>div.dot').eq($('.chart-bg>div.dot').length-jj).remove();
        }

    },1000)

})