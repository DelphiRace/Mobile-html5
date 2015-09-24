function login(){
	var ac = $("#username").val();
	var pw = $("#password").val();
	//console.log(ac,pw);
	if(ac == 'Alex' && pw == '123'){
		$.cookie('user', 'Alex');
		$.cookie('name', '吳宏建');
		location.href = "./";
	}else{
		$("#errorMsg").show();
	}
}