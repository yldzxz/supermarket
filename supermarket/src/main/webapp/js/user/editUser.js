var userEditCommond = {
	editUser:function (){
		var id = $("#inputId").val();
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
				"userId" : id,
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
			url : ctx + "/user/edit.do",
			data: user,
			dataType :"json",
			success : function(data){
				var msg = data.msg;
				if (data.msg != -1 ){
					alert("编辑成功");
					parent.layer.closeAll();
					return;
					
				}else{
					alert("编辑失败");
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

