$(document).ready(function(){
    var content = $(".content").eq(9);

    var linkup = $(".linkup").eq(9);
    var linkdown = $(".linkdown").eq(9);
    var nouseico = $(".downiconouse").eq(9);
    
    var h1 = content.children("h1");
    var spanele = content.children("span");
    var textarea = content.children("textarea");
    var alink = $("#tensubmit");

    if($(window).height()<670&& $(window).width()>600){
        h1.css("margin-top","0%");
        h1.css("font-size","3em");
        spanele.css("font-size","1.5em");
        textarea.css("height","40%");
    }

    // 动画开始
    content.bind("animationstart",function(e){
        var name = e.target.className;
        
        switch(name){
            case "content ten":

                navclass(-1);

                h1.removeClass("tenh1An");
                h1.css("opacity","0");

                // console.log(spanele.text());
                spanele.text("当前设备分辨率为 "+$(window).width()+"x"+$(window).height());
                spanele.removeClass("tenspanAn");
                spanele.css("opacity","0");

                textarea.removeClass("tentextAn");
                textarea.css("opacity","0");
                
                alink.removeClass("tenaAn");
                alink.css("opacity","0");

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
            case "content ten":
                linkup.addClass("linkupanimation");
                linkdown.addClass("linkdownanimation");
    
                h1.addClass("tenh1An");
                break;
            case "tenh1An":
                h1.css("opacity","1");

                spanele.addClass("tenspanAn");
                break;
            case "tenspanAn":
                spanele.css("opacity","1");

                textarea.addClass("tentextAn");
                break;
            case "tentextAn":
                textarea.css("opacity","1");
                
                alink.addClass("tenaAn");
                break;
            case "tenaAn":
                alink.css("opacity","1");
                break;
            
        }
    }); 


     alink.click(function(e){
        e.preventDefault();

        // //转换为对象
        var problemInfo = {};
        problemInfo.radtio = $(window).width()+"x"+$(window).height();
        problemInfo.info = textarea.val();

        // alert(textarea.val());
        if(textarea.val()==""){
            alert("未输入任何数据");
        }else{
            var content = JSON.stringify(problemInfo);
            //后台请求
            $.ajax({
                type:"post",
                url:"http://47.96.43.213:9990/problem",
                dateType:"json",
                data: content,
                //消息请求类型
                contentType:"application/json;charset=UTF-8",
                success:function(meg){
                    //console.log(meg);
                    if(meg.success){
                        textarea.val("");
                        alert(meg.message);
                    }else if(meg.code==10000){
                        alert(meg.message);
                    }
                },
                error:function(meg){
                    console.log(meg.statusText);
                    textarea.val("");
                    alert("服务器已停止运行，无法保存数据");
                    updownFun(1);
                }
            });   
        }

        
     });
             

    //第10页选中
    // navclass(10);
    linkup.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(9);
        navclass(9);
    });

    linkdown.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(1);
        navclass(1);
    });

    
});

    
