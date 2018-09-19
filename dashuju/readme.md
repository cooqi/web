#1.引入tab文件夹里的js、css；
因为使用了低版本jq兼容，所以即使你项目中已使用了高版本的jq，也请一定要引入js文件里的jq文件及兼容js



#2.html结构
```
<div class="wrap"><!--wrap是功能区域命名， 每个区域命名不一样，请记得区分，下面所有class都勿改 -->

   <div class="wrap-top">
      <div class="cont-tab">
         <div class="cont-scroll">
            <li class="home"><span>home</span></li><!--home是默认标题可根据情况更改-->
         </div>
      </div>
   </div>
   <!-- 选项卡对应内容 -->

      <div class="wrap-content">　
         <div class="wrap-box">
            <i class="btn-full"></i>
<!--start此处是可以更改的地方，其余地方勿动-->
            <div id="house_time_chart" class="chart"></div>
<!--end-->
	</div>
      </div>

</div>

```


#3.js调用
##核心：
```
var tab= new tabs('.wrap');  //.wrap是某个视图区域的class，不同视图区域请区分
//addTab函数是已封装好的方法；此处传的是title和内容data；均为字符串，data最好是html的字符串
Var title=’’,data=’’;
tab.addTab(title,data)
```

##实例：
```
// 点击事件，此处是用echarts点击事件作为案例，可根据具体情况调整
      chart.on('click', function (params) {

   var tab= new tabs('.wrap');  //.wrap是某个视图区域的class，不同视图区域请区分
   //此处传的是title和内容data；均为字符串，data最好是html的字符串
   var title=params.name;
   var data='<p>'+params.name+'001'+'</p>\n' +
         '<p class="test" style="color: red;font-size: 16px;font-weight: bold">点我试试，弹出子内容</p>';
          tab.addTab(title,data)

      });

      //打开子栏目 delegate是给动态数据绑定方法，一般到了子栏目都是动态数据了，所以建议就这么使用
      $("body").delegate(".test","click",function() {
          var tab= new tabs('.wrap');
          //此处传的是title和内容data；均为字符串，data最好是html的字符串
          var title='子内容';
          var data='<p>我是子内容</p>' ;
          tab.addTab(title,data)
});
```


#4.一定要注意，echarts的渲染;
allCharts这个数组存储所有的图表，为后面再次渲染做准备
所以请一定要全局定义；因为tab.js里要使用这个数组
在没有和其他变量冲突的情况下，建议不修改，如果要更改变量名，tab.js里也需要更换
```
/**窗口变化时**/
var allCharts=[price_trend,house_time,prj_investment,transaction,proportion_offer_sell];
var chartEesize=function(){
    $(allCharts).each(function(index, chart){
        chart.resize();
    });
}
window.onresize = function(){
    chartEesize()
}
```