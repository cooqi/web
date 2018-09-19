
var tabs = function(dom){
    var wt = $(dom).find(".wrap-top");
    var wtl = $(dom).find('.wrap-top li');
    var home = $(dom).find('.wrap-top li.home');

    // 切换样式
    wtl.die("click").live('click',function(e){
        // 切换样式和打开相应内容
        for(var i=0;i<wtl.length;i++){
            wtl.eq(i).addClass('listyle'+i)
        }

        $(this).nextAll("li").remove();


        $(dom).find(".wrap-content").eq($(this).index()).show();
        $(dom).find(".wrap-content").eq($(this).index()).nextAll(".wrap-content").remove();
        wt.show();
        if($(dom).find('.wrap-top li').length <=1){
            home.hide()
        }

        //全屏放缩回归初始状态
        $(dom).find('.wrap-content').removeClass('fullscreen');


        //切换后，echarts重新渲染，防止百分比宽度失效;
        //注意：页面中一定要定义好charts这个数组，用来储存所有的图表
        $(allCharts).each(function(index, chart){
            chart.resize();
        });
        return false;
    });






    //添加选项内容
   this.addTab=function(title,data){
        Fin =title;
        Far = data;

        // 添加选项卡标题和内容
       $(dom).find(".cont-scroll:last").append('</li><li><span>'+Fin+'</span></li>');
         if($(dom).find('.wrap-top li').length>=1){
             home.show()
         }

       //todo判断它父元素的一个全屏状态，和父元素保存统一
        var newwc='';
       if($(dom).find(".wrap-content:last").hasClass('fullscreen') ){
           newwc='<div class="wrap-content fullscreen">　\n';
       }else{
           newwc='<div class="wrap-content">　\n';
       }

       //拼接html
       $(dom).append(newwc+
            '\t\t\t\t\t\t\t\t\t\t<div class="wrap-box">\n' +
            '\t\t\t\t\t\t\t\t\t\t\t<i class="btn-full"></i>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t<div>'+Far+'</div>\n' +                    //内容区
            '\t\t\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t\t</div>');



        // 添加内容后切换至相应的选项卡和相应的内容
       var li=$(dom).find('.wrap-top li');
       for(var i=0;i<li.length;i++){
           $(dom).find('.wrap-top li').eq(i).addClass('listyle'+i)
       }
       $(dom).find(".wrap-content").eq($(".wrap-content").size()-1).show().siblings(".wrap-content").hide();
        wt.show();



    }


}

//全屏放缩
$("body").delegate(".btn-full","click",function() {
    if ($(this).parents('.wrap-content').hasClass('fullscreen')) {
        $(this).parents('.wrap-content').removeClass('fullscreen')
        chartEesize()

    } else {
        $(this).parents('.wrap-content').addClass('fullscreen')
        chartEesize()
    }
})




















