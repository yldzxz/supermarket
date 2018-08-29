
var inBoundCommand = {
	//输出数据与分页
	messageBoxF:function(data,pageNum){
		var html = "";
		var result = data.list;
		//有无数据标志
		var flag = true;
		$("#remind-box").html("");
		$("#messageBox").html("");
		html = '<h4 class = "text-center">入库管理</h4>';			
		html += '<div class = "col-sm-12" style = "font-size:18px;margin-top:10px;margin-bottom:10px;" ><a href = "javascript:void(0);" onclick = "inBoundCommand.toadd()">新增入库</a></div>';
		
		html += '<table class = "col-sm-12 table table-hover text-center table-striped" ><thead><tr><td>入库单号</td><td>商品代码</td><td>商品名</td><td>入库数量</td><td>入库价格</td><td>入库总价</td><td>入库日期</td><td>供应商</td><td>操作</td></tr></thead>';
		if (pageNum == 0 ){
			pageNum == 1;
		}
		if (result.length == 0){
			
			html += '<tr ><td colspan = "9" rowspan = "5" ><h3>无数据</h3></td></tr></table>';
			flag = false;
		}else {
			for(var i = 0; i < result.length; i++){
				
				var inboundId = result[i].inboundId;
				var inboundOrderNumber = result[i].inboundOrderNumber;
				var inboundCommodityId = result[i].inboundCommodityId;
				var inboundCommodityName = result[i].inboundCommodityName;
				var inboundCommodityNum = result[i].inboundCommodityNum;
				var inboundCommodityPrice = result[i].inboundCommodityPrice;
				
				var inboundMoney = result[i].inboundMoney;
				var inboundDate = result[i].inboundDate;
				var inboundSuperId = result[i].inboundSuperId;
					
				html += '<tr><td>' + inboundOrderNumber 
				+'</td><td>'+ inboundCommodityId +'</td><td>' + inboundCommodityName +'</td><td>'
				+ inboundCommodityNum +'</td><td>' + inboundCommodityPrice +'</td><td>' + inboundMoney +'</td><td>'
				+ inboundDate +'</td><td>'+ inboundSuperId +'</td><td><a href = "#" onclick = "inBoundCommand.del('+inboundId+',' +pageNum +')">删除</a></td></tr>';
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
				pagehtml += '<li id = "prePage"><a href="javascript:inBoundCommand.list('+prePage+')" aria-label="Previous" id = "aprePage"> <spanaria-hidden="true">上一页</span></a></li>';
				if (pages > 5 && currentPage + 4 < pages){
					if (currentPage > 4){
						pagehtml += '<li><a href="javascript:inBoundCommand.list('+(currentPage-4)+')">...</a></li>';
					}else if (currentPage <= 4 && 1< currentPage){
						pagehtml += '<li><a href="javascript:inBoundCommand.list('+1+')">...</a></li>';
					}else if (currentPage == 1){
						
					}
					
					for (i = 0; i < 4 ;i++){
						pagehtml += '<li><a href="javascript:inBoundCommand.list('+(currentPage+i)+')" value = "'+(currentPage+i)+'">'+(currentPage+i)+'</a></li>';
					}
					
					pagehtml += '<li><a href="javascript:inBoundCommand.list('+(currentPage+i)+')">...</a></li>';
						
					pagehtml += '<li><a href="javascript:inBoundCommand.list('+(pages)+')">'+(pages)+'</a></li>';
				}else if (pages < 5){
					for(i = 1; i <= pages;i++){
						pagehtml += '<li><a href="javascript:inBoundCommand.list('+i+')">'+i+'</a></li>';
					}
				}else if (currentPage + 4 >= pages){
					if (currentPage - 4 >= 0){
						pagehtml += '<li><a href="javascript:inBoundCommand.list('+(currentPage-4)+')">...</a></li>';
					}else{
						pagehtml += '<li><a href="javascript:inBoundCommand.list('+1+')">...</a></li>';
					}
					for(i = pages-4; i <= pages;i++){
						pagehtml += '<li><a href="javascript:inBoundCommand.list('+i+')">'+i+'</a></li>';
					}
				}
				pagehtml += '<li id = "nextPage"><a href="javascript:inBoundCommand.list('+nextPage+')" aria-label="Next" id = "anextPage"> <spanaria-hidden="true">下一页</span></a></li>';
				pagehtml += '</ul>';
				
				pagehtml += '<div><span class=" ">到</span>';
				
				pagehtml += '<input class="" style ="width: 40"  id="txtpage" type="text" value="'+pageNum+'" />';
				pagehtml += '<span class = " text-center" >页</span><input type="button" id="pageNumButton" value="确定" onclick = "inBoundCommand.pageNumButton('+pages+')"/></div>';
				
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
		$.ajax({
			type : "POST",
			url : ctx + "/inbound/list.do",
			data : {"pageNum":pageNum},
			dataType : "json",
			success : function(data){
				//数据
				inBoundCommand.messageBoxF(data,pageNum);
			}
		});
	},
	//
	del:function(inboundId,pageNum){
		$.ajax({
			type :"POST",
			url : ctx + "/inbound/delete.do",
			data :{"inboundId": inboundId,"pageNum":pageNum},
			success : function(data){
				alert("删除成功");	
			},
			error:function(data){
				alert("删除失败");
			}
		});
		inBoundCommand.list(1);		
	},
	
	toadd:function(){		
		layer.open({
			type : 2,
			content : ctx + '/inbound/toadd.do',
			title :'新增入库',
			area: ['600px', '400px'],
			
		});
		
		
		
	},
	

	pageNumButton : function (pages){
		var topage = $("#txtpage").val();
		var flag = isPageNum(topage);
		if (flag){
			if (topage > pages){
				inBoundCommand.list(pages);
	    	}else{
	    		inBoundCommand.list(topage);
	    	}
			
		}else{
			alert("页数格式不正确");
		}	
	},

	
}


