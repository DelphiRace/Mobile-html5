$(function(){
	$(".goback").on("touchend", function () { 
		//console.log("T");
		location.href = 'newuser.html';
	});
	$(".toggle").remove();
	$("#optionImgBtn").on("touchend", function () { 
		imgListShow();
	});
	$("#optionImgBtn").on("touchend", function () { 
		imgListShow();
	});
	$("#optionPhizBtn").on("touchend", function () { 
		phizListShow();
	});
	$("#optionLinkBtn").on("touchend", function () { 
		linkImgShow();
	});
	$("#sendInfo").on("touchend", function () { 
		send();
	});
});

function imgListShow(){
	var btnSet = $("#optionImgBtn").offset();
	console.log(btnSet);
	$("#imageList").css({
		"position": "absolute",
		"top" : btnSet.top+25,
		"left": btnSet.left
	}).toggle();
}

function phizListShow(){
	var btnSet = $("#optionPhizBtn").offset();
	console.log(btnSet);
	$("#phizList").css({
		"position": "absolute",
		"top" : btnSet.top+25,
	}).toggle();
}

function linkImgShow(){
	var btnSet = $("#optionLinkBtn").offset();
	console.log(btnSet);
	$("#listImg").css({
		"position": "absolute",
		"top" : btnSet.top+25,
	}).toggle();
}
function send(){
	var title = encodeURI($("#keynote").val());
	var content = encodeURI($("#keynoteContent").val());
	location.href = 'newuser.html?title='+title+'&content='+content;
}