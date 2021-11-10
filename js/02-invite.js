$(document).ready(function(){
    var content = $(".content").eq(1);

    var h1 = content.children("h1");
    var h3 = content.children("h3");
    var pic1 = $("#imgbride");
    var pic2 = $("#imgroom");
    var female = $("#femaletwo");
    var male = $("#maletwo");
    var fico = $("#twofico");
    var mico = $("#twomico");
    var worddiv = $(".twoword");
    var h5 = content.children("h5");

    var linkup = $(".linkup").eq(1);
    var linkdown = $(".linkdown").eq(1);
  
    var nouseico = $(".downiconouse").eq(1);

    var navele = $("#nav");
    
    if($(window).height()<610){
        female.css("font-size","2em");
        male.css("font-size","2em");
        pic1.css("margin-top","0%");
        $(".weddingpic:eq(0)").css("height","45%");
    }

    // var nav2 = $("#nav2");
    // console.log(nav2);
    
    content.bind("animationstart",function(e){
        
        var name = e.target.className;
        // console.log(name+"--"+navele.css("opacity"));
        // alert(name);
        switch(name){
            case "content two":
                // nav2.addClass("selecting");
                //第2页选中
                navclass(2);
                nouseico.addClass("nouseAn");

                h1.removeClass("twoh1animation");
                h1.css("opacity","0");

                h3.removeClass("twoh3animation");
                h3.css("opacity","0");

                pic1.removeClass("twopic1animation");
                pic1.css("opacity","0");

                pic2.removeClass("twopic2animation");
                pic2.css("opacity","0");
                // female.css("opacity","0");
                // male.css("opacity","0");
                // fico.css("opacity","0");
                // mico.css("opacity","0");

                fico.removeClass("twouserfAn");
                mico.removeClass("twousermAn");
                worddiv.css("opacity","0");

                h5.removeClass("twoh5animation");
                h5.css("opacity","0");

                // 导航栏
                // navele.removeClass("navAn");
                // navele.css("opacity","0");

                linkup.css("opacity","0");
                linkup.removeClass("linkupanimation");

                linkdown.css("opacity","0");
                linkdown.removeClass("linkdownanimation");

                break;
            case "twoh3animation":
                pic1.addClass("twopic1animation");
                pic2.addClass("twopic2animation");
                break;
            case "twopic1animation":
                worddiv.addClass("twowordAn");
                break;
        }
        
    });

    content.bind("animationend",function(e){
        var name = e.target.className;
        //alert(name);
        // console.log(name+" - end - "+navele.css("opacity"));
        switch(name){
           
            case "content two":
                h1.addClass("twoh1animation");
                navele.addClass("navAn");
                break;
            case "twoh1animation":
                h3.addClass("twoh3animation");
                linkup.addClass("linkupanimation");
                linkdown.addClass("linkdownanimation");

                // navele.css("opacity","1");

                break;
            case "twoh3animation":
                h3.css("opacity","1");
                
                break;
            case "twopic1animation":
                //alert("pic1end");
                pic1.css("opacity","1");
                pic2.css("opacity","1");
                worddiv.css("opacity","1");

                fico.addClass("twouserfAn");
                mico.addClass("twousermAn");

                h5.addClass("twoh5animation");
                break;
            case "twoh5animation":
                h5.css("opacity","1");
                break;
            
            
        }
    });

    //第2页选中
    // navclass(2);

    linkup.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(1);

        navclass(1);
        
    });

    linkdown.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(3);

        navclass(3);
    });
});