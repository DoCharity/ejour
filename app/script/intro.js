apiready = function(){
	var header = document.querySelector('#head');
	$api.fixStatusBar(header);
	var value2 = api["pageParam"]["name2"];
	var connectionType = api.connectionType;
	if(connectionType=='none'){
		api.alert({
		    title: '通讯失败',
		    msg: "未连接至互联网，请连接至互联网后重试。",
			}, function(ret, err){
			    if( ret.buttonIndex==1 ){
			         api.closeWin();
			    } else {
			    	;
		    	}
		    });
	} else {
		api.ajax({
		    url: 'https://api.ejour.co/v1/api.php?'+value2,
		    method: 'post'
		},function(ret, err){
		    if (ret) {
		        var title=ret.name;
		        document.getElementById("title").innerHTML = title;
		        var pic=ret.pic;
		        if(pic!='' || pic!='https://img.ejour.co/ejour.png'){
					api.imageCache({
					    url: pic,
					    thumbnail:true
					}, function(ret, err){
					    if( ret.status='true' ){
					         pic=ret.url;
					         document.getElementById("pic").src = pic;
					    }else{
					         ;
					    }
					});
			        //document.getElementById("pic").src = pic;
		        }
		    } else {
		         api.alert({
				    title: '通讯失败',
				    msg: "请求信息有误，或者您未连接至互联网。",
					});
		    }
		});
	    var headerPos = $api.offset(header);
	    var main = $api.byId('main');
	    var mainPos = $api.offset(main);
	    var browser = api.require('webBrowser');
	    //var value2=api.pageParam.name2;
	    //alert('main.html:'+value2);
		browser.openView({
		    url:'https://api.ejour.co/v1/intro.php?'+value2,
		    progress:{
				color:'#96cb4b'
			},
		    rect:{
		        x:0,
		        y:headerPos.h,
		        w:'auto',
		        h:'auto'
		    }
		}, function(ret, err){
		    switch (ret.state) {
		        case 0:
		            break;
		        case 1:
		            break;
		        case 2:
		            break;
		        case 3:
		            break;
		        case 4:
		            break;
		        default:
		            break;
		    }
		});
	}
};
    /*api.openFrame({
        name: 'main',
        url: 'html/main.html',
        bounces: false,
        rect: {
            x: 0,
            y: headerPos.h,
            w: 'auto',
            h: mainPos.h
        }
    });*/

/*var value=api.pageParam.name;
    api.openFrame({
	     name: 'details',
	     url: './introduction.html',
	       pageParam:{
                            id:value,
                           
                    },
	     rect: {
		     x:0,
		     y:50,
		     w: api.winWidth,
		     h:api.winHeight,
	     }
     });
      

    
    function name(value){
   
    document.getElementById("foodname").innerHTML=value;   
      
    }*/

function share(){
	if(document.getElementById("title").innerHTML=='正在获取...') {
		alert('拉取分享数据失败');
	} else {
		var sharedModule = api.require('shareAction');
		sharedModule.share({
		    text: '嗨，我正在参观' + document.getElementById("title").innerHTML + '这个展品！这个景区是有电子版本的，试试吧 https://www.ejour.co ',
		    type: 'text'
		});
	}
}