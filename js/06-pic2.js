$(document).ready(function(){
    var content = $(".content").eq(5);

    var linkup = $(".linkup").eq(5);
    var linkdown = $(".linkdown").eq(5);
    var nouseico = $(".downiconouse").eq(5);
    
    var spanword = $("#sixTitle");

    var h2 = content.children("h2");

    var img1 = $("#sixThreeimg1");
    var img2 = $("#sixThreeimg2");
    var img3 = $("#sixThreeimg3");
    var img4 = $("#sixThreeimg4");
    var img5 = $("#sixThreeimg5");

    var imgdiv = $(".sixThreeimg:eq(0)");
    if($(window).height()<670&& $(window).width()>600){
        imgdiv.css("height","60%");
        imgdiv.css("padding-top","0%");
    }

    var sixheart = $("#sixheart");

    // 动画开始
    content.bind("animationstart",function(e){
        var name = e.target.className;
        
        switch(name){
            case "content six":
                navclass(6);

                //h1.addClass("h1animation");
                nouseico.addClass("nouseAn");

                h2.removeClass("sixh2An");
                h2.css("opacity","0");

                spanword.css("opacity","0");
                spanword.removeClass("sixspaninf");
                // spanword.children().each(function(index,e){
                //     $(this).removeClass("sixspanAn");
                //     $(this).css("opacity","0");
                // });

                img1.removeClass("siximg1An");
                img1.css("opacity","0");

                img2.removeClass("siximg2An");
                img2.css("opacity","0");

                img3.removeClass("siximg3An");
                img3.css("opacity","0");

                img4.removeClass("siximg4An");
                img4.css("opacity","0");

                img5.removeClass("siximg5An");
                img5.css("opacity","0");

                sixheart.css("opacity","0");
                sixheart.removeClass("sixheartAn");
                sixheart.removeClass("sixheartinf");

                linkup.css("opacity","0");
                linkup.removeClass("linkupanimation");

                linkdown.css("opacity","0");
                linkdown.removeClass("linkdownanimation");

                break;
            //case "siximg2An":
                //sixheart.addClass("sixheartAn");
                //break;
        }
    });
    // 监听动画结束
    content.bind("animationend",function(e){  
        var name = e.target.className;
        // console.log(e);
        //alert(name);
        switch(name){
            case "content six":
                linkup.addClass("linkupanimation");
                linkdown.addClass("linkdownanimation");

                img2.addClass("siximg2An");

                //h2.addClass("sixh2An");
                spanword.addClass("sixspaninf");
                h2.addClass("sixh2An");

                // 每个字动画实现动画效果
                //spanword.css("opacity","1");
                // console.log(spanword.children());
                // spanword.children().each(function(index,e){
                //     // console.log($(this));
                //     var speed = index*0.1;
                //     $(this).css("animation-delay",speed+"s");
                //     $(this).addClass("sixspanAn");
                //     $(this).addClass("sixspan"+index);
                // });
                break;
            // case "sixspanAn sixspan6":
            //     h2.addClass("sixh2An");
            //     spanword.addClass("sixspaninf");

            //     spanword.children().each(function(index,e){
            //         $(this).removeClass("sixspanAn");
            //         $(this).removeClass("sixspan"+index);
            //         $(this).addClass("sixspaninf");
                    
            //     });
            //     break;
            case "siximg2An":
                img1.addClass("siximg1An");
                img3.addClass("siximg3An");

                img2.css("opacity","1");
                break;
            case "siximg1An": 
                img4.addClass("siximg4An");
                img5.addClass("siximg5An");

                img1.css("opacity","1");
                break;
            case "siximg3An":
                img3.css("opacity","1");
                // sixheart.addClass("sixheartAn");
                break;  
            case "siximg4An":
                img4.css("opacity","1");
                break;  
            case "siximg5An":
                // alert(name);
                
                img5.css("opacity","1");
                break; 
            case "fas fa-heart sixheartAn":
                //alert(name);
                sixheart.css("opacity","1");

                sixheart.addClass("sixheartinf");

                
                break;  
            case "sixh2An":
                h2.css("opacity","1");
                sixheart.addClass("sixheartAn");
                break;
            
        }
    });

    //第6页选中
    // navclass(6);


    linkup.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(5);
        navclass(5);
    });

    linkdown.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(7);
        navclass(7);
    });
});
