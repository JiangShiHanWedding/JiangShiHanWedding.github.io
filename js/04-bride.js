$(document).ready(function(){
    var content = $(".content").eq(3);

    var linkup = $(".linkup").eq(3);
    var linkdown = $(".linkdown").eq(3);

    var newword = $("#bwordnew");
    var brideword = $("#wordbride");

    var img1 = $("#bridepic1");
    // var img2 = $("#bridepic2");

    var bridediv=$("#bridediv");
    var divh1 = bridediv.children("h1");
    var divh2 = bridediv.children("h2");
    var divh3 = bridediv.children("h3");
    var divh4 = bridediv.children("h4");
    var divh5 = bridediv.children("h5");


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
        
                // img2.removeClass("threeimg2");
                // img2.css("opacity","0");
                divh1.removeClass("groomdivh1An");
                divh1.css("opacity","0");
                divh2.removeClass("groomdivh2An");
                divh2.css("opacity","0");
                divh3.removeClass("groomdivh2An");
                divh3.css("opacity","0");
                divh4.removeClass("groomdivh2An");
                divh4.css("opacity","0");
                divh5.removeClass("groomdivh5An");
                divh5.css("opacity","0");
        
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
                // img2.addClass("threeimg2");
                
                break;
            case "threeimg1":
                img1.css("opacity","1");
                // img2.css("opacity","1");
                // alert(divh1);
                divh1.addClass("groomdivh1An");
                divh2.addClass("groomdivh2An");
                divh3.addClass("groomdivh2An");
                divh4.addClass("groomdivh2An");
                divh5.addClass("groomdivh5An");
                break;
            case "groomdivh1An":
                divh1.css("opacity","1");
                break;
            case "groomdivh2An":
                divh2.css("opacity","1");
                divh3.css("opacity","1");
                divh4.css("opacity","1");
                break;

            case "groomdivh5An":
                divh5.css("opacity","1");

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