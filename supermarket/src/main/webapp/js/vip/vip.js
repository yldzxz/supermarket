var vipCommand = {
		messageBoxFV:function (data,pageNum){
			var html = "";
			var result = data.list;
			var flag = true;
			$("#remind-box").html("");
			$("#messageBox").html("");
			html = '<h4 class = "text-center">vip管理</h4>';
//			html += '<h4 class = "text-right"><a href = "'+ctx+'/vip/toadd.do'+'">增加用户</a></h4>';			
			html += '<h4 class = "text-right"></h4>';
			html += '<h4 class = "text-right"><input type = "text" id = "findExample" placeholder="输入查找vip"/>&nbsp;&nbsp;<a href = "javascript:vipCommand.find('+pageNum+')"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
			html += '<a href = "javascript:vipCommand.toadd()">增加vip</a></h4>';
			
			html += '<table class = "col-sm-12 table table-hover text-center table-striped" ><thead><tr><td>vip帐号</td><td>名字</td><td>已使用金额</td><td>积分</td><td>日期</td><td>电话</td><td>操作</td></tr></thead>';
			if (pageNum == 0 ){
				pageNum == 1;
			}
			if (result.length == 0){
				html += '<tr ><td colspan = "7" rowspan = "5" ><h3>无数据</h3></td></tr></table>';
				flag = false;
			}else {
				for(var i = 0; i < result.length; i++){
					var vipId = result[i].vipId;
					var vipAccount = result[i].vipAccount;
					var vipName = result[i].vipName;
					var vipUsesMoney = result[i].vipUsesMoney;
					var vipCode = result[i].vipCode;
					var vipDate = result[i].vipDate;
					var vipPhone = result[i].vipPhone;		
					html += '<tr><td>' + vipAccount +'</td><td>' + vipName 
					+'</td><td>'+ vipUsesMoney +'</td><td>' + vipCode +'</td><td>'
					+ vipDate +'</td><td>' + vipPhone +'</td><td><a href = "#" onclick = "vipCommand.vipEdit('+vipId+',' +pageNum +')">编辑</a>&nbsp;&nbsp;<a href = "#" onclick = "vipCommand.vipDelete('+vipId+',' +pageNum +')">删除</a></td></tr>';
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
					pagehtml += '<li id = "prePage"><a href="javascript:vipCommand.vipList('+prePage+')" aria-label="Previous" id = "aprePage"> <spanaria-hidden="true">上一页</span></a></li>';
					if (pages > 5 && currentPage + 4 < pages){
						if (currentPage > 4){
							pagehtml += '<li><a href="javascript:vipCommand.vipList('+(currentPage-4)+')">...</a></li>';
						}else if (currentPage <= 4 && 1< currentPage){
							pagehtml += '<li><a href="javascript:vipCommand.vipList('+1+')">...</a></li>';
						}else if (currentPage == 1){
							
						}
						
						for (i = 0; i < 4 ;i++){
							pagehtml += '<li><a href="javascript:vipCommand.vipList('+(currentPage+i)+')" value = "'+(currentPage+i)+'">'+(currentPage+i)+'</a></li>';
						}
						
						pagehtml += '<li><a href="javascript:vipCommand.vipList('+(currentPage+i)+')">...</a></li>';
							
						pagehtml += '<li><a href="javascript:vipCommand.vipList('+(pages)+')">'+(pages)+'</a></li>';
					}else if (pages < 5){
						for(i = 1; i <= pages;i++){
							pagehtml += '<li><a href="javascript:vipCommand.vipList('+i+')">'+i+'</a></li>';
						}
					}else if (currentPage + 4 >= pages){
						if (currentPage - 4 >= 0){
							pagehtml += '<li><a href="javascript:vipCommand.vipList('+(currentPage-4)+')">...</a></li>';
						}else{
							pagehtml += '<li><a href="javascript:vipCommand.vipList('+1+')">...</a></li>';
						}
						for(i = pages-4; i <= pages;i++){
							pagehtml += '<li><a href="javascript:vipCommand.vipList('+i+')">'+i+'</a></li>';
						}
					}
					pagehtml += '<li id = "nextPage"><a href="javascript:vipCommand.vipList('+nextPage+')" aria-label="Next" id = "anextPage"> <spanaria-hidden="true">下一页</span></a></li>';
					pagehtml += '</ul>';
					
					pagehtml += '<div><span>到</span>';
					
					pagehtml += '<input class="" style ="width: 40"  id="txtpage" type="text" value="'+pageNum+'" />';
					pagehtml += '<span class = " text-center" >页</span><input type="button" id="pageNumButton" value="确定" onclick = "vipCommand.pageNumButton('+pages+')"/></div>';
					
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

		vipList:function (pageNum){
			var text = $("#findExample").val();
			if (!(text == "" || text == null)){
				vipCommand.findVip(pageNum);
				return;
			}
			
			$.ajax({
				type : "POST",
				url : ctx + "/vip/list.do",
				data : {"pageNum":pageNum},
				dataType : "json",
				success : function(data){
					//数据
					vipCommand.messageBoxFV(data,pageNum);
				}
			});
		},

		vipDelete:function (vipId,pageNum){
			
			$.ajax({
				type :"POST",
				url : ctx + "/vip/delete.do",
				data :{"vipId": vipId,"pageNum":pageNum},
				success : function(data){
					alert("删除成功");	
				},
				error:function(data){
					alert("删除失败");
				}
			});
			vipCommand.vipList(1);
		},

		toadd:function (){
			
		/*	$.post(ctx + '/vip/toadd.do',{},function(str){
				layer.open({
					type : 1,
					content:str,
				})
			});
		*/	
			layer.open({
				type : 2,
				content : ctx + '/vip/toadd.do',
				title :'增加vip',
				area: ['600px', '400px'],
			});
		}
,
		vipEdit:function (vipId,pageNum){
			layer.open({
				type : 2,
				content : ctx + '/vip/getVip.do?vipId='+ vipId,
				title :'编辑vip',
				area: ['600px', '400px'],
			});
		}
,
		pageNumButton:function (pages){
			var topage = $("#txtpage").val();
			var flag = isPageNum(topage);
			if (flag){
				if (topage > pages){
					vipCommand.vipList(pages);
		    	}else{
		    		vipCommand.vipList(topage);
		    	}
				
			}else{
				alert("页数格式不正确");
			}	
		}
,
		find:function (pageNum){
			var text = $("#findExample").val();
			$.ajax({
				type : "POST",
				url : ctx + "/vip/listResult.do",
				data : {"string":text,"pageNum":pageNum},
				dataType : "json",
				success : function(data){
					//数据
					vipCommand.messageBoxFV(data,pageNum);
					$("#findExample").val(text);
				}
			});
		}	
}





