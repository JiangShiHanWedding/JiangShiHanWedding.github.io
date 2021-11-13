$(document).ready(function(){
    var content = $(".content").eq(3);

    var linkup = $(".linkup").eq(3);
    var linkdown = $(".linkdown").eq(3);

    var newword = $("#bwordnew");
    var brideword = $("#wordbride");

    var img1 = $("#bridepic1");
    var img2 = $("#bridepic2");

    if($(window).height()<670&& $(window).width()>600){
        //alert(1);
        img2.css("margin-top","0%");
        $(".bridepic:eq(0)").css("height","50%");
    }

    var h2div = $(".brideec:eq(0)");
    var h2 = h2div.children("h2");
    // var h3 = h2div.children("h3");

    var h4 = content.children("h4");

    var nouseico = $(".downiconouse").eq(3);

    // 动画开始
    content.bind("animationstart",function(e){
        var name = e.target.className;
        switch(name){
            case "content four":
                navclass(4);
                
                nouseico.addClass("nouseAn");
                nouseico.addClass("nouseAn");
                newword.removeClass("fourh1xAn");
                newword.css("opacity","0");

                brideword.removeClass("fourh1nAn");
                brideword.css("opacity","0");

                h2.removeClass("fourh2An");
                h2.css("opacity","0");
        
                img1.removeClass("threeimg1");
                img1.css("opacity","0");
        
                img2.removeClass("threeimg2");
                img2.css("opacity","0");
        
                h4.removeClass("fourh4An");
                h4.css("opacity","0");

                linkup.css("opacity","0");
                linkup.removeClass("linkupanimation");

                linkdown.css("opacity","0");
                linkdown.removeClass("linkdownanimation");

                break;
            case "fourh1xAn":
                break;
        }
    });
    // 监听动画结束
    content.bind("animationend",function(e){
        
        var name = e.target.className;
        switch(name){
            case "content four":
                newword.addClass("fourh1xAn");
                brideword.addClass("fourh1nAn");
                break;
            case "fourh1xAn":
                newword.css("opacity","1");
                brideword.css("opacity","1");

                linkup.addClass("linkupanimation");
                linkdown.addClass("linkdownanimation");

                img1.addClass("threeimg1");
                img2.addClass("threeimg2");
                
                break;
            case "threeimg1":
                img1.css("opacity","1");
                img2.css("opacity","1");

                h2.addClass("fourh2An");
                break;
            case "fourh2An":
                h2.css("opacity","1");
                h4.addClass("fourh4An");
                break;
            case "fourh4An":
                h4.css("opacity","1");
                break;
        }
    });

    //第3页选中
    // navclass(4);


    linkup.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(3);
        navclass(3);
    });

    linkdown.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(5);

        navclass(5);
    });

});