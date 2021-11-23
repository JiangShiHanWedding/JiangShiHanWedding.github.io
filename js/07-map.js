$(document).ready(function(){
    var content = $(".content").eq(6);

    var linkup = $(".linkup").eq(6);
    var linkdown = $(".linkdown").eq(6);
    var nouseico = $(".downiconouse").eq(6);

    var h1=content.children("h1");

    var h2=content.children("h2");
    var h3=content.children("h3");

    var mapele = $("#sevenmap");
    var pic = $("#sevenpic1");

    var anmgif = $("#sevencoupleimg");

    var picdiv = $(".sevenpic:eq(0)");

    var navele = $("#nav");

    // 动画开始
    content.bind("animationstart",function(e){
        var name = e.target.className;
        
        switch(name){
            case "content seven":

                navclass(7);

                h1.removeClass("sevenh1An");
                h1.css("opacity","0");

                h2.removeClass("sevenh2An");
                h2.css("opacity","0");

                h3.removeClass("sevenh3An");
                h3.css("opacity","0");

                pic.removeClass("sevenpicAn");
                pic.css("opacity","0");

                mapele.removeClass("sevenmapAn");
                mapele.css("opacity","0");

                anmgif.css("opacity","0");
                anmgif.removeClass("sevengifAn");

                picdiv.removeClass("sevenpicdivAn");
                picdiv.css("opacity","0");

                // 导航栏
                // navele.removeClass("navAn");
                // navele.css("opacity","0");

               
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
            
            case "content seven":
                h1.addClass("sevenh1An");

                // navele.addClass("navAn");

                linkup.addClass("linkupanimation");
                linkdown.addClass("linkdownanimation");
                break;
            case "sevenh1An":
                h1.css("opacity","1");
                h2.addClass("sevenh2An");

                // navele.css("opacity","1");
                break;
            case "sevenh2An":
                h2.css("opacity","1");

                picdiv.addClass("sevenpicdivAn");

                pic.addClass("sevenpicAn");    
                break;
            case "sevenpic sevenpicdivAn":
                picdiv.css("opacity","1");
                break;
            case "sevenpicAn":
                pic.css("opacity","1");
                mapele.addClass("sevenmapAn");
                break;
            case "sevenmapAn":
                mapele.css("opacity","1");
                anmgif.addClass("sevengifAn");
                // h3.addClass("sevenh3An");
                break;
            // case "sevenh3An":
            //     h3.css("opacity","1");
                
               
            //     break;
            case "sevengifAn":
                anmgif.css("opacity","1");
                break;
            
        }
    });

    //第7页选中
    // navclass(7);


    linkup.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(6);
        navclass(6);
    });

    linkdown.click(function(e){
        //alert(e);
        e.preventDefault();

        updownFun(8);
        navclass(8);
    });

    //腾讯地图
    //定义地图中心点坐标
    // var center = new TMap.LatLng(118.659566,28.765681)
    // //定义map变量，调用 TMap.Map() 构造函数创建地图
    // var map = new TMap.Map(document.getElementById('sevenmap'), {
    //     center: center,//设置地图中心点坐标
    //     zoom: 17.2,   //设置地图缩放级别
    //     pitch: 43.5,  //设置俯仰角
    //     rotation: 45    //设置地图旋转角度
    // });

    // var marker = new TMap.Marker({
    //     position: center,
    //     map: map
    // });

        //百度地图
    // var map = new BMap.Map("sevenmap"); 
    // //创建一个坐标点
    // //116.404表示经度，39.915表示纬度
    // var point = new BMap.Point(116.404, 39.915); 
    // //进行初始化 设置中心点坐标和地图级别
    // map.centerAndZoom(point, 15); 
    // //开启鼠标滚轮缩放 
    // map.enableScrollWheelZoom(true);  
    // //JSAPI商用授权挂件默认开启
    // map.disableBizAuthLogo(); //关闭
    // //map.enableBizAuthLogo(); //开启 
    // //平移缩放控件
    // map.addControl(new BMap.NavigationControl()); 
    // //比例尺   
    // map.addControl(new BMap.ScaleControl());  
    // //缩略地图  
    // map.addControl(new BMap.OverviewMapControl());
    //地图类型    
    // map.addControl(new BMap.MapTypeControl()); 
    
    //图标
    // var iconpic = new BMap.Icon("css/page/07-map/images/position.png",
    // new BMap.Size(100,110));
    // //此类表示地图上一个图像标注
    // var marker = new BMap.Marker(point,{icon:iconpic});
    // map.addOverlay(marker);

    //仅当设置城市信息时，MapTypeControl的切换功能才能可用     
    //map.setCurrentCity("北京"); 
});