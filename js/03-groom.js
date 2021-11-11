$(document).ready(function(){
    var content = $(".content").eq(2);

    var linkup = $(".linkup").eq(2);
    var linkdown = $(".linkdown").eq(2);

    var nouseico = $(".downiconouse").eq(2);

    var newword = $("#wordnew");
    var langword = $("#wordlang");
    var img1 = $("#groompic1");
    var img2 = $("#groompic2");

    if($(window).height()<670&& $(window).width()>600){
        img1.css("margin-top","0%");
        $(".groompic:eq(0)").css("height","50%");
    }

    var h2div = $(".groomec:eq(0)");
    var h2 = h2div.children("h2");
    var h3 = h2div.children("h3");

    var h4 = content.children("h4");
    var userimg = $(".groompeople:eq(0)").children("img");

    var navele = $("#nav");
    // $("#nav").css("opacity","0");

    // 动画开始
    content.bind("animationstart",function(e){
        var name = e.target.className;
        switch(name){
            case "content three":
                //第3页选中
                navclass(3);

                nouseico.addClass("nouseAn");

                newword.removeClass("threeh1new");
                newword.css("opacity","0");

                langword.removeClass("threeh1lang");
                langword.css("opacity","0");
        
                img1.removeClass("threeimg1");
                img1.css("opacity","0");
        
                img2.removeClass("threeimg2");
                img2.css("opacity","0");
        
                h2.removeClass("threegroominf");
                h2.removeClass("threegroomWAn");
                h2.css("opacity","0");
        
                h3.removeClass("threerobotnew");
                h3.css("opacity","0");
        
                h4.removeClass("threeh4an");
                h4.css("opacity","0");

                //userimg.css("opacity","0");
                userimg.removeClass("threeuserpic");

                // 导航栏
                // navele.removeClass("navAn");
                // navele.css("opacity","0");

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
        switch(name){
            case "content three":
                newword.addClass("threeh1new");
                langword.addClass("threeh1lang");

                // navele.addClass("navAn");

                break;
            case "threeh1new":
                newword.css("opacity","1");
                langword.css("opacity","1");

                navele.css("opacity","1");

                linkup.addClass("linkupanimation");
                linkdown.addClass("linkdownanimation");

                img1.addClass("threeimg1");
                img2.addClass("threeimg2");
                break;
            case "threeimg1": 
                img1.css("opacity","1");
                img2.css("opacity","1");

                h2.addClass("threegroomWAn"); 
                h3.addClass("threerobotnew"); 
            case "threegroomWAn":
                h2.css("opacity","1");

                // h2.addClass("threegroominf");

                h4.addClass("threeh4an");
                break;
            case "threerobotnew":
                h3.css("opacity","1");
                
                break;
            case "threeh4an":
                h4.css("opacity","1");
                
                userimg.addClass("threeuserpic");
                break;
            case "threeuserpic":
                userimg.css("opacity","1");
                break;
            
        }
    });

    
    
    linkup.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(2);

        navclass(2);
    });

    linkdown.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(4);

        navclass(4);
    });
});
