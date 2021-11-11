$(document).ready(function(){
    // 第一页内容背景
    var content = $(".content").eq(0);
    var h1 = content.children("h1");
    var h2 = content.children("h2");
    var h3 = content.children("h3");
    var h4 = content.children("h4");
    var h5 = content.children("h5");
    var h6 = content.children("h6");
    var datediv = $(".dateinfo");
    var gifimg = $("#onedancegif");

    var linkup = $(".linkup").eq(0);
    var linkdown = $(".linkdown").eq(0);
    var nouseico = $(".downiconouse").eq(0);
  
    var navele = $("#nav");

    if($(window).height()<670&& $(window).width()>600){
        h1.css("margin-top","0%");
        h2.css("font-size","4em");
        h3.css("font-size","4em");
        h3.css("font-size","2em");
        h3.css("margin-top","0%");
        h4.css("margin-top","0%");
        datediv.css("margin-top","0%");
    }

    // 动画开始
    content.bind("animationstart",function(e){
        var name = e.target.className;
        // alert(e.target.className);
        switch(name){
            case "content one":
                //第1页选中
                navclass(1);

                //h1.addClass("h1animation");
                nouseico.addClass("nouseAn");

                h1.removeClass("h1animation");
                h1.css("opacity","0");

                h2.removeClass("h2rotateAn");
                h2.removeClass("h2animation");
                h2.css("opacity","0");
        
                h3.removeClass("h3animation");
                h3.css("opacity","0");
        
                h4.removeClass("h4animation");
                h4.css("opacity","0");
        
                h5.removeClass("h5animation");
                h5.css("opacity","0");
        
                h6.removeClass("h6animation");
                h6.css("opacity","0");
        
                datediv.removeClass("dateanimation");
                datediv.css("opacity","0");

                gifimg.removeClass("onegif");
                gifimg.css("opacity","0");

                // 导航栏
                // navele.removeClass("navAn");
                // navele.css("opacity","0");

                linkup.css("opacity","0");
                // linkup.removeClass("linkupanimation");

                linkdown.css("opacity","0");
                linkdown.removeClass("linkdownanimation");

                break;
            case "h1animation":
                //alert("h1animation-start");
                break;
            case "h2animation":
                //alert("h2animation-start");
                break;
            case "h3animation":
                //alert("h3animation-start");
                break;
            case "h4animation":
                //alert("h4animation-start");
                datediv.addClass("dateanimation");
                break;
            }
    });
    // 监听动画结束
    content.bind("animationend",function(e){
        //console.log(e);
        // if(e.target.className === 'content'){
        //     h1.addClass("h1animation"); 
        // }
        var name = e.target.className;
        switch(name){
            case "content one":
                h1.addClass("h1animation");

                // navele.addClass("navAn");

                break;
            case "h1animation":
                //alert("h1animation-end");
                h2.addClass("h2animation");
                // linkup.addClass("linkupanimation");
                linkdown.addClass("linkdownanimation");

                // navele.css("opacity","1");
                break;
            case "h2animation":
                //alert("h2Animation-end");

                h2.removeClass("h2animation");

                h3.addClass("h3animation");
                h4.addClass("h4animation");

                h2.addClass("h2rotateAn");
                
                break;
            case "h3animation":
                h3.css("opacity","1");
                break;
            case "h4animation":
                h4.css("opacity","1");
                datediv.css("opacity","1");
                h5.addClass("h5animation");
                break;
            case "h5animation":
                h5.css("opacity","1");
                var wid = $(window).width();
                var heg = $(window).height();
                // console.log(wid+" "+heg+" ");
                // console.log(heg==812&&wid==375);
                if(heg==812&&wid==375){
                    gifimg.css("opacity","1");
                    gifimg.css("display","block");
                    gifimg.addClass("onegif");
                }
                break;
            
        }
    });


    // linkup.click(function(e){
    //     //alert(e);
    //     e.preventDefault();

    //     updownFun(9);
    // });

    linkdown.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(2);

        navclass(2);

    });

});
