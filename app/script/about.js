apiready = function(){
	var header = document.querySelector('#header');
	$api.fixStatusBar(header);
	var headerPos = $api.offset(header);
    var main = $api.byId('main');
    var mainPos = $api.offset(main);
    var browser = api.require('webBrowser');
	api.openFrame({
        name: 'about-content',
        url: './about-content.html',
        bounces: false,
        rect: {
            x: 0,
            y: headerPos.h,
            w: 'auto',
            h: 'auto'
        }
    });
    
};
function openweb(){
	var browser = api.require('webBrowser');
	browser.open({
	    url:'https://www.ejour.co'
	});
}