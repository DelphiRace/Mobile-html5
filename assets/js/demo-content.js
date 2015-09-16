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
	var str = '<li><img src="images/folder_new.gif"><a href="#">'+getArr["title"]+'</a></li>';
	$("#firstItem").before(str);
}
