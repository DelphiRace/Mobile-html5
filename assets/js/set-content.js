$(function(){
	$.ajaxSetup({
		url:"http://127.0.0.1/api.php",
		type:"POST",
		async: false,
	});
});

function binbinList(){
	$.ajax({
		data: {type:"binbinList"},
		success: function(rs){
			//console.log(rs);
			$("#listContent").html('');
			var contentArr = $.parseJSON(rs);
			$.each(contentArr,function(i,v){
				creatListContent(v.title, v.summary);
			});
			
		}
	});
}

function videoList(){
	$.ajax({
		data: {type:"videoList"},
		success: function(rs){
			//console.log(rs);
			$("#listContent").html('');
			var contentArr = $.parseJSON(rs);
			$.each(contentArr,function(i,v){
				creatVideoListContent(v.summary, v.content);
				console.log(i,v);
			});
			
		}
	});
}