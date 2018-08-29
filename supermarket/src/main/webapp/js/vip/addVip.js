var vipAddCommond ={

		addvip :function (){
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
					"vipAccount":account,
					"vipName":name,
					"vipUsesMoney":useMoney,
					"vipCode":code,
					"vipDate":date,
					"vipPhone":phone,	
			};
			$.ajax({
				type : 'post',
				url : ctx + "/vip/add.do",
				data: vip,
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
		
		},
	findV:function (){
			var vipname = $("#inputAccount").val();
			if (vipname == ""){
				$("#tip").html("帐号不能为空");
				$("#inputAccount").focus();
				return;
			}
			$.ajax({
				type : "post",
				url : ctx + "/vip/findName.do",
				data : {"vipname":vipname },
				dataType:"json",
				success : function(data){
					var result = data.msg;
					if (result == "noExist"){
						$("#tip").html("正确");
					}else{
						$("#tip").html("vip帐号已经存在");
						$("#inputvipname").focus();
					}
				
				},
				error: function(data){
					alert("增加失败，请检查");
				}
			});
		}
}