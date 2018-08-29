var supersAddCommond = {
		
		findU :function (){
			var supersname = $("#inputsupersname").val();
			if (supersname == ""){
				$("#tip").html("供应商名不能为空");
				$("#inputsupersname").focus();
				return;
			}
			$.ajax({
				type : "post",
				url : ctx + "/supers/findName.do",
				data : {"supersname":supersname },
				dataType:"json",
				success : function(data){
					var result = data.msg;
					if (result == "noExist"){
						$("#tip").html("正确");
					}else{
						$("#tip").html("供应商已经存在");
						$("#inputsupersname").focus();
					}
				
				},
				error: function(data){
					alert("增加失败，请检查");
				}
			});	
		},
		addsupers :function (){
			var supersname = $("#inputsupersname").val();
			var location = $("#inputLocation").val();
			var phone = $("#inputPhone").val();
			
			if (supersname == ""){
				alert("供应商不能为空");
				return;
			}else if (location ==""){
				alert("地址不能为空");
				return;
			}else if (isPhone(phone)){
				alert("手机号码格式不正确");
				return;
			}
			var supers = {
					"supersName":supersname,
					"supersLocation":location,
					"supersPhone":phone,			
			};
			$.ajax({
				type : 'post',
				url : ctx + "/supers/add.do",
				data: supers,
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
