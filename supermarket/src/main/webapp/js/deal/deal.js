
var dealCommand = {
	//输出数据与分页
	messageBoxF:function(data,pageNum){
		var html = "";
		var result = data.list;
		//有无数据标志
		var flag = true;
		$("#remind-box").html("");
		$("#messageBox").html("");
		html = '<h4 class = "text-center">交易信息</h4>';
		html += '<div class = "col-lg-12" style = "font-size:20px;margin-top: 10px;margin-bottom: 10px;"><div class="col-lg-3">';
		html += '<select class="selector"><option value="date">按日期排序</option><option value="sellMoney">按交易额排序</option></select>&nbsp;&nbsp;&nbsp;&nbsp;';
		html += '<a class = "" onclick = "dealCommand.sortButton('+pageNum+')"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></a></div></div>';	
		html += '<table class = "col-sm-12 table table-hover text-center table-striped" ><thead><tr><td>id</td><td>交易单号</td><td>交易金额</td><td>交易vip</td><td>交易日期</td><td>操作</td></tr></thead>';
		if (pageNum == 0 ){
			pageNum == 1;
		}
		if (result.length == 0){
			
			html += '<tr ><td colspan = "5" rowspan = "5" ><h3>无数据</h3></td></tr></table>';
			flag = false;
		}else {
			for(var i = 0; i < result.length; i++){
				
				var dealId = result[i].dealId;
				var dealOrderNumber = result[i].dealOrderNumber;
				var dealMoney = result[i].dealMoney;
				var dealUserNumber = result[i].dealUserNumber;
				var dealDate = result[i].dealDate;
				
				html += '<tr><td>' + dealId 
				+'</td><td>'+ dealOrderNumber +'</td><td>' + dealMoney +'</td><td>'
				+  dealUserNumber+'</td><td>' + TimeUtils.formatToDate(dealDate)+'</td><td>'+'<a href ="javacript:void(0)" onclick = "dealCommand.getDetail('+dealId+')">详情</a>'+ '</td></tr>';
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
				pagehtml += '<li id = "prePage"><a href="javascript:dealCommand.list('+prePage+')" aria-label="Previous" id = "aprePage"> <spanaria-hidden="true">上一页</span></a></li>';
				if (pages > 5 && currentPage + 4 < pages){
					if (currentPage > 4){
						pagehtml += '<li><a href="javascript:dealCommand.list('+(currentPage-4)+')">...</a></li>';
					}else if (currentPage <= 4 && 1< currentPage){
						pagehtml += '<li><a href="javascript:dealCommand.list('+1+')">...</a></li>';
					}else if (currentPage == 1){
						
					}
					
					for (i = 0; i < 4 ;i++){
						pagehtml += '<li><a href="javascript:dealCommand.list('+(currentPage+i)+')" value = "'+(currentPage+i)+'">'+(currentPage+i)+'</a></li>';
					}
					
					pagehtml += '<li><a href="javascript:dealCommand.list('+(currentPage+i)+')">...</a></li>';
						
					pagehtml += '<li><a href="javascript:dealCommand.list('+(pages)+')">'+(pages)+'</a></li>';
				}else if (pages < 5){
					for(i = 1; i <= pages;i++){
						pagehtml += '<li><a href="javascript:dealCommand.list('+i+')">'+i+'</a></li>';
					}
				}else if (currentPage + 4 >= pages){
					if (currentPage - 4 >= 0){
						pagehtml += '<li><a href="javascript:dealCommand.list('+(currentPage-4)+')">...</a></li>';
					}else{
						pagehtml += '<li><a href="javascript:dealCommand.list('+1+')">...</a></li>';
					}
					for(i = pages-4; i <= pages;i++){
						pagehtml += '<li><a href="javascript:dealCommand.list('+i+')">'+i+'</a></li>';
					}
				}
				pagehtml += '<li id = "nextPage"><a href="javascript:dealCommand.list('+nextPage+')" aria-label="Next" id = "anextPage"> <spanaria-hidden="true">下一页</span></a></li>';
				pagehtml += '</ul>';
				
				pagehtml += '<div><span class=" ">到</span>';
				
				pagehtml += '<input class="" style ="width: 40"  id="txtpage" type="text" value="'+pageNum+'" />';
				pagehtml += '<span class = " text-center" >页</span><input type="button" id="pageNumButton" value="确定" onclick = "dealCommand.pageNumButton('+pages+')"/></div>';
				
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
				url : ctx + "/deal/list.do",
				data : {"pageNum":pageNum},
				dataType : "json",
				success : function(data){
					//数据
					dealCommand.messageBoxF(data,pageNum);
				}
			});
		}else {
			dealCommand.sortButton(pageNum);
			return;

		}
	},
	//
	pageNumButton : function (pages){
		var topage = $("#txtpage").val();
		var flag = isPageNum(topage);
		if (flag){
			if (topage > pages){
				dealCommand.list(pages);
	    	}else{
	    		dealCommand.list(topage);
	    	}
			
		}else{
			alert("页数格式不正确");
		}	
	},
	sortButton:function(pageNum){
		var option = $("select").find("option:selected").attr("value");
		$.ajax({
			type : "POST",
			url : ctx + "/deal/listResult.do",
			data : {"pageNum":pageNum,"type":option},
			dataType : "json",
			success : function(data){
				//数据
				dealCommand.messageBoxF(data,pageNum);
				$(".selector").val(option);
			}
		});
		
	},
	//获取详细信息
	getDetail:function(dealId){
		/*layer.open({
			type : 2,
			content : ctx + '/deal/deal.do?dealId='+dealId,
			title :'交易详情',
			area: ['600px', '500px'],	
		});*/
		
		window.open(ctx + '/deal/deal.do?dealId='+dealId);
	}
	
}


