function login(){
	var ac = $("#username").val();
	var pw = $("#password").val();
	//console.log(ac,pw);
	if(ac == 'test' && pw == '123'){
		location.href = "page2.html";
	}else{
		$("#errorMsg").show();
	}
}