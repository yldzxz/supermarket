var userAddCommond = {
		
		findU :function (){
			var username = $("#inputUsername").val();
			if (username == ""){
				$("#tip").html("用户名不能为空");
				$("#inputUsername").focus();
				return;
			}
			$.ajax({
				type : "post",
				url : ctx + "/user/findName.do",
				data : {"username":username },
				dataType:"json",
				success : function(data){
					var result = data.msg;
					if (result == "noExist"){
						$("#tip").html("正确");
					}else{
						$("#tip").html("用户名已经存在");
						$("#inputUsername").focus();
					}
				
				},
				error: function(data){
					alert("增加失败，请检查");
				}
			});	
		},
		addUser :function (){
			var username = $("#inputUsername").val();
			var password = $("#inputPassword").val();
			var email = $("#inputEmail").val();
			var age = $("#inputAge").val();
			var salary = $("#inputSarl").val();
			var sex = $("input[name='sex']:checked").val();
			
			var dept = $("select").find("option:selected").text();
			
			if (username == ""){
				alert("用户名不能为空");
				return;
			}else if (password ==""){
				alert("密码不能为空");
				return;
			}else if (email ==""){
				alert("邮件不能为空");
				return;
			}else if (!isPageNum(age)){
				alert("年龄不合法");
				return;
			}else if (!isSalary(salary)){
				alert("薪资格式不正确");
				return;
			}
			var user = {
					"userAccount":username,
					"userPassword":password,
					"userEmail":email,
					"userAge":age,
					"userSex":sex,
					"userSalary":salary,
					"userDepartId":dept,			
			};
			$.ajax({
				type : 'post',
				url : ctx + "/user/add.do",
				data: user,
				dataType :"json",
				success : function(data){
					var msg = data.msg;
					if (data.msg != -1 ){
						alert("增加成功");
						parent.layer.closeAll();
						return;
						
					}else{
						alert("增加失败");
						parent.layer.closeAll();
						return;
					}		
				},
				error:function(data){
					alert("sss");
				}
			});		

		}
}
/*
function addUser(){
	var username = $("#inputUsername").val();
	var password = $("#inputPassword").val();
	var email = $("#inputEmail").val();
	var age = $("#inputAge").val();
	var salary = $("#inputSarl").val();
	var sex = $("input[name='sex']:checked").val();
	
	var dept = $("select").find("option:selected").text();
	
	if (username == ""){
		alert("用户名不能为空");
		return;
	}else if (password ==""){
		alert("密码不能为空");
		return;
	}else if (email ==""){
		alert("邮件不能为空");
		return;
	}else if (!isPageNum(age)){
		alert("年龄不合法");
		return;
	}else if (!isSalary(salary)){
		alert("薪资格式不正确");
		return;
	}
	var user = {
			"userAccount":username,
			"userPassword":password,
			"userEmail":email,
			"userAge":age,
			"userSex":sex,
			"userSalary":salary,
			"userDepartId":dept,			
	};
	$.ajax({
		type : 'post',
		url : ctx + "/user/add.do",
		data: user,
		dataType :"json",
		success : function(data){
			var msg = data.msg;
			if (data.msg != -1 ){
				alert("增加成功");
				parent.layer.closeAll();
				return;
				
			}else{
				alert("增加失败");
				parent.layer.closeAll();
				return;
			}		
		},
		error:function(data){
			alert("sss");
		}
	});		

}
function findU(){
	var username = $("#inputUsername").val();
	if (username == ""){
		$("#tip").html("用户名不能为空");
		$("#inputUsername").focus();
		return;
	}
	$.ajax({
		type : "post",
		url : ctx + "/user/findName.do",
		data : {"username":username },
		dataType:"json",
		success : function(data){
			var result = data.msg;
			if (result == "noExist"){
				$("#tip").html("正确");
			}else{
				$("#tip").html("用户名已经存在");
				$("#inputUsername").focus();
			}
		
		},
		error: function(data){
			alert("增加失败，请检查");
		}
	});
}*/