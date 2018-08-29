function login(){
	
	var username = $("#username").val();
	var password = $("#password").val();
	var utype = $("input[name='utype']:checked").val();
	$.ajax({
		type : "POST",
		url: window.ctx + "/login/login.do",
		data:{"username" : username, "password": password,"utype":utype ,'t':new Date().getTime()},
		dataType:"json",
		success : function(data){
			var html = "";
			var result = data.type;
			if(data.type == ""){
				alert("用户名或者密码错误!");
				
			}else if (data.type == "admin"){
				window.location.href = ctx + "/login/adminIndex.do";
			}else {
				window.location.href = ctx + "/login/cherkIndex.do";
			}
		}
	});
	
}
function show(){
	$("#messageBox").html("");
	$("#pagining").html("");
	
}

function About(){
	$("#messageBox").html("");
	$("#pagining").html("");
	html ="关于我们";
	$("#messageBox").html(html);
}
