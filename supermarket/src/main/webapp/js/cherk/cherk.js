
function vipRegist(){
	layer.open({
		type : 2,
		content : ctx + '/cherk/toRegisterVip.do',
		title :'注册vip',
		area: ['600px', '400px'],
	});
	
}
	
function registerVip(){
	
	var name = $("#inputName").val();
	var phone = $("#inputPhone").val();
		
	if (isNull(name)){
		alert("姓名不能为空");
		return;
	}else if (!isPageNum(phone)){
		alert("phone不合法");
		return;
	}
	$.ajax({
		type : 'post',
		url : ctx + "/cherk/addVip.do",
		data: {
			"vipName":name,
			"vipPhone":phone,	
	},
		dataType :"json",
		success : function(data){
			var msg = data.msg;
			if (data.msg != -1 ){
				alert("注册成功");
				parent.layer.closeAll();
				return;
				
			}else{
				alert("注册失败");
				parent.layer.closeAll();
				return;
			}		
		},
		error:function(data){
			alert("sss");
		}
	});
	
}

function selectVip(){
	layer.open({
		type : 2,
		content : ctx + '/cherk/getVip.do',
		title :'输入你的vip',
		area: ['600px', '400px'],
	});
}

function searchVip(){
	var account = $("#my-search-input-vip").val();
	var vip = "";
	$.ajax({
		type:"post",
		url:ctx + "/cherk/seachVip.do",
		data:{"vipname":account},
		success:function(data){
			if (data.msg == "exist"){
				$("#vipAccont").html(account);
				$("#vipAccont").val(account);
				//更新折扣价
				var d = $("#buy-commodity-body").children("tr");
				$.each(d,function(i,domEl){
					var danprice = $(this).children("td").eq(3).html();
					var num = $(this).children("td").eq(4).html();
					$(this).children("td").eq(6).html(parseFloat(danprice)*parseFloat(num)*parseFloat(0.95));
				});
				
				
			}else{
				$("#vipAccont").html("不存在的vip");
				$("#vipAccont").val("novip");
				//更新折扣价
				var d = $("#buy-commodity-body").children("tr");
				$.each(d,function(i,domEl){
					var danprice = $(this).children("td").eq(3).html();
					var num = $(this).children("td").eq(4).html();
					$(this).children("td").eq(6).html(parseFloat(danprice)*parseFloat(num));
				});
			}
		}
	});
}

function checkInput(pageNum){
	var type = $("select").find("option:selected").val(); 
	var commodityName = $("#my-search-input").val();
	if (commodityName.trim() == ""){
		alert("输入不能为空");
		return;
	}
	$.ajax({
		type : "POST",
		url : ctx + "/commodity/listResult.do",
		data : {"type":type,"string":commodityName,"pageNum":pageNum},
		dataType :"json",
		success:function(data){
			messageBoxF(data,pageNum);
			$("#my-search-input").val(commodityName);
		}
	});	
}




function messageBoxF(data,pageNum){
	var html = "";
	var result = data.list;
	//有无数据标志
	var flag = true;
	$("#remind-box").html("");
	$("#messageBox").html("");
	html = '';				
	if (pageNum == 0 ){
		pageNum == 1;
	}
	if (result.length == 0){	
		html += '<tr><td colspan = "7" rowspan = "5" ><h3>无数据</h3></td></tr>';
		flag = false;
	}else {
		for(var i = 0; i < result.length; i++){
			
			var commodityId = result[i].commodityId;
			var commodityCode = result[i].commodityCode;
			var commodityBarcode = result[i].commodityBarcode;
			var commodityName = result[i].commodityName;
			var commodityNowNum = result[i].commodityNowNum;
			var commodityWarnNum = result[i].commodityWarnNum;
			var commodityType = result[i].commodityType;
			var commodityPurchasePrice = result[i].commodityPurchasePrice;
			var commodityAllowSell = result[i].commodityAllowSell;
			var commoditySellingPrice = result[i].commoditySellingPrice;
			var commodityKeyHot = result[i].commodityKeyHot;
			var commodityManufacturer = result[i].commodityManufacturer;
			var commoditySuper = result[i].commoditySuper;
			//不允许销售
			if (commodityAllowSell == 0){
				continue;
			}
			html += '<tr id = '+commodityCode+'><td >'+'###' +'</td><td >' + commodityCode +'</td><td>' + commodityName 
			+'</td><td >'+ commoditySellingPrice +'</td><td style="width: 20%;"><input onkeyup="onlyZ('+commodityCode+')" onafterpaste="onlyZ('+commodityCode+')" id="a'+commodityCode+'" style="width: 40%" value="1"/></td><td >'+ commoditySellingPrice +'</td><td><a href = "javascript:void(0)" onclick = "checkIn('+commodityCode+');">录入</a></td></tr>';
		}
		//分页数据
		var pager = data.page;
		var currentPage = pager.pageNum; //数目
		var total = pager.total; //总记录数
		var pages = pager.pages; //总页数
		var firstPage = pager.firstPage; //第一页
		var prePage = pager.prePage;
		var nextPage = pager.nextPage;
		var lastPage = pager.lastPage;
		var hasPreviousPage = pager.hasPreviousPage;
		var hasNextPage = pager.hasNextPage;
		
		$("#pagining").html("");
		var pagehtml = '';
		if (total == 0){
			pagehtml = '';
		}else{
			pagehtml = '<ul class="pagination">';
			pagehtml += '<li id = "prePage"><a href="javascript:checkInput('+prePage+')" aria-label="Previous" id = "aprePage"> <spanaria-hidden="true">上一页</span></a></li>';
			if (pages > 5 && currentPage + 4 < pages){
				if (currentPage > 4){
					pagehtml += '<li><a href="javascript:checkInput('+(currentPage-4)+')">...</a></li>';
				}else if (currentPage <= 4 && 1< currentPage){
					pagehtml += '<li><a href="javascript:checkInput('+1+')">...</a></li>';
				}else if (currentPage == 1){
					
				}
				
				for (i = 0; i < 4 ;i++){
					pagehtml += '<li><a href="javascript:checkInput('+(currentPage+i)+')" value = "'+(currentPage+i)+'">'+(currentPage+i)+'</a></li>';
				}
				
				pagehtml += '<li><a href="javascript:checkInput('+(currentPage+i)+')">...</a></li>';
					
				pagehtml += '<li><a href="javascript:checkInput('+(pages)+')">'+(pages)+'</a></li>';
			}else if (pages < 5){
				for(i = 1; i <= pages;i++){
					pagehtml += '<li><a href="javascript:checkInput('+i+')">'+i+'</a></li>';
				}
			}else if (currentPage + 4 >= pages){
				if (currentPage - 4 >= 0){
					pagehtml += '<li><a href="javascript:checkInput('+(currentPage-4)+')">...</a></li>';
				}else{
					pagehtml += '<li><a href="javascript:checkInput('+1+')">...</a></li>';
				}
				for(i = pages-4; i <= pages;i++){
					pagehtml += '<li><a href="javascript:checkInput('+i+')">'+i+'</a></li>';
				}
			}
			pagehtml += '<li id = "nextPage"><a href="javascript:checkInput('+nextPage+')" aria-label="Next" id = "anextPage"> <spanaria-hidden="true">下一页</span></a></li>';
			pagehtml += '</ul>';
			
			pagehtml += '<div><span class=" ">到</span>';
			
			pagehtml += '<input class="" style ="width: 40"  id="txtpage" type="text" value="'+pageNum+'" />';
			pagehtml += '<span class = " text-center" >页</span><input type="button" id="pageNumButton" value="确定" onclick = "commodityCommand.pageNumButton('+pages+')"/></div>';
			
		}
		
			$("#pagining").html(pagehtml);
			//修改状态,禁用与激活
			if (pageNum == 1){
				$("#prePage").addClass("disabled");
				$("#aprePage").removeAttr("href");
			}
			if (pageNum == pages){
				$("#nextPage").addClass("disabled");
				$("#anextPage").removeAttr("href");
			}
		
	}
	if (!flag){
		$("#pagining").html("");
	}
	$("#messageBox").html(html);
}
//录入
function checkIn(commodityCode){
	var html = $("#buy-commodity-body").html();
	var buyNum =$("#a"+commodityCode).val();
	var commodityInfo = new Array();
	var vipPrice;
	var flag = true; //没有重复的
	var hasVip = true;
	var vipAcount = $("#vipAccont").val();
	if (vipAcount == 'novip'  || vipAcount == ""){
		hasVip = false;
	}
	
	var html2 = $("#b"+commodityCode).html();
	if (html2 && buyNum!= ""){
		var new_Num = $("#b"+commodityCode).children("td").eq(4).html();
		var new_price = $("#b"+commodityCode).children("td").eq(3).html();
		buyNum =parseInt(buyNum) + parseInt(new_Num);
		price = buyNum * parseFloat(new_price);
		if (!hasVip){
			vipPrice = price;
		}else{
			vipPrice = parseFloat(price) * parseFloat(0.95);
		}
		
		$("#b"+commodityCode).children("td").eq(4).html(buyNum);
		$("#b"+commodityCode).children("td").eq(5).html(price);
		$("#b"+commodityCode).children("td").eq(6).html(vipPrice);
		flag = false;
	}
	
	if (flag && buyNum!= ""){
		for (var i = 1; i < 6 ; i++){
			commodityInfo[i] = $("#"+commodityCode).children("td").eq(i).html();
		}
		if (!hasVip){
			vipPrice = commodityInfo[5];
		}else{
			vipPrice = parseFloat(commodityInfo[5]) * parseFloat(0.95);
		}
		html += '<tr id = "b'+commodityCode+'"><td>#</td><td>'+commodityInfo[1]+'</td><td>'+commodityInfo[2]+'</td><td>'+commodityInfo[3]+'</td><td>'+buyNum+'</td><td>'+parseFloat(commodityInfo[5])*parseFloat(buyNum)+'</td><td>'+vipPrice +'</td><td><a href="javascript:void(0)" onclick = "checkOut('+commodityCode+')">取消录入</a></td></tr>';	
		$("#buy-commodity-body").html(html);
		
	}
	
}

//取消录入
function checkOut(commodityCode){
	$("#b" + commodityCode).detach();
}

function buyCore(){
	var all_price_old = $("#get-money-old").html();
	var all_price_new = $("#get-money-new").html();
	var sum_old = 0;
	var sum_new = 0;	
	var d = $("#buy-commodity-body").children("tr");
	$.each(d,function(i){
		var old_price = $(this).children("td").eq(5).html();
		var new_price = $(this).children("td").eq(6).html();
		sum_old = sum_old + parseFloat(old_price);
		sum_new = sum_new + parseFloat(new_price);
	});
	$("#get-money-old").html(sum_old);
	$("#get-money-new").html(sum_new);
}
//找零
function returnCore(){
	var all_price_new = $("#get-money-new").html();
	var getMoney = $("#pay-money").val();
	if(all_price_new == "" && getMoney == ""){
		alert("不能为空");
		return;
	}
	if(parseFloat(getMoney) < parseFloat(all_price_new)){
		alert("钱不够");
		return ;
	}
	//计算找零
	var returnMoney = parseFloat(getMoney) -  parseFloat(all_price_new);
	var b = sellProduce();
	if (b){
		$("#return-money").html(returnMoney);
		clear();
	}else{
		alert("交易信息错误");
	}
	
	
}
//购买过程
function sellProduce(){
	var hasVip = true;
	var sellInfo = [];
	var vipAcount = $("#vipAccont").val();
	var userAcount = $("#cherkname").html();
	if (vipAcount == 'novip'  || vipAcount == ""){
		hasVip = false;
		vipAcount = 0;
	}
	var d = $("#buy-commodity-body").children("tr");
	$.each(d,function(i){
		var commodityCode = $(this).children("td").eq(1).html();
		var commodityName = $(this).children("td").eq(2).html();
		var commodityPrice = $(this).children("td").eq(3).html();
		var commodityNum = $(this).children("td").eq(4).html();
		var commodityOldAllPrice = $(this).children("td").eq(5).html();
		var commodityNewAllPrice = $(this).children("td").eq(6).html();
		
		sellInfo[i] = {"sellVipId":vipAcount,
					"sellCommodityId":commodityCode,
					"sellCommodityName"	:commodityName,
					"sellPrice":commodityPrice,
					"sellNum":	commodityNum,
					"sellMoney":commodityNewAllPrice,};
	});
	if (isNull(sellInfo)){
		return false;
	}
	var sells = JSON.stringify(sellInfo);
	$.ajax({
		type : "post",
		url : ctx + "/cherk/buy.do?userAcount=" + userAcount,
		contentType: "application/json; charset=utf-8",
		data : sells,
		dataType : "json",
		success:function(data){
			var deal = data.deal;
			if (isNull(deal)){
				var sell = data.sell;
				var name = sell.sellCommodityId;
				alert("信息错误");
				return false;
			}
			$("#dealId").html(deal.dealOrderNumber);
			alert("交易成功");
			//打印清单
		}
	});
	return true;
}


function clear(){
	$("#messageBox").html("");
	$("#buy-commodity-body").html("");
	$("#my-search-input").val("");
	$("#my-search-input-vip").val("");
	$("#get-money-old").html("");
	$("#get-money-new").html("");
	$("#pagining").html("");
	$("#pay-money").val("");	
	
	
}

function reset(){
	clear();
	$("#return-money").html("");
	$("#dealId").html("");
}
function sellLists(){
	//打印清单
	var id = $("#dealId").html();
	if (id == ""){
		alert("无数据");
		return;
	}
	window.open(ctx + '/cherk/showDeal.do?id='+id);
}














