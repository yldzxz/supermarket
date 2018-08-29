var vipEditCommond = {
	editVip:function (){
			var id = $("#inputId").val();
			var account = $("#inputAccount").val();
			var name = $("#inputName").val();
			var useMoney = $("#inputUseMoney").val();
			var code = $("#inputCode").val();
			var date = $("#inputDate").val();
			var phone = $("#inputPhone").val();
			
			if (account == ""){
				alert("vip帐号不能为空");
				return;
			}else if (name ==""){
				alert("姓名不能为空");
				return;
			}else if (useMoney ==""){
				alert("名字不能为空");
				return;
			}else if (!isPageNum(phone)){
				alert("phone不合法");
				return;
			}else if (!isPageNum(code)){
				alert("积分不合法");
				return;
			}
			var vip = {
					"vipId":id,
					"vipAccount":account,
					"vipName":name,
					"vipUsesMoney":useMoney,
					"vipCode":code,
					"vipDate":date,
					"vipPhone":phone,		
			};
			$.ajax({
				type : 'post',
				url : ctx + "/vip/edit.do",
				data: vip,
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
