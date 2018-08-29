
var adminCommand = {
	//输出数据与分页
	messageBoxF:function(data,pageNum){
		var html = "";
		var result = data.list;
		$("#remind-box").html("");
		$("#messageBox").html("");
		html = '<h4 class = "text-center">管理员</h4>';
		html += '<h4 class = "text-right"><a href = "javascript:adminCommand.toadd()">增加管理员</a></h4>';
		
		html += '<table class = "col-sm-12 table table-hover text-center table-striped" ><thead><tr><td>id</td><td>管理员帐号</td><td>管理员密码</td><td>邮件</td><td>操作</td></tr></thead>';
		if (pageNum == 0 ){
			pageNum == 1;
		}
		if (result.length == 0){
			html += '<tr ><td colspan = "4" rowspan = "5" ><h3>无数据</h3></td></tr></table>';
		}else {
			for(var i = 0; i < result.length; i++){
				var adminId = result[i].adminId;
				var adminAccount = result[i].adminAccount;
				var adminPassword = result[i].adminPassword;
				var adminEmail = result[i].adminEmail;
				
				html += '<tr><td>' + adminId +'</td><td>'+ adminAccount +'</td><td>' + adminPassword 
				+'</td><td>'+ adminEmail +'</td><td><a href = "#" onclick = "adminCommand.adminEdit('+adminId+',' +pageNum +')">编辑</a>&nbsp;&nbsp;<a href = "#" onclick = "adminCommand.adminDelete('+adminId+',' +pageNum +')">删除</a></td></tr>';
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
				pagehtml += '<li id = "prePage"><a href="javascript:adminCommand.adminList('+prePage+')" aria-label="Previous" id = "aprePage"> <spanaria-hidden="true">上一页</span></a></li>';
				if (pages > 5 && currentPage + 4 < pages){
					if (currentPage > 4){
						pagehtml += '<li><a href="javascript:adminCommand.adminList('+(currentPage-4)+')">...</a></li>';
					}else if (currentPage <= 4 && 1< currentPage){
						pagehtml += '<li><a href="javascript:adminCommand.adminList('+1+')">...</a></li>';
					}else if (currentPage == 1){
						
					}
					
					for (i = 0; i < 4 ;i++){
						pagehtml += '<li><a href="javascript:adminCommand.adminList('+(currentPage+i)+')" value = "'+(currentPage+i)+'">'+(currentPage+i)+'</a></li>';
					}
					
					pagehtml += '<li><a href="javascript:adminCommand.adminList('+(currentPage+i)+')">...</a></li>';
						
					pagehtml += '<li><a href="javascript:adminCommand.adminList('+(pages)+')">'+(pages)+'</a></li>';
				}else if (pages < 5){
					for(i = 1; i <= pages;i++){
						pagehtml += '<li><a href="javascript:adminCommand.adminList('+i+')">'+i+'</a></li>';
					}
				}else if (currentPage + 4 >= pages){
					if (currentPage - 4 >= 0){
						pagehtml += '<li><a href="javascript:adminCommand.adminList('+(currentPage-4)+')">...</a></li>';
					}else{
						pagehtml += '<li><a href="javascript:adminCommand.adminList('+1+')">...</a></li>';
					}
					for(i = pages-4; i <= pages;i++){
						pagehtml += '<li><a href="javascript:adminCommand.adminList('+i+')">'+i+'</a></li>';
					}
				}
				pagehtml += '<li id = "nextPage"><a href="javascript:adminCommand.adminList('+nextPage+')" aria-label="Next" id = "anextPage"> <spanaria-hidden="true">下一页</span></a></li>';
				pagehtml += '</ul>';
				
				pagehtml += '<div><span class=" ">到</span>';
				
				pagehtml += '<input class="" style ="width: 40"  id="txtpage" type="text" value="'+pageNum+'" />';
				pagehtml += '<span class = " text-center" >页</span><input type="button" id="pageNumButton" value="确定" onclick = "adminCommand.pageNumButton('+pages+')"/></div>';
				
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
		$("#messageBox").html(html);
	},
	adminList : function(pageNum){
		var text = $("#findExample").val();
		if (!(text == "" || text == null)){
			adminCommand.find(pageNum);
			return;
		}
		$.ajax({
			type : "POST",
			url : ctx + "/admin/list.do",
			data : {"pageNum":pageNum},
			dataType : "json",
			success : function(data){
				//数据
				adminCommand.messageBoxF(data,pageNum);
			}
		});
	},
	//
	adminDelete:function(adminId,pageNum){
		$.ajax({
			type :"POST",
			url : ctx + "/admin/delete.do",
			data :{"adminId": adminId,"pageNum":pageNum},
			success : function(data){
				alert("删除成功");	
			},
			error:function(data){
				alert("删除失败");
			}
		});
		adminCommand.adminList(1);		
	},
	toadd:function(){		
		layer.open({
			type : 2,
			content : ctx + '/admin/toadd.do',
			title :'增加用户',
			area: ['600px', '400px'],
		});
	},
	adminEdit : function (adminId,pageNum){
		layer.open({
			type : 2,
			content : ctx + '/admin/getadmin.do?adminId='+ adminId,
			title :'编辑用户',
			area: ['600px', '400px'],
		});
	},

	pageNumButton : function (pages){
		var topage = $("#txtpage").val();
		var flag = isPageNum(topage);
		if (flag){
			if (topage > pages){
				adminCommand.adminList(pages);
	    	}else{
	    		adminCommand.adminList(topage);
	    	}
			
		}else{
			alert("页数格式不正确");
		}	
	},

	find:function (pageNum){
		var text = $("#findExample").val();
		$.ajax({
			type : "POST",
			url : ctx + "/admin/listResult.do",
			data : {"string":text,"pageNum":pageNum},
			dataType : "json",
			success : function(data){
				//数据
				adminCommand.messageBoxF(data,pageNum);
				$("#findExample").val(text);
			}
		});
	}
		
}

