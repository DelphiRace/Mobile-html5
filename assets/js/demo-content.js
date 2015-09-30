$(function(){
	var strUrl = location.search;
	var getPara, ParaVal;
	var aryPara = [];
	if (strUrl.indexOf("?") != -1) {
		var getSearch = strUrl.split("?");
		getPara = getSearch[1].split("&");
		for (i = 0; i < getPara.length; i++) {
			ParaVal = getPara[i].split("=");
			aryPara[ParaVal[0]] = ParaVal[1];
		}
		//console.log(aryPara);
		putContent(aryPara);
	}
	
});

function putContent(getArr){
	if(typeof $.cookie('name') == 'undefined'){
		var name = '吴建宏';
	}else{
		var name = $.cookie('name')
	}
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth();
	var day = d.getDate();
	var thisDate = year+'-'+month+'-'+day;
	
	var str = '<div class="4u 12u(mobile)">';
	str += '<section>';
	str += '<h2>'+getArr["title"]+'</h2>';
	str += '<ul class="small-image-list">';
	str += '<li>';
	str += '<p>';
	str += getArr["content"];
	str += '</p>';
	str += '<h4>'+name + '&nbsp;' + thisDate +'</h4>';
	str += '<footer class="controls"><a href="newuser-content.html" class="button">阅读</a></footer>';
	str += '</li>';
	str += '</section>';
	
	$("#firstItem").before(str);
}
