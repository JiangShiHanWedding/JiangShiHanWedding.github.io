    // navele = $("#nav");

    // 第一张背景图动画
    //监听animationend 实现多个动画依次执行
    $(".container .one").bind("animationstart",function(){
        //alert("animation -start");
        //h1.addClass("h1animation");

        // 导航栏
        // $("#nav").removeClass("navAn");
        // $("#nav").css("opacity","0");

    });

    //书签
    var navurl = $("#nav").children("ul");
    navurl.children().each(function(index,e){
        $(this).click(function(event){
            // console.log(event.target.hash);
            // console.log(event);
            // $("#nav").css("opacity","0");
            var url = event.target.hash;
            for(var i = 1; i< 11;i++){
                if(url=="#page"+i){
                    $(url).css("display","block");
                    $("#nav"+i).addClass("selecting");
                    
                }
                else{
                    $("#page"+i).css("display","none");
                    $("#nav"+i).removeClass("selecting");
                }
            }
        });
    });

    var weddingmp3 = document.getElementById("weddingmp3");
    //chrome 音频无法自动播放
    // $(window).click(function(){
    //     weddingmp3.play();     
    // });
    //音乐信息
    // weddingmp3.addEventListener("timeupdate", showProgress); 
    // function showProgress(){
    //     var progress = weddingmp3.currentTime / weddingmp3.duration;
    //     console.log(progress);
    // }

    //alert(weddingmp3.paused);
    var play = !weddingmp3.paused;
    if(!play){
        console.log("该浏览器禁止自动播放背景音乐");
    }
    var audioimg = $("#audioimg");

    // musicplay();

    function musicplay(){
        // alert(play);
        if(play){
            weddingmp3.pause();
            play=false;
            audioimg.css("animation-play-state","paused");
        }else{
            weddingmp3.play(); 
            play=true;  
            audioimg.css("animation-play-state","running");
        }
    }

    
    audioimg.click(function(){
        musicplay();
    });
    // audioimg.hover(function(){
    //     audioimg.css("animation-play-state","paused");
    //     weddingmp3.pause();
    // });

    //屏幕宽度
    // var wid = $(window).width();
    // var danmu = $(".danmu:eq(0)");
    // var contentHeight = danmu.height();
    // // alert(contentWidth+" "+danmu.width());

    // var eleHeg = 100;
    // //屏幕宽度
    // var wid = $(window).width();
    // if(wid==520){
    //     eleHeg=40;
    // }
    // if(wid==1024){
    //     eleHeg=90;
    // }
    // console.log(eleHeg);

    // var num = Math.floor(contentHeight/eleHeg);
    // console.log("创建管道数 "+num);
    // var buffer=new Array(num);
    // for(var i=0;i<num;i++){
    //     buffer[i]=new Array();
    // }
    var bufferArr =new Array();
//     var json={};
//     //得到json数据
//     function getJson(data){
//         json = data.userinfo;
//         // console.log(json.length);
//         var len = json.length;
//         for(var i=0;i<len-1;i++){
//             bufferArr[i]=json[i];
//         }

//     }
    
    //传递管道值
    function getBufferfromfile(){
        var userinfo = [
            {"uname":"WANG","telephone":"12345678901","blessing":"相爱年年岁岁，相知岁岁年年","time":"2021-11-09"},
            {"uname":"WANG","telephone":"12345678901","blessing":"恩爱甜蜜，美满常驻，幸福萦绕","time":"2021-10-09"},
            {"uname":"WANG","telephone":"13445678901","blessing":"真心祝愿君新婚快乐","time":"2021-10-09"},
            {"uname":"WANG","telephone":"12345678901","blessing":"祝福你们，从平凡的温馨到白首的不离，数着快乐静看子孙满堂","time":"2021-10-09"},
            {"uname":"","telephone":"","blessing":"","time":""}
        ];
        var len = userinfo.length;
        for(var i=0;i<len-1;i++){
            bufferArr[i]=userinfo[i];
        }
        //alert(bufferArr);
        return bufferArr;
    }


    //屏幕滚动事件
    // $(window).scroll(function(e){
    //     var winpos = $(window).scrollTop();
    //     console.log(winpos);
    // });
    // for(var i = 1;i<10;i++){
    //     //console.log($("#page"+i).css("display"));
    //     if($("#page"+i).css("display")==="block"){
    //         $("#nav"+i).addClass("selecting");
    //     }else{
    //         $("#nav"+i).removeClass("selecting");
    //     }
    // }
    function navclass(index){
        // $("#nav").css("opacity","0");
        for(var i = 1;i<10;i++){
            if(i==index){
                // alert(i);
                $("#nav"+i).addClass("selecting");
            }else{
                $("#nav"+i).removeClass("selecting");
            }
        } 
    }

    function updownFun(index){
        // $("#nav").css("opacity","0");
        // alert(0);
        for(var i = 1;i<11;i++){
            if(i==index){
                $("#page"+i).css("display","block");

            }else{
                $("#page"+i).css("display","none");
            }
        } 
        
    }
    

    var wid = $(window).width();
    var heg = $(window).height();
    // alert(wid);
    //console.log($(window));

        //放入时间
        function siteTime(){
            window.setTimeout("siteTime()", 1000);
            var seconds = 1000;
            var minutes = seconds * 60;
            var hours = minutes * 60;
            var days = hours * 24;
            var years = days * 365;
            var today = new Date();
            var todayYear = today.getFullYear();
            var todayMonth = today.getMonth()+1;
            var todayDate = today.getDate();
            var todayHour = today.getHours();
            var todayMinute = today.getMinutes();
            var todaySecond = today.getSeconds();
            /* 
            Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳)
            year - 作为date对象的年份，为4位年份值
            month - 0-11之间的整数，做为date对象的月份
            day - 1-31之间的整数，做为date对象的天数
            hours - 0(午夜24点)-23之间的整数，做为date对象的小时数
            minutes - 0-59之间的整数，做为date对象的分钟数
            seconds - 0-59之间的整数，做为date对象的秒数
            microseconds - 0-999之间的整数，做为date对象的毫秒数 */
            var t1 = Date.UTC(2021,11,28,00,00,00); //北京时间
            var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
            var diff = t1-t2;
            var flag = true;
            if(diff<0){
                flag = false;
                diff = -diff;
            }
            var diffYears = Math.floor(diff/years);
            var diffDays = Math.floor((diff/days)-diffYears*365);
            var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
            var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
            var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
        
            if(flag){
                document.getElementById("sitetime").innerHTML=
                " 距离婚礼 " + diffDays+" 天 "
                +diffHours+" 小时 "
                +diffMinutes+" 分钟 "
                +diffSeconds+" 秒";
            }
            else{
                document.getElementById("sitetime").innerHTML=
                " 婚礼结束 " + diffYears +" 年 "
                + diffDays+" 天 "
                +diffHours+" 小时 "
                +diffMinutes+" 分钟 "+diffSeconds+" 秒";
            }
            
        
          }
          siteTime();
   
