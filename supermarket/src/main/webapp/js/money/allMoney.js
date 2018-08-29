
var allMoneyCommand = {
	
	list:function(){
		var html = "";
		$("#messageBox").html("");
		$.ajax({
			type : "post",
			url :ctx + "/money/profit.do",
			dataType :"json",
			success : function(data){
				var dayProfit = data.dayProfit;
				var mouthProfit = data.mouthProfit;
				var profit = data.profit;
				html += '<div >总收入：'+profit+'</div><br/>';
				html += '<div >今月利润：'+mouthProfit+'</div><br/>';
				html += '<div >今日利润：'+dayProfit+'</div><br/>';
				$("#messageBox").html(html);
			}
		});
		
	},
	clear : function(){
		$("#pay").html(0);
	}
}


