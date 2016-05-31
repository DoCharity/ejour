apiready = function(){
	var appVersion = api.appVersion;
	var deviceId = api.deviceId;
	if(appVersion=='00.00.02'){
		appVersion='<b style="color:#e91e63;">开发者预览版</b>';
		deviceId='<b style="color:#e91e63;">开发者</b></p><p style="padding-top:10px;color:#ff6d00;"><b>开发者预览版，不得外传！</b>';
	}
	document.getElementById("version").innerHTML = '版本：'+appVersion;
	document.getElementById("device").innerHTML = '授权：'+deviceId;
};

function openweb(weburl){
	var browser = api.require('webBrowser');
	browser.open({
	    url:weburl,
		progress:{
			color:'#008fed'
		},
		titleBar:{
			visible:true,
			bg:'#008fed'
		}
	});
}

function author(){
	api.alert({
    title: '制作人员',
    msg: "技术总监：张佑杰\n\n艺术总监：造梦先生\n\n编写人员：赵子龙等6人\n\n多公益发展中心提供全程技术支持。",
	});
}
function promote(){
	api.alert({
    title: '相关引用',
    msg: "设计规范：\nGoogle Material Design\n\n本应用基于易游官方API（V1）二次开发而来，app源码中使用部分接口仅限本app调用。",
	});
}
function story(){

	api.confirm({
	    title: '背后故事',
	    msg: '二〇一五年，夏末。我还是一名刚收到录取通知书的新生。怀揣着一份从年幼至年少的憧憬，步入了扬州中学校园。\n\n树人堂，这沉淀了一百多年的历史文化的标志性建筑给我带来的震撼不言而喻。',
	    buttons: ['关闭', '在线浏览完整版']
	}, function(ret, err){
	    if( ret.buttonIndex==2 ){
	         openweb('https://www.ejour.co/story.html');
	    }else{
	         ;
	    }
	});
	
}
function tool(){
	api.alert({
    title: '开发工具',
    msg: "本应用为混合式（Hybrid）APP，使用API CLOUD开发。\n\n开发工具：\nAPI Cloud\nNotepad++\nVisual Studio Code 2015\n\n多公益发展中心提供全程技术支持。",
	});
}
function privacy(){

	api.confirm({
	    title: '隐私政策',
	    msg: '易游重视用户的隐私，隐私权是您重要的权利。您在使用我们的服务时，我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及我们为您提供的访问、更新、控制和保护这些信息的方式。',
	    buttons: ['关闭', '在线浏览完整版']
	}, function(ret, err){
	    if( ret.buttonIndex==2 ){
	         openweb('https://www.ejour.co/privacy.html');
	    }else{
	         ;
	    }
	});
	
}
function terms(){

	api.confirm({
	    title: '使用条款',
	    msg: '易游是一个开源数字景区解决方案。',
	    buttons: ['关闭', '在线浏览完整版']
	}, function(ret, err){
	    if( ret.buttonIndex==2 ){
	         openweb('https://www.ejour.co/terms.html');
	    }else{
	         ;
	    }
	});
	
}
function liscence(){

	api.confirm({
	    title: 'MIT Liscence',
	    msg: "Copyright (c) 2016 Do Charity Development Center of Yangzhou\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nTHE ABOVE COPYRIGHT NOTICE AND THIS PERMISSION NOTICE SHALL BE INCLUDED IN ALL COPIES OR SUBSTANTIAL PORTIONS OF THE SOFTWARE.\n\nTHE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n",
	    buttons: ['关闭', '在线浏览完整版']
	}, function(ret, err){
	    if( ret.buttonIndex==2 ){
	         openweb('https://github.com/DoCharity/ejour/blob/master/LICENSE');
	    }else{
	         ;
	    }
	});
	
}
function docharity(){
	
	api.confirm({
	    title: '关于多公益',
	    msg: '全国少数的几个由中学生发起并执行的注册公益组织，致力于创新公益项目，所属项目《One-Cent Fund for Students》也入围2016年度微软创新杯赛事中国赛区半决赛并夺得中国赛区三等奖。',
	    buttons: ['关闭', '访问官网']
	}, function(ret, err){
	    if( ret.buttonIndex==2 ){
	    	alert('建设中......');
	    	//openweb('http://do.1cf.co');
	    }else{
	         ;
	    }
	});
	
}