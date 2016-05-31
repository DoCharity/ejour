apiready = function(){
	var header = document.querySelector('#header');
	$api.fixStatusBar(header);  
	getbingpic(); 
};


function getbingpic(){
	var connectionType = api.connectionType;
	api.imageCache({
	    url: 'https://img.1cf.co/bing.png',
	    thumbnail:true
	}, function(ret, err){
	    if( ret.status='true' ){
	       	var bingpic = ret.url;
			document.getElementById("bingpic").innerHTML = "<img src=\"" + bingpic + "\" style=\"width:100%;\"></img>";
			//document.getElementById("bingpicinfo").innerHTML = "加载中......";
	    }else{
	        ;
	    }
	});
	if(connectionType != 'none'){
		api.ajax({
		    url: 'http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN',
		    method: 'post'
		},function(ret, err){
		    if (ret) {
		    var bingpicinfo = ret.images[0].copyright;
		        document.getElementById("bingpicinfo").innerHTML = bingpicinfo;
		    } else {
		        document.getElementById("bingpic").innerHTML = "<img src=\"" + "../image/bing.png" + "\" style=\"width:100%;\"></img>";
		    }
		});
		
	}
}

function info(){
	var connectionType = api.connectionType;
	if(connectionType != 'none'){
		api.ajax({
		    url: 'http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN',
		    method: 'post'
		},function(ret, err){
		    if (ret) {
		    	var bingpicinfo = ret.images[0].copyright;
		    	api.alert({
				    title: '今日必应™美图',
				    msg: bingpicinfo + "\n\n必应™美图所有图片版权均归属原作者所有。",
				});	
		    } else {
				api.alert({
				    title: '今日必应™美图',
				    msg: "必应™美图所有图片版权均归属原作者所有。",
				});		    		
		    }
		});
	}else{
		api.alert({
		    title: '今日必应™美图',
		    msg: "必应™美图所有图片版权均归属原作者所有。",
		});		
	}
}
function personal(){
	api.alert({
	    title: '个人中心',
	    msg: "建设中......",
	});
}