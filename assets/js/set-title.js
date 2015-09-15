$(function(){
	$.ajaxSetup({
		url:"http://127.0.0.1/api.php",
		type:"GET",
		async: false
	});
	$.ajax({
		success: function(rs){
			console.log(rs);
		}
	});
});