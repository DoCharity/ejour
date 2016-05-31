apiready = function(){
	
	//启动页
	
	var WelcomePage = api.require('welcomePage');    
	WelcomePage.openWelcomePage({
	    isFullscreen: true,  //是否全屏(全屏不显示状态栏)  默认false
	    AnimationType: 'Default',  //动画类型   'Default默认', 'DepthPage深入浅出', 'Cube立方体', 'Rotate旋转','Accordion左右折叠', 'InRightUp右上角进入' , 'InRightDown右下角进入', 'ZoomOutPage淡入淡出'
	    imgs: ['widget://image/splash/1.png','widget://image/splash/2.png','widget://image/splash/3.png','widget://image/splash/4.png'],
	    setting: {
	        isShow: true, // 是否显示页面点 默认不显示
	        ImgSize: 30, // 图片size
	        ImgSpacing: 30 // 图片之间的间隔
	    }
	}, function(ret, err){        
	    if( ret ){
	        //alert( JSON.stringify( ret ) );
	    }else{
	        //alert( JSON.stringify( err ) );
	    }
	});
	
	//主程序
	
	var header = document.querySelector('#header');
	$api.fixStatusBar(header);
	var headerPos = $api.offset(header);
    var main = $api.byId('main');
    var mainPos = $api.offset(main);
    var browser = api.require('webBrowser');
	api.openFrame({
        name: 'main',
        url: './html/main.html',
        bounces: false,
        rect: {
            x: 0,
            y: headerPos.h,
            w: 'auto',
            h: 'auto'
        }
    });
};

function openabout(){
	api.openWin({
    	name: 'about',
        url: './html/about.html',
	    bounces: false,
	    rect: {
	        x: 0,
	        y: 0,
	        w: 'auto',
	        h: 'auto'
	        },
	        delay: 50,
        animation: {
        	type:"movein",
		    subType:"from_left",
		    duration:300
        }
         });
	}
   	function openScanner(){
        //alert("11");
        var scanner = api.require('scanner');
        scanner.open(function(ret,err) {
            if( ret ) {
            	//alert(ret.eventType);
		        if(ret.eventType=='success') {
		        	var result2 = ret.msg;
		        	//alert('扫描成功！');
		    		api.openWin({
				    	name: 'information',
			            url: './html/intro.html',
			          	pageParam:{
			            	name2:result2
			            	//name:'spot=yzsrt&id=1',
			           	},
			        bounces: false,
			        rect: {
			            x: 0,
			            y: 0,
			            w: 'auto',
			            h: 'auto'
			        },
			        delay: 50
			         });
		        } else {
		        	;
		        }
		    } else {
		        ;
		    }
	        /*var browser = api.require('webBrowser');
	        var myurl = 'https://api.ejour.co/v1/intro.php?'+ret.msg;
			browser.open({
			    url:myurl
			});*/
        });
   
   }