var adminAddCommond = {
		
		findA :function (){
			var adminname = $("#inputAdminName").val();
			if (adminname == ""){
				$("#tip").html("帐号不能为空");
				$("#inputAdminName").focus();
				return;
			}
			$.ajax({
				type : "post",
				url : ctx + "/admin/findName.do",
				data : {"adminname":adminname },
				dataType:"json",
				success : function(data){
					var result = data.msg;
					if (result == "noExist"){
						$("#tip").html("正确");
					}else{
						$("#tip").html("用户名已经存在");
						$("#inputAdminName").focus();
					}
				
				},
				error: function(data){
					alert("增加失败，请检查");
				}
			});	
		},
		addAdmin :function (){
			var adminname = $("#inputAdminName").val();
			var password = $("#inputPassword").val();
			var email = $("#inputEmail").val();
			
			
			if (password ==""){
				alert("密码不能为空");
				return;
			}else if (email ==""){
				alert("邮件不能为空");
				return;
			}
			var admin = {
					"adminAccount":adminname,
					"adminPassword":password,
					"adminEmail":email,			
			};
			$.ajax({
				type : 'post',
				url : ctx + "/admin/add.do",
				data: admin,
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
