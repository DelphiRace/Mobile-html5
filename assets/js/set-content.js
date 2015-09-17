$(function(){
	$.ajaxSetup({
		type:"GET",
		async: false,
	});
});

function binbinList(){
	$.ajax({
		url: "binbin.json",
		success: function(rs){
			//console.log(rs);
			$("#listContent").html('');
			//var contentArr = $.parseJSON(rs);
			var contentArr = rs;
			$.each(contentArr,function(i,v){
				creatListContent(v.title, v.summary);
			});
			
		}
	});
}

function videoList(){
	$.ajax({
		url:"video.json",
		success: function(rs){
			//console.log(rs);
			$("#listContent").html('');
			//var contentArr = $.parseJSON(rs);
			var contentArr = rs;
			$.each(contentArr,function(i,v){
				creatVideoListContent(v.summary, v.content);
			});
			
		}
	});
}