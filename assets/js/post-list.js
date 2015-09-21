$(function(){
	$('<img src="images/postList.png" style="float:right; margin-top:8px;" class="postList">').appendTo("#titleBar");
	$(".postList").on("touchend", function () { 
		//console.log("T");
		location.href = 'page10.html';
	});
});
