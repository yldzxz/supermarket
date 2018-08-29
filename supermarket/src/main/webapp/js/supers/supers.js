
var supersCommand = {
	//输出数据与分页
	messageBoxF:function(data,pageNum){
		var html = "";
		var result = data.list;
		//有无数据标志
		var flag = true;
		$("#remind-box").html("");
		$("#messageBox").html("");
		html = '<h4 class = "text-center">供应商管理</h4>';
		html += '<h4 class = "text-right">';
		html += '<a href = "javascript:supersCommand.toadd()">增加供应商</a></h4>';
		
		html += '<table class = "col-sm-12 table table-hover text-center table-striped" ><thead><tr><td>供应商名</td><td>地址</td><td>电话</td><td>操作</td></tr></thead>';
		if (pageNum == 0 ){
			pageNum == 1;
		}
		if (result.length == 0){
			
			html += '<tr ><td colspan = "5" rowspan = "5" ><h3>无数据</h3></td></tr></table>';
			flag = false;
		}else {
			for(var i = 0; i < result.length; i++){
				var supersId = result[i].supersId;
				var supersName = result[i].supersName;
				var supersLocation = result[i].supersLocation;
				var supersPhone = result[i].supersPhone;
				
				
				html += '<tr><td>' + supersName +'</td><td>' + supersLocation 
				+'</td><td>'+ supersPhone  +'</td><td><a href = "#" onclick = "supersCommand.supersEdit('+supersId+',' +pageNum +')">编辑</a>&nbsp;&nbsp;<a href = "#" onclick = "supersCommand.supersDelete('+supersId+',' +pageNum +')">删除</a></td></tr>';
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
				pagehtml += '<li id = "prePage"><a href="javascript:supersCommand.supersList('+prePage+')" aria-label="Previous" id = "aprePage"> <spanaria-hidden="true">上一页</span></a></li>';
				if (pages > 5 && currentPage + 4 < pages){
					if (currentPage > 4){
						pagehtml += '<li><a href="javascript:supersCommand.supersList('+(currentPage-4)+')">...</a></li>';
					}else if (currentPage <= 4 && 1< currentPage){
						pagehtml += '<li><a href="javascript:supersCommand.supersList('+1+')">...</a></li>';
					}else if (currentPage == 1){
						
					}
					
					for (i = 0; i < 4 ;i++){
						pagehtml += '<li><a href="javascript:supersCommand.supersList('+(currentPage+i)+')" value = "'+(currentPage+i)+'">'+(currentPage+i)+'</a></li>';
					}
					
					pagehtml += '<li><a href="javascript:supersCommand.supersList('+(currentPage+i)+')">...</a></li>';
						
					pagehtml += '<li><a href="javascript:supersCommand.supersList('+(pages)+')">'+(pages)+'</a></li>';
				}else if (pages < 5){
					for(i = 1; i <= pages;i++){
						pagehtml += '<li><a href="javascript:supersCommand.supersList('+i+')">'+i+'</a></li>';
					}
				}else if (currentPage + 4 >= pages){
					if (currentPage - 4 >= 0){
						pagehtml += '<li><a href="javascript:supersCommand.supersList('+(currentPage-4)+')">...</a></li>';
					}else{
						pagehtml += '<li><a href="javascript:supersCommand.supersList('+1+')">...</a></li>';
					}
					for(i = pages-4; i <= pages;i++){
						pagehtml += '<li><a href="javascript:supersCommand.supersList('+i+')">'+i+'</a></li>';
					}
				}
				pagehtml += '<li id = "nextPage"><a href="javascript:supersCommand.supersList('+nextPage+')" aria-label="Next" id = "anextPage"> <spanaria-hidden="true">下一页</span></a></li>';
				pagehtml += '</ul>';
				
				pagehtml += '<div><span class=" ">到</span>';
				
				pagehtml += '<input class="" style ="width: 40"  id="txtpage" type="text" value="'+pageNum+'" />';
				pagehtml += '<span class = " text-center" >页</span><input type="button" id="pageNumButton" value="确定" onclick = "supersCommand.pageNumButton('+pages+')"/></div>';
				
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
	supersList : function(pageNum){
		var text = $("#findExample").val();
		if (!(text == "" || text == null)){
			supersCommand.find(pageNum);
			return;
		}
		$.ajax({
			type : "POST",
			url : ctx + "/supers/list.do",
			data : {"pageNum":pageNum},
			dataType : "json",
			success : function(data){
				//数据
				supersCommand.messageBoxF(data,pageNum);
			}
		});
	},
	//
	supersDelete:function(supersId,pageNum){
		$.ajax({
			type :"POST",
			url : ctx + "/supers/delete.do",
			data :{"supersId": supersId,"pageNum":pageNum},
			success : function(data){
				alert("删除成功");	
			},
			error:function(data){
				alert("删除失败");
			}
		});
		supersCommand.supersList(1);		
	},
	toadd:function(){		
		layer.open({
			type : 2,
			content : ctx + '/supers/toadd.do',
			title :'增加用户',
			area: ['600px', '400px'],
		});
	},
	supersEdit : function (supersId,pageNum){
		layer.open({
			type : 2,
			content : ctx + '/supers/getSupers.do?SupersId='+ supersId,
			title :'编辑用户',
			area: ['600px', '400px'],
		});
	},

	pageNumButton : function (pages){
		var topage = $("#txtpage").val();
		var flag = isPageNum(topage);
		if (flag){
			if (topage > pages){
				supersCommand.supersList(pages);
	    	}else{
	    		supersCommand.supersList(topage);
	    	}
			
		}else{
			alert("页数格式不正确");
		}	
	},

	find:function (pageNum){
		var text = $("#findExample").val();
		
		$.ajax({
			type : "POST",
			url : ctx + "/supers/listResult.do",
			data : {"string":text,"pageNum":pageNum},
			dataType : "json",
			success : function(data){
				//数据
				supersCommand.messageBoxF(data,pageNum);
				$("#findExample").val(text);
			}
		});
	}
		
}


