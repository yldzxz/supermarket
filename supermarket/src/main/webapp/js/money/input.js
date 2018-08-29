
var inMoneyCommand = {
	//输出数据与分页
	messageBoxF:function(data,pageNum){
		var html = "";
		var result = data.list;
		//有无数据标志
		var flag = true;
		$("#remind-box").html("");
		$("#messageBox").html("");
		html = '<h4 class = "text-center">收入管理</h4>';
		html += '<h4 class = "text-center" style="margin-top: 20px;margin-bottom: 60px;"><button class = "col-lg-1" onclick = "inMoneyCommand.pet()">总收入</button><span class = "col-lg-2" id = "pet">0</span>';
		html +='<button class = "col-lg-1" onclick = "inMoneyCommand.petMouth()">本月收入</button><span class = "col-lg-2" id = "petMouth">0</span><button class = "col-lg-1" onclick = "inMoneyCommand.petToday()">今日收入</button><span class = "col-lg-2" id = "petToday">0</span></h4>';
		html += '<table class = "col-sm-12 table table-hover text-center table-striped" ><thead><tr><td>id</td><td>交易号</td><td>交易类型</td><td>收入</td><td>时间</td></tr></thead>';
		if (pageNum == 0 ){
			pageNum == 1;
		}
		if (result.length == 0){	
			html += '<tr ><td colspan = "6" rowspan = "5" ><h3>无数据</h3></td></tr></table>';
			flag = false;
		}else {
			for(var i = 0; i < result.length; i++){
				
				var inputmoneyId = result[i].inputmoneyId;
				var inputmoneyDealNumber = result[i].inputmoneyDealNumber;
				var inputmoneyType = result[i].inputmoneyType;
				var inputmoneyGet = result[i].inputmoneyGet;
				var inputmoneyTime = result[i].inputmoneyTime;

				
				html += '<tr><td>' + inputmoneyId +'</td><td>' 
				+ inputmoneyDealNumber +'</td><td>'+ inputmoneyType +'</td><td>'+ inputmoneyGet +'</td><td>'+TimeUtils.formatToDate(inputmoneyTime)	+'</td><td></tr>';
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
				pagehtml += '<li id = "prePage"><a href="javascript:inMoneyCommand.list('+prePage+')" aria-label="Previous" id = "aprePage"> <spanaria-hidden="true">上一页</span></a></li>';
				if (pages > 5 && currentPage + 4 < pages){
					if (currentPage > 4){
						pagehtml += '<li><a href="javascript:inMoneyCommand.list('+(currentPage-4)+')">...</a></li>';
					}else if (currentPage <= 4 && 1< currentPage){
						pagehtml += '<li><a href="javascript:inMoneyCommand.list('+1+')">...</a></li>';
					}else if (currentPage == 1){
						
					}
					
					for (i = 0; i < 4 ;i++){
						pagehtml += '<li><a href="javascript:inMoneyCommand.list('+(currentPage+i)+')" value = "'+(currentPage+i)+'">'+(currentPage+i)+'</a></li>';
					}
					
					pagehtml += '<li><a href="javascript:inMoneyCommand.list('+(currentPage+i)+')">...</a></li>';
						
					pagehtml += '<li><a href="javascript:inMoneyCommand.list('+(pages)+')">'+(pages)+'</a></li>';
				}else if (pages < 5){
					for(i = 1; i <= pages;i++){
						pagehtml += '<li><a href="javascript:inMoneyCommand.list('+i+')">'+i+'</a></li>';
					}
				}else if (currentPage + 4 >= pages){
					if (currentPage - 4 >= 0){
						pagehtml += '<li><a href="javascript:inMoneyCommand.list('+(currentPage-4)+')">...</a></li>';
					}else{
						pagehtml += '<li><a href="javascript:inMoneyCommand.list('+1+')">...</a></li>';
					}
					for(i = pages-4; i <= pages;i++){
						pagehtml += '<li><a href="javascript:inMoneyCommand.list('+i+')">'+i+'</a></li>';
					}
				}
				pagehtml += '<li id = "nextPage"><a href="javascript:inMoneyCommand.list('+nextPage+')" aria-label="Next" id = "anextPage"> <spanaria-hidden="true">下一页</span></a></li>';
				pagehtml += '</ul>';
				
				pagehtml += '<div><span>到</span>';
				
				pagehtml += '<input class="" style ="width: 40"  id="txtpage" type="text" value="'+pageNum+'" />';
				pagehtml += '<span class = " text-center" >页</span><input type="button" id="pageNumButton" value="确定" onclick = "inMoneyCommand.pageNumButton('+pages+')"/></div>';
				
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
			url : ctx + "/money/inputList.do",
			data : {"pageNum":pageNum},
			dataType : "json",
			success : function(data){
				//数据
				inMoneyCommand.messageBoxF(data,pageNum);
			}
		});
	},
	
	pageNumButton : function (pages){
		var topage = $("#txtpage").val();
		var flag = isPageNum(topage);
		if (flag){
			if (topage > pages){
				inMoneyCommand.list(pages);
	    	}else{
	    		inMoneyCommand.list(topage);
	    	}
			
		}else{
			alert("页数格式不正确");
		}	
	},
	pet:function(){
		$.ajax({
			type : "POST",
			url : ctx + "/money/pet.do",
			dataType : "json",
			success : function(data){
				//数据
				var num = data.pet;
				$("#pet").html(num);
			}
		});
	},
	petToday:function(){
		$.ajax({
			type : "POST",
			url : ctx + "/money/pet.do",
			data:{"Type":"day"},
			dataType : "json",
			success : function(data){
				//数据
				var num = data.pet;
				$("#petToday").html(num);
			}
		});
	},
	petMouth:function(){
		$.ajax({
			type : "POST",
			url : ctx + "/money/pet.do",
			data:{"Type":"mouth"},
			dataType : "json",
			success : function(data){
				//数据
				var num = data.pet;
				$("#petMouth").html(num);
			}
		});
	},
	clear : function(){
		$("#pet").html(0);
		$("#petMouth").html(0);
		$("#petToday").html(0);
		
	}
}


