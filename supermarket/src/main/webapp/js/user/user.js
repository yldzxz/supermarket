
var userCommand = {
	//输出数据与分页
	messageBoxF:function(data,pageNum){
		var html = "";
		var result = data.list;
		//有无数据标志
		var flag = true;
		$("#remind-box").html("");
		$("#messageBox").html("");
		html = '<h4 class = "text-center">用户管理</h4>';
//		html += '<h4 class = "text-right"><a href = "'+ctx+'/user/toadd.do'+'">增加用户</a></h4>';			
		html += '<h4 class = "text-right"></h4>';
		html += '<h4 class = "text-right"><input type = "text" id = "findExample" placeholder="输入查找用户名"/>&nbsp;&nbsp;<a href = "javascript:userCommand.find('+pageNum+')"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
		html += '<a href = "javascript:userCommand.toadd()">增加用户</a></h4>';
		
		html += '<table class = "col-sm-12 table table-hover text-center table-striped" ><thead><tr><td>用户名</td><td>用户密码</td><td>邮件</td><td>年龄</td><td>性别</td><td>薪资</td><td>部门</td><td>操作</td></tr></thead>';
		if (pageNum == 0 ){
			pageNum == 1;
		}
		if (result.length == 0){
			
			html += '<tr ><td colspan = "8" rowspan = "5" ><h3>无数据</h3></td></tr></table>';
			flag = false;
		}else {
			for(var i = 0; i < result.length; i++){
				var userId = result[i].userId;
				var userAccount = result[i].userAccount;
				var userPassword = result[i].userPassword;
				var userEmail = result[i].userEmail;
				var userAge = result[i].userAge;
				var userSex = result[i].userSex;
				var userSalary = result[i].userSalary;
				var userDepartId = result[i].userDepartId;
				
				html += '<tr><td>' + userAccount +'</td><td>' + userPassword 
				+'</td><td>'+ userEmail +'</td><td>' + userAge +'</td><td>'
				+ userSex +'</td><td>' + userSalary +'</td><td>'+ userDepartId +'</td><td><a href = "#" onclick = "userCommand.userEdit('+userId+',' +pageNum +')">编辑</a>&nbsp;&nbsp;<a href = "#" onclick = "userCommand.userDelete('+userId+',' +pageNum +')">删除</a></td></tr>';
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
				pagehtml += '<li id = "prePage"><a href="javascript:userCommand.userList('+prePage+')" aria-label="Previous" id = "aprePage"> <spanaria-hidden="true">上一页</span></a></li>';
				if (pages > 5 && currentPage + 4 < pages){
					if (currentPage > 4){
						pagehtml += '<li><a href="javascript:userCommand.userList('+(currentPage-4)+')">...</a></li>';
					}else if (currentPage <= 4 && 1< currentPage){
						pagehtml += '<li><a href="javascript:userCommand.userList('+1+')">...</a></li>';
					}else if (currentPage == 1){
						
					}
					
					for (i = 0; i < 4 ;i++){
						pagehtml += '<li><a href="javascript:userCommand.userList('+(currentPage+i)+')" value = "'+(currentPage+i)+'">'+(currentPage+i)+'</a></li>';
					}
					
					pagehtml += '<li><a href="javascript:userCommand.userList('+(currentPage+i)+')">...</a></li>';
						
					pagehtml += '<li><a href="javascript:userCommand.userList('+(pages)+')">'+(pages)+'</a></li>';
				}else if (pages < 5){
					for(i = 1; i <= pages;i++){
						pagehtml += '<li><a href="javascript:userCommand.userList('+i+')">'+i+'</a></li>';
					}
				}else if (currentPage + 4 >= pages){
					if (currentPage - 4 >= 0){
						pagehtml += '<li><a href="javascript:userCommand.userList('+(currentPage-4)+')">...</a></li>';
					}else{
						pagehtml += '<li><a href="javascript:userCommand.userList('+1+')">...</a></li>';
					}
					for(i = pages-4; i <= pages;i++){
						pagehtml += '<li><a href="javascript:userCommand.userList('+i+')">'+i+'</a></li>';
					}
				}
				pagehtml += '<li id = "nextPage"><a href="javascript:userCommand.userList('+nextPage+')" aria-label="Next" id = "anextPage"> <spanaria-hidden="true">下一页</span></a></li>';
				pagehtml += '</ul>';
				
				pagehtml += '<div><span class=" ">到</span>';
				
				pagehtml += '<input class="" style ="width: 40"  id="txtpage" type="text" value="'+pageNum+'" />';
				pagehtml += '<span class = " text-center" >页</span><input type="button" id="pageNumButton" value="确定" onclick = "userCommand.pageNumButton('+pages+')"/></div>';
				
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
	userList : function(pageNum){
		var text = $("#findExample").val();
		if (!(text == "" || text == null)){
			userCommand.find(pageNum);
			return;
		}
		$.ajax({
			type : "POST",
			url : ctx + "/user/list.do",
			data : {"pageNum":pageNum},
			dataType : "json",
			success : function(data){
				//数据
				userCommand.messageBoxF(data,pageNum);
			}
		});
	},
	//
	userDelete:function(userId,pageNum){
		$.ajax({
			type :"POST",
			url : ctx + "/user/delete.do",
			data :{"userId": userId,"pageNum":pageNum},
			success : function(data){
				alert("删除成功");	
			},
			error:function(data){
				alert("删除失败");
			}
		});
		userCommand.userList(1);		
	},
	toadd:function(){		
		layer.open({
			type : 2,
			content : ctx + '/user/toadd.do',
			title :'增加用户',
			area: ['600px', '400px'],
		});
	},
	userEdit : function (userId,pageNum){
		layer.open({
			type : 2,
			content : ctx + '/user/getUser.do?userId='+ userId,
			title :'编辑用户',
			area: ['600px', '400px'],
		});
	},

	pageNumButton : function (pages){
		var topage = $("#txtpage").val();
		var flag = isPageNum(topage);
		if (flag){
			if (topage > pages){
				userCommand.userList(pages);
	    	}else{
	    		userCommand.userList(topage);
	    	}
			
		}else{
			alert("页数格式不正确");
		}	
	},

	find:function (pageNum){
		var text = $("#findExample").val();
		
		$.ajax({
			type : "POST",
			url : ctx + "/user/listResult.do",
			data : {"string":text,"pageNum":pageNum},
			dataType : "json",
			success : function(data){
				//数据
				userCommand.messageBoxF(data,pageNum);
				$("#findExample").val(text);
			}
		});
	}
		
}


