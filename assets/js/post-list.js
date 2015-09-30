$(function(){
	var clientHeight = $(window).height();
	var clientWidth = $(window).width();
	$('<img src="images/pn_post.png" class="postList">').appendTo("body")
	.css({
		//"float":"right",
		"position":"fixed",
		"top":clientHeight-64,
		"left":(clientWidth/2)-40
	});
	$(".postList").on("touchend", function () { 
		//console.log("T");
		location.href = 'page10.html';
	});
});
