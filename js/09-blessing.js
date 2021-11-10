$(document).ready(function(){
    var content = $(".content").eq(8);

    var linkup = $(".linkup").eq(8);
    var linkdown = $(".linkdown").eq(8);
    var nouseico = $(".downiconouse").eq(8);
    
    var danmu = $(".danmu:eq(0)");
    var contentHeight=0;

    // 动画开始
    content.bind("animationstart",function(e){
        var name = e.target.className;
        
        switch(name){
            case "content nine":
                //获取弹幕 div高度
                contentHeight= danmu.height();

                //清除原有弹幕
                danmu.children().each(function(index,e){
                    $(this).remove();
                });

                navclass(9);
                //h1.addClass("h1animation");
                nouseico.addClass("nouseAn");

                linkup.css("opacity","0");
                linkup.removeClass("linkupanimation");

                linkdown.css("opacity","0");
                linkdown.removeClass("linkdownanimation");

                break;
            case "h1animation":
                break;
        }
    });
    // 监听动画结束
    content.bind("animationend",function(e){  
        var name = e.target.className;
        // console.log(e);
        //alert(name);
        switch(name){
            case "content nine":
                linkup.addClass("linkupanimation");
                linkdown.addClass("linkdownanimation");
     
                if(contentHeight!=0){
                    danmufun();
                }

                break;
            
        }
    }); 

    //console.log(danmu.css("display"));
    
    danmu.bind("animationstart",function(e){ 
        var str = e.target.id;
        // alert(str+" start");
        // console.log(str+" start");
    });

    danmu.bind("animationend",function(e){ 

        var str = e.target.id;
        $("#"+str).remove();

        // console.log(str+" end");
    });

    function danmufun(){
        var eleHeg = 50;
        //屏幕宽度
        var wid = $(window).width();
        //alert(wid);
        if(wid==520){
            eleHeg=80;
        }
        else if(wid==1024){
            eleHeg=180;
        }else{
            eleHeg = 100;
        }
        var num = Math.floor(contentHeight/eleHeg);
        console.log("管道数 "+num);
        // alert(num);
        //得到弹幕管道值
        var bufferArr = [];

         //模拟数据
        var userinfo = [
            {"uname":"WANG","telephone":"12345678901","blessing":"相爱年年岁岁，相知岁岁年年","time":"2021-11-09"},
            {"uname":"WANG","telephone":"12345678901","blessing":"恩爱甜蜜，美满常驻，幸福萦绕","time":"2021-10-09"},
            {"uname":"WANG","telephone":"13445678901","blessing":"真心祝愿君新婚快乐","time":"2021-10-09"},
            {"uname":"WANG","telephone":"12345678901","blessing":"祝福你们，从平凡的温馨到白首的不离，数着快乐静看子孙满堂","time":"2021-10-09"},
            {"uname":"","telephone":"","blessing":"","time":""}
        ];
        
        //后台请求弹幕
        $.ajax({
            type:"post",
            url:"https://www/getjson",
            data: "",
            async:false,
            success:function(meg){
                //console.log(meg);
                if(meg.success){
                    bufferArr = meg.data.userinfo;
                    console.log("后台获取数据 ",bufferArr);
                }else{
                    var len = userinfo.length;
                    for(var i=0;i<len-1;i++){
                        bufferArr[i]=userinfo[i];
                    }
                }
            },
            error:function(meg){
                console.log("ajax错误");
                console.log(meg.statusText);
                var len = userinfo.length;
                 for(var i=0;i<len-1;i++){
                       bufferArr[i]=userinfo[i];
                  }
                 console.log("ajax中数据",bufferArr);
            }
        });

        console.log("获取数据",bufferArr);
        var len = bufferArr.length;

        var buffer=new Array(num);
        for(var i=0;i<num;i++){
            buffer[i]=new Array();
        }
   
        //初始化管道 - 二维数组
        //最新弹幕为第一管道第一个
        buffer[0].push(bufferArr[0]);
        //剩余的
        for(var i=1;i<len-1;i++){
            var index = Math.floor(Math.random()*num);
            // console.log(index+" "+num);
            buffer[index].push(bufferArr[i]);
        }
        buffer[num-1].push(bufferArr[len-1]);
        console.log(buffer);

        var previousEle=new Array(num);

        for(var i=0;i<num;i++){
            previousEle[i]=new Array();

            var rightNum = 50;

            for(var j=0;j<buffer[i].length;j++){
                var blessing = buffer[i][j].blessing;
                // alert(blessing);
                var uname = buffer[i][j].uname ;
                //拼元素
                var divstr = "<div class=\"barragediv\" id=\"danmu"+i+"-"+j+"\"><h5>";
                divstr+=buffer[i][j].time+"</h5>";
                if(uname==""){
                    divstr+="<span>"+blessing+"</span></div>";
                }
                else{ 
                    divstr+="<i class=\"far fa-user-circle\"></i><span>"+uname+ " - "+blessing+"</span></div>";
                }
        
               //添加元素
                danmu.append(divstr);
                
                var ele = $("#danmu"+i+"-"+j);
                if($(window).height()<670&&$(window).width()>600){
                    ele.css("height","12%");
                }

                previousEle[i].push(ele);

                // console.log($(".barragediv:eq("+(index)+")"));
                // alert(ele.height());
                rightNum+=ele.width();

                if(j!=0){
                    rightNum+=previousEle[i][j-1].width()+ele.width();
                }
                // rightNum=0;
                //拼动画函数
                //拼写动画帧函数，记得每个ani要进行区分，宽度从自己的负宽度移动一整个屏幕的距离    
                var keyframes = "@keyframes danmu"+i+"-"+j+"key{"+
                "0%{right:"+-rightNum+"px}"+"100%{right:"+wid+"px}}";
                var webkitkeyframes = "@-webkit-keyframes danmu"+i+"-"+j+"key{"+
                "0%{right:"+-rightNum+"px}"+"100%{right:"+wid+"px}}";

                 //添加keyframes到html
                 $("<style>").attr("type","text/css").html(keyframes).appendTo($("head"));
                 $("<style>").attr("type","text/css").html(webkitkeyframes).appendTo($("head"));
                
                // console.log("弹幕块元素 "+divstr);
                // console.log("弹幕动画函数 "+keyframes);
                
                ele.css({"top":i*eleHeg+eleHeg/2+"px","right":-rightNum+"px"});
                ele.css("opacity",Math.random()*0.4+0.6);

                //随机动画速度
                var anlist = [7,9,11,15,17];
                var antime = Math.floor(Math.random()*5);

                //添加动画
                var anima = "";
                if(len<40){
                    anima = "danmu"+i+"-"+j+"key "+anlist[antime]+"s linear "+j*5+"s infinite";
                }else{
                    anima = "danmu"+i+"-"+j+"key "+anlist[antime]+"s linear "+j*5+"s";
                }
                // console.log(anima);

                ele.css("animation",anima);
                ele.css("-webkit-animation",anima);
                ele.css("-moz-animation",anima);
                ele.css(" -ms-zoom-animation",anima);
                ele.css("-o-animation",anima);

                if(blessing==null|| blessing==""){
                    ele.remove();
                }

                // ele.click(function(){
                //     ele.css("animation-play-state","paused");
                // });
                

                // alert(123);
                // console.log(firstSpeed);
        
            }
        }
    }
    // window.setInterval(danmufun,20*1000);



    //第9页选中
    // navclass(9);
    linkup.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(8);
        navclass(8);
    });

    linkdown.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(10);
        navclass(-1);
    });

    
});

    
