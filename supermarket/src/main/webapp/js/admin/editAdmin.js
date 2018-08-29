var adminEditCommond = {
	editAdmin:function (){
		var id = $("#inputId").val();
		var adminname = $("#inputAdminName").val();
		var password = $("#inputPassword").val();
		var email = $("#inputEmail").val();
		
		
		if (adminname == ""){
			alert("用户名不能为空");
			return;
		}else if (password ==""){
			alert("密码不能为空");
			return;
		}else if (email ==""){
			alert("邮件不能为空");
			return;
		}
		var admin = {
				"adminId" : id,
				"adminAccount":adminname,
				"adminPassword":password,
				"adminEmail":email,	
		};
		$.ajax({
			type : 'post',
			url : ctx + "/admin/edit.do",
			data: admin,
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

