$(document).ready(function(){
    var content = $(".content").eq(7);

    var linkup = $(".linkup").eq(7);
    var linkdown = $(".linkdown").eq(7);
    var nouseico = $(".downiconouse").eq(7);
    
    var h1 = content.children("h1");
    var h2 = content.children("h2");
    var h3 = content.children("h3");
    var h4 = content.children("h4");

    var form = $(".formdiv:eq(0)");
    var pic = $("#singlegif");

    if($(window).height()<670&& $(window).width()>600){
        $("#eightform").css("padding-top","0%");
        $("#eightform").css("height","60%");
        $("#eightform>input").each(function(index){
            $(this).css("margin","0%");
        });
        h3.css("margin-top","0%");
    }

    // 动画开始
    content.bind("animationstart",function(e){
        var name = e.target.className;
        
        switch(name){
            case "content eight":
                navclass(8);

                h1.removeClass("eighth1An");
                h1.css("opacity","0");

                h2.removeClass("eighth2An");
                h2.css("opacity","0");

                h3.removeClass("eighth3An");
                h3.css("opacity","0");


                form.removeClass("eighthform");
                form.css("opacity","0");
                
                h4.removeClass("eighth4An");
                h4.css("opacity","0");

                pic.removeClass("eightgifAn");
                pic.css("opacity","0");

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
        // alert(name);
        switch(name){
            case "content eight":
                linkup.addClass("linkupanimation");
                linkdown.addClass("linkdownanimation");
                h1.addClass("eighth1An");
                break;
            case "eighth1An":
                h1.css("opacity","1");
                h2.addClass("eighth2An");
                h3.addClass("eighth3An");
                break;
            case "eighth2An":
                h2.css("opacity","1"); 
                break;
            case "eighth3An":
                h3.css("opacity","1");
                form.addClass("eighthform");
                break;
            case "formdiv eighthform":
                form.css("opacity","1");
                // pic.css("opacity","1");
                h4.addClass("eighth4An");
                break;
            case "eighth4An":
                if($(window).height()>610){
                    pic.addClass("eightgifAn");
                }
                
                h4.css("opacity","1");
                break;
            case "eightgifAn":
                pic.css("opacity","1");
                break;

            
        }
    });

    //第8页选中
    // navclass(8);


    linkup.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(7);
        navclass(7);
    });

    linkdown.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(9);
        navclass(9);
    });

    //表单
    $("#eightform").submit(function(e){
        e.preventDefault();

        // //得到输入信息
        var uname = $("#username").val();
        var tel = $("#telephone").val();
        var word = $("#word").val();

        // //转换为对象
        var userInfo = {};
        userInfo.uname = uname;
        userInfo.telephone = tel;
        userInfo.blessing = word;

        // alert(word.length);
        if(word=""||word.length==0){
            alert("请输入祝福语");
        }else{
            var content = JSON.stringify(userInfo);

            // 异步上传json数据
            $.ajax({
                type:"post",
                url:"http://47.96.43.213:9990/wedding/insert",
                dateType:"json",
                data: content,
                //消息请求类型
                contentType:"application/json;charset=UTF-8",
                success:function(meg){
                    $("#username").val("");
                    $("#telephone").val("");
                    $("#word").val("");
                    // console.log(meg);
                    if(meg.success){
                        // Swal.fire(
                        //     meg.message,
                        //     "",
                        //     "确定"
                        // );
                        alert(meg.message);
                        updownFun(9); 
                    }
                    else if(meg.code==10000){
                        alert(meg.message);
                        // Swal.fire({
                        //     icon: 'error',
                        //     title: '',
                        //     text: meg.message
                        // });
                    }
                },
                error:function(meg){
                    $("#username").val("");
                    $("#telephone").val("");
                    $("#word").val("");
                    alert("服务器已停止运行，无法保存数据，查看历史弹幕");
                    updownFun(9);
                }
            });
        }
        

        

        

        // // alert(JSON.stringify(userInfo));
        // //转为json
        // var content = JSON.stringify(userInfo);
        // var eleLink = document.createElement("a");
        // eleLink.download = "userinf.json";
        // eleLink.style.display = "none";
        // //字符内容转为blob地址
        // var blob = new Blob([content]);
        // eleLink.href = URL.createObjectURL(blob);
        // //触发点击
        // document.body.appendChild(eleLink);
        // eleLink.click();
        // // //移除元素a
        // document.body.removeChild(eleLink);

    });



    //window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
    /*
        type: TEMPORARY 临时文件存储 PERSISTENT 持久
        size: 存储大小
        successCallback: 请求成功回调
        errorCallback: 失败回调
    */
    //window.requestFileSystem(window.TEMPORARY, 5*1024,initFs,errorHanlder);


    //function initFs(fs){
        // alert(fs);
   // }

    // function errorHanlder(err){
    //     console.log(err);
    //     // alert("创建文件失败");
    // }


    //地理位置
    // if(navigator.geolocation){
    //     navigator.geolocation.getCurrentPosition(function(position,e){
    //         console.log(position,e);
    //         //position。coords.latitude; 纬度
    //         //position。coords.longitude; 经度
    //         //position。coords.accuray; 精确度
    //     });
    // }else{
    //     console.log("浏览器不支持HTML5 Geolocation");
    // }

});