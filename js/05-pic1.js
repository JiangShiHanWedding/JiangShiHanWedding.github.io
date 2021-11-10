$(document).ready(function(){
    var content = $(".content").eq(4);

    var linkup = $(".linkup").eq(4);
    var linkdown = $(".linkdown").eq(4);

    var h1 = content.children("h1");
    var h2 = content.children("h2");

    var fivediv = $("#fivediv");
    var img1 = $("#fiveimg1");
    var img2 = $("#fiveimg2");
    var img3 = $("#fiveimg3");
    var img4 = $("#fiveimg4");
    // gif
    var fly = $(".fiveflybirde:eq(0)");

    var nouseico = $(".downiconouse").eq(4);

    if($(window).height()<670){
        fivediv.css("height","60%");
    }

    //图片持续显示时间
    var duration = 1000;
    //切换动画时间
    var speed = 1000;
    //当前显示图片索引值
    var curIndex = 0;
    //计时变量
    var timer;
    //单张图片的宽度
    var width;
     //图片个数
     var totalIndex;

    // 动画开始
    content.bind("animationstart",function(e){
        var name = e.target.className;
        switch(name){
            case "content five":
                navclass(5);
                nouseico.addClass("nouseAn");

                h1.removeClass("fiveh1An");
                h1.css("opacity","0");

                h2.removeClass("fiveh2An");
                h2.css("opacity","0");

                fivediv.removeClass("fivedivAn");
                fivediv.css("opacity","0");
                //清除计时
                clearTimeout(timer);

                linkup.css("opacity","0");
                linkup.removeClass("linkupanimation");

                linkdown.css("opacity","0");
                linkdown.removeClass("linkdownanimation");

                fly.css("opacity","0");
                fly.removeClass("fivegifAn");

                break;
            case "h1animation":
                break;
        }
    });
    // 监听动画结束
    content.bind("animationend",function(e){
        
        var name = e.target.className;
        // alert(name);
        switch(name){
            case "content five":
                h1.addClass("fiveh1An");
                h2.addClass("fiveh2An");

                linkup.addClass("linkupanimation");
                linkdown.addClass("linkdownanimation");

                break;
            case "fiveh1An":
                h1.css("opacity","1");
                break;
            case "fiveh2An":
                h2.css("opacity","1");
                fly.addClass("fivegifAn");
                
                fivediv.addClass("fivedivAn");
                break;
            case "fivedivAn":
                fivediv.css("opacity","1");
                //单张图片的宽度
                width = $("#fivediv").width();
                totalIndex = $("#fivediv>ul>li").length;
                 //设置轮播图片的横向排列
                $("#fivediv>ul>li").each(function(index){
                    $(this).css("left",index*width+"px");
                    //导航节点
                    $("#fivediv-nav").append("<span>"+(index+1)+"</span>")
                });
                //默认选中第一个
                $("#fivediv-nav>span").eq(0).addClass("active");

                //形成环路
                //复制一份第一张
                var firstChild = $("#fivediv>ul>li").eq(0).clone();
                //添加到列表最末
                $("#fivediv>ul").append(firstChild);
                //显示在序列最右侧
                firstChild.css("left",totalIndex*width+"px"); 

                timer = setTimeout(move,duration);

                break;
            // case "fiveimg1An":
            //     img1.css("opacity","1");
            //     img2.css("opacity","1");
            //     img3.css("opacity","1");
            //     img4.css("opacity","1");  
            //     break;
            case "fiveflybirde fivegifAn":
                fly.css("opacity","1");
                break;
            
        }
    });

    function move(){
    
        // alert(curIndex); 
           curIndex ++;
           if(curIndex>totalIndex){
               //播放第二张
               curIndex=1;
               //序列重置到原点
               $("#fivediv>ul").css("left","0px");
           }
           //清除所有导航节点的active类
           for(var i=0;i<totalIndex;i++){
               $("#fivediv-nav>span").eq(i).removeClass("active");
           }
           if(curIndex==totalIndex){
               //索引值等于图片总数，显示的正是第一张图片的副本
               $("#fivediv-nav>span").eq(0).addClass("active");
              
           }else{
               //当前导航节点添加active类
               $("#fivediv-nav>span").eq(curIndex).addClass("active");
          
               
           }
           $("#fivediv>ul").animate({left:width*curIndex*-1+"px"},speed);
           //设置延迟一定时间后执行move函数，延迟时间为动画时长加上每张图片持续显示时间
           timer = setTimeout(move,duration+speed);
   }
   
   $("#fivediv-nav>span").each(function(index){
       //存储每个节点的索引值
       $(this).attr("index",index);
       $(this).click(function(){
           //刷新当前显示图片的索引值
           curIndex = $(this).attr("index")-1;
           //清除计时
           clearTimeout(timer);
           //重新执行move函数以显示该图片
           move();
       });
   });


    linkup.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(4);
        navclass(4);
    });

    linkdown.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(6);
        navclass(6);
    });

 
});

