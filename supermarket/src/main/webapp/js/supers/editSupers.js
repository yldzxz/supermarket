var userEditCommond = {
	editUser:function (){
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
			url : ctx + "/user/edit.do",
			data: supers,
			dataType :"json",
			success : function(data){
				var msg = data.msg;
				if (data.msg != -1 ){
					alert("编辑成功");
					window.parent.location.reload();
					parent.layer.closeAll();
					return;
					
				}else{
					alert("编辑失败");
					window.parent.location.reload();
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

