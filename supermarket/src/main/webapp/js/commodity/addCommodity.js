var commodityAddCommond = {
		
		find:function (){
			var commodityname = $("#inputcommodityname").val();
			if (commodityname == ""){
				$("#tip").html("商品代号不能为空");
				$("#inputcommodityname").focus();
				return;
			}
			$.ajax({
				type : "post",
				url : ctx + "/commodity/findName.do",
				data : {"commodityname":commodityname },
				dataType:"json",
				success : function(data){
					var result = data.msg;
					if (result == "noExist"){
						$("#tip").html("正确");
					}else{
						$("#tip").html("商品代码已经存在");
						$("#inputcommodityname").focus();
					}
				
				},
				error: function(data){
					alert("增加失败，请检查");
				}
			});	
		},
		addcommodity :function (){
			var commodityCode = $("#commodityCode").val();
			var commodityName = $("#commodityName").val();
			var commodityNowNum = $("#commodityNowNum").val();
			var commodityWarnNum = $("#commodityWarnNum").val();
			var commodityType = $("#selectType").find("option:selected").text();
			var commodityPurchasePrice = $("#commodityPurchasePrice").val();
			var commoditySellingPrice = $("#commoditySellingPrice").val();
			var commodityAllowSell = $("#selectSell").find("option:selected").text();
			var commodityKeyHot = $("#commodityKeyHot").val();
			var commodityManufacturer = $("#commodityManufacturer").val();
			var commoditySuper = $("#commoditySuper").val();
	
			if (commodityName ==""){
				alert("商品名不能为空");
				return;
			}else if (!isNum(commodityNowNum)){
				alert("库存格式不合法");
				return;
			}else if (!isNum(commodityWarnNum)){
				alert("库存格式不合法");
				return;
			}else if (!isNum(commodityPurchasePrice)){
				alert("价格格式不正确");
				return;
			}else if (!isNum(commoditySellingPrice)){
				alert("价格格式不正确");
				return;
			}
			var commodity = {
					"commodityCode":commodityCode,
					"commodityName":commodityName,
					"commodityNowNum":commodityNowNum,
					"commodityWarnNum":commodityWarnNum,
					"commodityType":commodityType,
					"commodityPurchasePrice":commodityPurchasePrice,
					"commoditySellingPrice":commoditySellingPrice,
					"commodityAllowSell":commodityAllowSell,
					"commodityKeyHot":commodityKeyHot,
					"commodityManufacturer":commodityManufacturer,
					"commoditySuper":commoditySuper,					
			};

			$.ajax({
				type : 'post',
				url : ctx + "/commodity/add.do",
				data: commodity,
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
