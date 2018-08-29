var commodityEditCommond = {
	edit:function (){
		var commodityId = $("#commodityId").val();
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
				"commodityId" : commodityId,
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
			url : ctx + "/commodity/edit.do",
			data: commodity,
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

