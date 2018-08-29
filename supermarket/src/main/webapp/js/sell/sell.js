
var sellCommand = {
	//输出数据与分页
	messageBoxF:function(data,pageNum){
		var html = "";
		var result = data.list;
		//有无数据标志
		var flag = true;
		$("#remind-box").html("");
		$("#messageBox").html("");
		html = '<h4 class = "text-center">销售信息</h4>';
		html += '<div class = "col-lg-12" style = "font-size:20px;margin-top: 10px;margin-bottom: 10px;"><div class="col-lg-3">';
		html += '<select class="selector"><option value="date">按日期排序</option><option value="sellNum">按销售额排序</option></select>&nbsp;&nbsp;&nbsp;&nbsp;';
		html += '<a class = "" onclick = "sellCommand.sortButton('+pageNum+')"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></a></div>';	
		html += '<span class="col-lg-3">昨日热销:<span id = "yest">'+checkUndefine(data.hotYest[0])+'、'+checkUndefine(data.hotYest[1])+'</span></span>';	
		html += '<span class="col-lg-3">今月热销:<span id = "mouth">'+checkUndefine(data.hotMouth[0])+'、'+checkUndefine(data.hotMouth[1])+'</span></span>';
		html += '<span class="col-lg-3">历史总热销:<span id = "all">'+checkUndefine(data.hot[0])+'、'+checkUndefine(data.hot[1])+'</span></span></div>';
		html += '<table class = "col-sm-12 table table-hover text-center table-striped" ><thead><tr><td>销售单号</td><td>交易单号</td><td>vip号</td><td>商品代码</td><td>商品名称</td><td>销售数量</td><td>销售价格</td><td>销售总价</td><td>销售日期</td></tr></thead>';
		if (pageNum == 0 ){
			pageNum == 1;
		}
		if (result.length == 0){
			
			html += '<tr ><td colspan = "9" rowspan = "5" ><h3>无数据</h3></td></tr></table>';
			flag = false;
		}else {
			for(var i = 0; i < result.length; i++){
				
				var sellId = result[i].sellId;
				var sellOrderNumber = result[i].sellOrderNumber;
				var sellDealNumber = result[i].sellDealNumber;
				var sellVipId = result[i].sellVipId;
				var sellCommodityName = result[i].sellCommodityName;
				var sellCommodityId = result[i].sellCommodityId;
				var sellNum = result[i].sellNum;
				var sellPrice = result[i].sellPrice;
				var sellMoney = result[i].sellMoney;
				var sellDate = result[i].sellDate;

				html += '<tr><td>' + sellOrderNumber 
				+'</td><td>'+ sellDealNumber +'</td><td>' + sellVipId +'</td><td>'
				+  sellCommodityId+'</td><td>' +  sellCommodityName+'</td><td>' + sellNum +'</td><td>'
				+ sellPrice +'</td><td>'+ sellMoney +'</td><td>'+ TimeUtils.formatToDate(sellDate)+'</td></tr>';
			}
			html += '</table>';
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
				pagehtml += '<li id = "prePage"><a href="javascript:sellCommand.list('+prePage+')" aria-label="Previous" id = "aprePage"> <spanaria-hidden="true">上一页</span></a></li>';
				if (pages > 5 && currentPage + 4 < pages){
					if (currentPage > 4){
						pagehtml += '<li><a href="javascript:sellCommand.list('+(currentPage-4)+')">...</a></li>';
					}else if (currentPage <= 4 && 1< currentPage){
						pagehtml += '<li><a href="javascript:sellCommand.list('+1+')">...</a></li>';
					}else if (currentPage == 1){
						
					}
					
					for (i = 0; i < 4 ;i++){
						pagehtml += '<li><a href="javascript:sellCommand.list('+(currentPage+i)+')" value = "'+(currentPage+i)+'">'+(currentPage+i)+'</a></li>';
					}
					
					pagehtml += '<li><a href="javascript:sellCommand.list('+(currentPage+i)+')">...</a></li>';
						
					pagehtml += '<li><a href="javascript:sellCommand.list('+(pages)+')">'+(pages)+'</a></li>';
				}else if (pages < 5){
					for(i = 1; i <= pages;i++){
						pagehtml += '<li><a href="javascript:sellCommand.list('+i+')">'+i+'</a></li>';
					}
				}else if (currentPage + 4 >= pages){
					if (currentPage - 4 >= 0){
						pagehtml += '<li><a href="javascript:sellCommand.list('+(currentPage-4)+')">...</a></li>';
					}else{
						pagehtml += '<li><a href="javascript:sellCommand.list('+1+')">...</a></li>';
					}
					for(i = pages-4; i <= pages;i++){
						pagehtml += '<li><a href="javascript:sellCommand.list('+i+')">'+i+'</a></li>';
					}
				}
				pagehtml += '<li id = "nextPage"><a href="javascript:sellCommand.list('+nextPage+')" aria-label="Next" id = "anextPage"> <spanaria-hidden="true">下一页</span></a></li>';
				pagehtml += '</ul>';
				
				pagehtml += '<div><span class=" ">到</span>';
				
				pagehtml += '<input class="" style ="width: 40"  id="txtpage" type="text" value="'+pageNum+'" />';
				pagehtml += '<span class = " text-center" >页</span><input type="button" id="pageNumButton" value="确定" onclick = "sellCommand.pageNumButton('+pages+')"/></div>';
				
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
	},
	list : function(pageNum){
		var option = $("select").find("option:selected").attr("value");
		if (option == undefined){
			$.ajax({
				type : "POST",
				url : ctx + "/sell/list.do",
				data : {"pageNum":pageNum},
				dataType : "json",
				success : function(data){
					//数据
					sellCommand.messageBoxF(data,pageNum);
				}
			});
		}else {
			sellCommand.sortButton(pageNum);
			return;

		}
	},
	//
	pageNumButton : function (pages){
		var topage = $("#txtpage").val();
		var flag = isPageNum(topage);
		if (flag){
			if (topage > pages){
				sellCommand.list(pages);
	    	}else{
	    		sellCommand.list(topage);
	    	}
			
		}else{
			alert("页数格式不正确");
		}	
	},
	sortButton:function(pageNum){
		var option = $("select").find("option:selected").attr("value");
		$.ajax({
			type : "POST",
			url : ctx + "/sell/listResult.do",
			data : {"pageNum":pageNum,"type":option},
			dataType : "json",
			success : function(data){
				//数据
				sellCommand.messageBoxF(data,pageNum);
				$(".selector").val(option);
			}
		});
		
	}
	
}


