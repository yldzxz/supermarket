var inboundAddCommond = {

		find:function (){
			var commodityname = $("#inboundCommodityCode").val();
			if (commodityname == ""){
				$("#tip").html("商品代号不能为空");
				$("#inputcommodityname").focus();
				return;
			}
			$.ajax({
				type : "post",
				url : ctx + "/inbound/findName.do",
				data : {"commodityname":commodityname },
				dataType:"json",
				success : function(data){
					var result = data.msg;
					if (result == "noExist"){
						$("#tip").html("不存在的商品");
						
					}else{
						result = data.commodity;
						
						var commodityName = result.commodityName;
						var commodityPurchasePrice = result.commodityPurchasePrice;
						
						$("#inboundCommodityName").val(commodityName);
						$("#inboundCommodityPrice").val(commodityPurchasePrice);	
						$("#inboundCommodityNum").focus();
					}
				
				},
				error: function(data){
					alert("增加失败，请检查");
				}
			});	
		},
		addInbound : function(){
			
			var inboundCommodityCode = $("#inboundCommodityCode").val();
			var inboundCommodityName = $("#inboundCommodityName").val();
			var inboundCommodityPrice = $("#inboundCommodityPrice").val();
			var inboundCommodityNum = $("#inboundCommodityNum").val();
			var inboundCommodityMoney = $("#inboundCommodityMoney").val();
			var inboundSuper = $("#inboundSuper").val();
			var inbound = {
				"inboundCommodityId":inboundCommodityCode,
				"inboundCommodityName":inboundCommodityName,
				"inboundCommodityPrice":inboundCommodityPrice,
				"inboundMoney":inboundCommodityMoney,
				"inboundCommodityNum":inboundCommodityNum,
				"inboundSuperId":inboundSuper,
			};
			if (inboundCommodityMoney == ""){
				alert("不能为空");
				return;
			}
			$.ajax({
				type:"post",
				url : ctx + "/inbound/add.do",
				data:inbound,
				dataType : "json",
				success : function(data){
					alert("入库成功");
					parent.layer.closeAll();
				}
				
			});
			
			
			
		},
		commodityNum:function(){
			var buyNum = $("#inboundCommodityNum").val();
			if (buyNum.length == 1){
				buyNum=buyNum.replace(/[^1-9]/g,'')
				
			}else{
				buyNum=buyNum.replace(/\D/g,'')
			}
			
			$("#inboundCommodityNum").val(buyNum);
			var price = $("#inboundCommodityPrice").val();
			var buyNum = $("#inboundCommodityNum").val();
			if (buyNum != ""){
				var num = parseFloat(price) * parseFloat(buyNum);
				$("#inboundCommodityMoney").val(num);
			}
		} 
		
		
}
