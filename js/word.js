var canvans = document.getElementById("wmcanvas");


var myCanvans = canvans.getContext("2d");

// alert(myCanvans);

var particles = [];
for(var i = 0;i < 500; i++){
    particles.push({
        // x,y 位置 vx,vy 速度
        x: Math.random() * wid,
        y: Math.random() * heg,
        vx: (Math.random() * 1 - .5),
        vy: (Math.random() * 1 - .5),
        size: 1 + Math.random() * 2,
        color: "#fff"
    });
}

function timeUpdate(e){
    //画布清空
    myCanvans.clearRect(0,0,wid,heg);
    var particle;
    for(var i=0;i<500;i++){
        particle = particles[i];
        particle.x += particle.vx;
        particle.y += particles.vy;
        //移动到窗口左侧以外时，显示在窗口最右侧
        if(particle.x<0){
            particle.x = wid;
        }
        //移动到窗口右侧以外时，显示在窗口最左侧
        if(particle.x>wid){
            particle.x = 0;
        }
        //移动到窗口顶部以外，重新显示在窗口顶部
        if(particle.y>=heg){
            particle.y = 0;
        }
        myCanvans.fillStyle = particle.color;

        //开始绘制
        myCanvans.beginPath();
        myCanvans.arc(particle.x,particle,y,particle.size,0,Math.PI*2);
        //闭合路径
        myCanvans.closePath();
        //填充颜色
        myCanvans.fill();
    }
}
    
//每40毫秒执行一次函数
setInterval(timeUpdate,40);
