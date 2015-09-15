$(function(){
	$.ajaxSetup({
		async: false
	});
	$.get("menu.html",{},function(rs){
		$("#nav, #navPanel nav").html(rs);
	});
});