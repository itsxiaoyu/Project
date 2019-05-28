window.onload=function(){
    // 轮播图
    var oPrev=document.getElementById('prev');
    var oNext=document.getElementById('next');
    var oImg=document.getElementById('img1');
    var oBtn=document.getElementById('btnlist');
    var aBtn=oBtn.getElementsByTagName('li');
    arrImg=['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg'];
    var num=0;
    var timer=null;

    function autoPlay(){
    timer=setInterval(function(){
        num++;
        num%=arrImg.length;
        Tab();
    },2000);
}
    setTimeout(autoPlay,1000);
    function Tab(){
        for(var i=0;i<arrImg.length;i++){
        aBtn[i].style.background='';
        oImg.src=arrImg[num];
        aBtn[num].style.background='rgba(255,255,255,0.4)';
        }
    }
    Tab();
    oPrev.onclick=function(){
        num--;
        if(num==-1){
            num=0;
        }
        Tab();
    };
    oNext.onclick=function(){
        num++;
        if(num==arrImg.length){
            num=0;
        }
        Tab();
    };
// 家电商品区切换
    var oList=document.getElementById('mlist');
    var aLi=oList.getElementsByTagName('li');
    // 切换显示区
    var oBox=document.getElementById('box');
    var aShow=oBox.getElementsByTagName('ul');
    // 切换不同显示区
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onmouseover = function(){
            for (var i = 0; i < aLi.length; i++) {
                aShow[i].style.display = 'none';
            }
                aShow[this.index].style.display = 'block';
        }
    }

    // 搜索框
    // var oSText=document.getElementById('search_text');
    // var oSBtn=document.getElementById('search_btn');
    // var oSshow=document.getElementById('search_show');
    // var onoff=true;
    //     oSText.onfocus=function(){
    //         oSshow.style.display='block';
    //         oSBtn.style.borderLeftColor='#FF6700';
    //     }
    //     oSText.onblur=function(){
    //         oSshow.style.display='none';
    //         oSBtn.style.borderLeftColor='#e0e0e0';
    //     }
}