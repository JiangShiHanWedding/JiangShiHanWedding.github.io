$(document).ready(function(){
    var content = $(".content").eq(10);

    var linkup = $(".linkup").eq(10);
    var linkdown = $(".linkdown").eq(10);
    var nouseico = $(".downiconouse").eq(10);

    var wall = $(".wall:eq(0)");
    var walltimer;
    var duration = 7*1000;

    var h1=content.children("h1");
    var h2=content.children("h2");

    // 动画开始
    content.bind("animationstart",function(e){
        var name = e.target.className;
        
        switch(name){
            case "content eleven":
                navclass(11);

               //清除原有弹幕
                wall.children().each(function(index,e){
                    $(this).remove();
                });

                nouseico.addClass("nouseAn");

                linkup.css("opacity","0");
                linkup.removeClass("linkupanimation");

                linkdown.css("opacity","0");
                linkdown.removeClass("linkdownanimation");

                h1.removeClass("elevenh1An");
                h1.css("opacity","0");

                h2.removeClass("elevenh2An");
                h2.css("opacity","0");

                break;
            case "h1animation":
                break;
        }
    });
    // 监听动画结束
    content.bind("animationend",function(e){  
        var name = e.target.className;
        // console.log(e);
        // alert(name);
        switch(name){
            case "content eleven":
                linkup.addClass("linkupanimation");
                linkdown.addClass("linkdownanimation");
                h1.addClass("elevenh1An");

                upload();
                
                break; 
            case "elevenh1An":
                
                h1.css("opacity","1");
                h2.addClass("elevenh2An");
                break;
            case "elevenh2An":          
                h2.css("opacity","1");
                
                break;    
        }
    });

    //得到弹幕
    var bufferArr = [];

    //模拟数据
    var userinfo = [
        {"uname":"","telephone":"12345678901","blessing":"相爱年年岁岁，相知岁岁年年","time":"2021-11-09"},
        {"uname":"WANG","telephone":"12345678901","blessing":"恩爱甜蜜，美满常驻，幸福萦绕","time":"2021-10-09"},
        {"uname":"WANG","telephone":"13445678901","blessing":"新婚快乐","time":"2021-10-09"},
        {"uname":"WANG","telephone":"13445678901","blessing":"真心祝愿君新婚快乐","time":"2021-10-09"},
        {"uname":"WANG","telephone":"13445678901","blessing":"祝福新婚快乐","time":"2021-10-09"},
        {"uname":"","telephone":"","blessing":"","time":""}
    ];

    //弹幕个数
    var num = 9;
    
    function upload(){
        //清除原有弹幕
        wall.children().each(function(index,e){
            $(this).remove();
        });

        //距离
        var divheight = 0;
        //后台请求弹幕
        $.ajax({
            type:"post",
            url:"https://www.slikeglue.com/danmu/wedding/getlimit/"+num,
            data: "",
            async:false,
            success:function(meg){
                //console.log(meg);
                if(meg.success){
                    bufferArr = meg.data.userinfo;
                    // alert("后台获取数据 ",bufferArr);
                }else{
                    var len = userinfo.length;
                    for(var i=0;i<len-1;i++){
                        bufferArr[i]=userinfo[i];
                    }
                }
            },
            error:function(meg){
                console.log(meg.statusText);
                var len = userinfo.length;
                for(var i=0;i<len-1;i++){
                    bufferArr[i]=userinfo[i];
                }
            }
        });

        // console.log(bufferArr);
        var len = bufferArr.length;
        var previousEle=[];

        for(var i= 0;i<num;i++){
            
            var blessing = bufferArr[i].blessing;
                // alert(blessing);
            var uname = bufferArr[i].uname ;
            
            //拼元素
            var divstr = "<div class=\"walldiv\" id=\"wall"+i+"\">";
            if(uname==""){
                divstr+="<h4>"+blessing+"</h4>";
            }
            else{ 
                // divstr+="<i class=\"far fa-user-circle\"></i><span>"+uname+ " - "+blessing+"</span></div>";
                divstr+="<h3>"+uname+ "</h3><h4>"+blessing+"</h4>";
            }
            divstr+="<h5>"+bufferArr[i].time+"</h5></div>";

            // console.log(divstr);
            
            //添加元素
            wall.append(divstr);
            var ele = $("#wall"+i);
            
            previousEle[i]=ele;

            var prevheg = 50;
            //console.log(ele.height());
            if(i!=0){
                prevheg = previousEle[i-1].height()*1.3;
                divheight+=prevheg;
            }
            if(divheight>wall.height()-prevheg){
                ele.remove();
                return;
                // alert("超过了");
            }
            ele.css("top",divheight+"px");
            // img.css("top",divheight+"px");

            //拼动画函数
            //拼写动画帧函数，记得每个ani要进行区分，宽度从自己的负宽度移动一整个屏幕的距离    
            var keyframes = "@keyframes wall"+i+"key{"+
            "0%{transform: translateY("+1000+"px)}"+"100%{transform:translateY(0px)}}";
            var webkitkeyframes = "@-webkit-keyframes wall"+i+"key{"+
            "0%{-webkit-transform:translateY("+1000+"px)}"+"100%{-webkit-transform:translateY(0px)}}";

            //添加keyframes到html
            $("<style>").attr("type","text/css").html(keyframes).appendTo($("head"));
            $("<style>").attr("type","text/css").html(webkitkeyframes).appendTo($("head"));
            
            //添加动画
            var anima = "wall"+i+"key "+1+"s linear";
            
            // console.log(anima);

            ele.css("animation",anima);
            ele.css("-webkit-animation",anima);
            ele.css("-moz-animation",anima);
            ele.css(" -ms-zoom-animation",anima);
            ele.css("-o-animation",anima);

            if(blessing==null|| blessing==""){
                ele.remove();
            }

        }
        
    }
     
    
      //书签
      var navurl = $("#nav").children("ul");
      navurl.children().each(function(index,e){
          $(this).click(function(event){
              var url = event.target.hash;
              if(url!="#page11"){
                   //清除原有弹幕
                    wall.children().each(function(index,e){
                        $(this).remove();
                    });
                    clearInterval(walltimer);   
               }else{
                    walltimer = setInterval(upload,duration);  
               }  
              
          });
      });

      //按钮
      $(".linkup").children().each(function(index,e){
          $(this).click(function(event){
            if(index==9){
                // alert("up"+11);
                walltimer = setInterval(upload,duration); 
            }else{
                clearInterval(walltimer);  
            }
          });
        
      });
      
      $(".linkdown").children().each(function(index,e){
        $(this).click(function(event){
            //alert(index);
            if(index==8){
                // alert("down"+11); 
                walltimer = setInterval(upload,duration); 
            }else{
                
                clearInterval(walltimer);  
                // alert(walltimer);
            }
        });   
      });


    linkup.click(function(e){
        //alert(e);
        e.preventDefault();


        updownFun(9);
        navclass(9);
        
    });

    linkdown.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(10);
        navclass(10);
        
    });

    
    
});
//alert($("#page11").css("display")!="none");
if($("#page11").css("display")!="none"){
    walltimer = setInterval(upload,duration);
} 