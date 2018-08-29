
var commodityCommand = {
	//输出数据与分页
	messageBoxF:function(data,pageNum){
		var html = "";
		var result = data.list;
		//有无数据标志
		var flag = true;
		$("#remind-box").html("");
		$("#messageBox").html("");
		html = '<h4 class = "text-center">商品管理</h4>';			
		html += '<h4 class = "text-right"><input type = "text" id = "findExample1" placeholder="输入查找商品代码"/>&nbsp;&nbsp;<a href = "javascript:commodityCommand.findByCode('+pageNum+')"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
		html += '<a href = "javascript:commodityCommand.toadd()">新增商品</a></h4>';
		
		html += '<table class = "col-sm-12 table table-hover text-center table-striped" ><thead><tr><td>商品代码</td><td>商品名称</td><td>库存数量</td><td>库存警告数量</td><td>类型</td><td>进货价格</td><td>是否允许销售</td><td>销售价格</td><td>购买热度</td><td>厂商</td><td>供应商</td><td>操作</td></tr></thead>';
		if (pageNum == 0 ){
			pageNum == 1;
		}
		if (result.length == 0){
			
			html += '<tr ><td colspan = "7" rowspan = "5" ><h3>无数据</h3></td></tr></table>';
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
					
				html += '<tr><td>' + commodityCode +'</td><td>' + commodityName 
				+'</td><td>'+ commodityNowNum +'</td><td>' + commodityWarnNum +'</td><td>'
				+ commodityType +'</td><td>' + commodityPurchasePrice +'</td><td>' + commodityAllowSell +'</td><td>'
				+ commoditySellingPrice +'</td><td>'+ commodityKeyHot +'</td><td>'+ commodityManufacturer +'</td><td>'+ commoditySuper +'</td><td><a href = "#" onclick = "commodityCommand.getcommodity('+commodityId+',' +pageNum +')">编辑</a>&nbsp;&nbsp;<a href = "#" onclick = "commodityCommand.del('+commodityId+',' +pageNum +')">删除</a></td></tr>';
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
				pagehtml += '<li id = "prePage"><a href="javascript:commodityCommand.list('+prePage+')" aria-label="Previous" id = "aprePage"> <spanaria-hidden="true">上一页</span></a></li>';
				if (pages > 5 && currentPage + 4 < pages){
					if (currentPage > 4){
						pagehtml += '<li><a href="javascript:commodityCommand.list('+(currentPage-4)+')">...</a></li>';
					}else if (currentPage <= 4 && 1< currentPage){
						pagehtml += '<li><a href="javascript:commodityCommand.list('+1+')">...</a></li>';
					}else if (currentPage == 1){
						
					}
					
					for (i = 0; i < 4 ;i++){
						pagehtml += '<li><a href="javascript:commodityCommand.list('+(currentPage+i)+')" value = "'+(currentPage+i)+'">'+(currentPage+i)+'</a></li>';
					}
					
					pagehtml += '<li><a href="javascript:commodityCommand.list('+(currentPage+i)+')">...</a></li>';
						
					pagehtml += '<li><a href="javascript:commodityCommand.list('+(pages)+')">'+(pages)+'</a></li>';
				}else if (pages < 5){
					for(i = 1; i <= pages;i++){
						pagehtml += '<li><a href="javascript:commodityCommand.list('+i+')">'+i+'</a></li>';
					}
				}else if (currentPage + 4 >= pages){
					if (currentPage - 4 >= 0){
						pagehtml += '<li><a href="javascript:commodityCommand.list('+(currentPage-4)+')">...</a></li>';
					}else{
						pagehtml += '<li><a href="javascript:commodityCommand.list('+1+')">...</a></li>';
					}
					for(i = pages-4; i <= pages;i++){
						pagehtml += '<li><a href="javascript:commodityCommand.list('+i+')">'+i+'</a></li>';
					}
				}
				pagehtml += '<li id = "nextPage"><a href="javascript:commodityCommand.list('+nextPage+')" aria-label="Next" id = "anextPage"> <spanaria-hidden="true">下一页</span></a></li>';
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
	},
	list : function(pageNum){
		var text = $("#findExample1").val();
		if (!(text == "" || text == null)){
			commodityCommand.findByCode(pageNum);
			return;
		}
		$.ajax({
			type : "POST",
			url : ctx + "/commodity/list.do",
			data : {"pageNum":pageNum},
			dataType : "json",
			success : function(data){
				//数据
				commodityCommand.messageBoxF(data,pageNum);
			}
		});
	},
	//
	del:function(commodityId,pageNum){
		$.ajax({
			type :"POST",
			url : ctx + "/commodity/delete.do",
			data :{"commodityId": commodityId,"pageNum":pageNum},
			success : function(data){
				alert("删除成功");	
			},
			error:function(data){
				alert("删除失败");
			}
		});
		commodityCommand.list(1);		
	},
	toadd:function(){		
		layer.open({
			type : 2,
			content : ctx + '/commodity/toadd.do',
			title :'增加商品',
			area: ['600px', '400px'],
		});
	},
	getcommodity : function (commodityId,pageNum){
		layer.open({
			type : 2,
			content : ctx + '/commodity/getCommodity.do?commodityId='+ commodityId,
			title :'编辑商品',
			area: ['600px', '400px'],
		});
	},

	pageNumButton : function (pages){
		var topage = $("#txtpage").val();
		var flag = isPageNum(topage);
		if (flag){
			if (topage > pages){
				commodityCommand.list(pages);
	    	}else{
	    		commodityCommand.list(topage);
	    	}
			
		}else{
			alert("页数格式不正确");
		}	
	},

	findByCode:function (pageNum){
		var text = $("#findExample1").val();
		var type = "code";
		$.ajax({
			type : "POST",
			url : ctx + "/commodity/listResult.do",
			data : {"string":text,"pageNum":pageNum,"type":type},
			dataType : "json",
			success : function(data){
				//数据
				commodityCommand.messageBoxF(data,pageNum);
				$("#findExample1").val(text);
			}
		});
	}	
}


