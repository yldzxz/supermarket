<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file= "/common/taglibs.jsp" %>
<%@ include file= "/common/meta.jsp" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>收银页面</title>
<style>
body{
	/*	background-color : #0C5198; */
		background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#fafafa), to(#0C5198));
	}
	.my-header{
		background:-webkit-gradient(linear, 0% 0%, 100% 100%,from(#273644), to(#fafafa));	
		margin-left :15px;
		margin-right :15px;
		margin-bottom :10px;
		margin-top : 5px;
	}
	.my-h2{
		font-size :20px;
	}
	.su-header{
		color : pink;
		font-weight : bold;
		font-size :30px;
	}
	.my-show-box{
		background-color : #FFFFFF;
		height : 560px;
		margin-left :15px;
		margin-right :15px;
		margin-bottom :10px;
		margin-top : 5px;
	}
	.show-commodity{
		margin-top : 2px;
		height : 400px;
		border : 2px solid #eee;
	}
	.get-commodity{
		margin-top : 2px;
		height : 400px;
		border : 2px solid #eee;
	}
	.my-search{
		margin-left :15px;
		margin-top : 10px;
	}
	.button-search{
		margin-top : 3px;
	}
	.show-commodity-header{
		border-bottom :1px solid #eee;
	}
	.button-get{
		margin-top: 10px;
	}
	.my-show-box-header{
		border-bottom: 1px solid #eee;
		background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#0D83C1), to(#0C5198));
		
	}
	.show-commodity-content{
		height : 300px;
	}
	.show-font{
		font-size:30px;
	}
	a:hover{
	text-decoration:none;
	}
	.pre-scrollable {
    max-height: 180px;
    overflow-y: scroll;
	}
</style>
</head>
<body onload = "disptime()">
	<c:if test = "${empty username}">
			<script>
				window.location.href = "/supermarket/index.jsp";
			</script>
	</c:if>
	<c:if test = "${utype != 'cherk'}">
			<script>
				window.location.href = "/supermarket/index.jsp";
			</script>
	</c:if>
	<div class = "container-fluid">
		<div class = "row">
			<div class = "container-fluid my-header">
				<div class = "col-sm-6 col-xs-6">
					<h3>
					<span class = "col-sm-1 glyphicon glyphicon-shopping-cart www" style = "color:#337ab7;"></span>
					<span class = "su-header"> 超市管理系统</span>
					</h3>
			</div>
			
			<h2 class = "my-h2">
				<a href = "#" class = "text-right col-sm-4 col-xs-4"><span id = "cherkname">${username}</span><span class = "glyphicon glyphicon-user"></span></a>
				
				<!-- <a href = "#" class = ""><span class = "glyphicon glyphicon-cog"></span></a>&nbsp; -->
				<a href = "#" class = "" onclick = "vipRegist();"><span class = "">会员注册</span></a>&nbsp;
				<a href = "${ctx}/login/index.do" class = ""><span >退出</span></a>	
			</h2>
			
			</div>
			<!-- 主页面-->
			<div class = "container-fluid my-show-box">
				<div class = "col-sm-12 col-xs-12 my-show-box-header" ><h3 class = "text-center" ><strong>前台管理页面<strong></h3></div>
				<div class = "row">
					<div class = "col-sm-6 show-commodity">
						<div class = "col-sm-12 text-center" style = "border-bottom :1px solid #eee;">
							<h4><span> 选择商品列表</span></h4>
						</div>
						<div class = "row show-commodity-header">
							<input class = "col-sm-4 my-search" id = "my-search-input" />
							<div class="col-sm-2 my-search-div ">
							  <h4>
							  <select>
								<option value = "name">名称</option>
								<option value = "code">编号</option>
							  </select>
								</h4>
							</div>
							<div class = "col-sm-1 button-search"><a href = "javacript:void(0)" onclick = "checkInput(1)"><h4><span class = "glyphicon glyphicon-search"></span></h4></a></div>
							<!-- <div class= "col-sm-2 button-get">
								<button > 录入商品</button>
							</div> -->
							
							<!-- <div class = "col-sm-12" style = "margin-top:10px;margin-bottom:10px;">
								<div class = "col-sm-2 text-center">会员卡号:</div>
								<div class = "col-sm-3"><input type = "text" style="width:150px;" id = "vipId"/></div>
								<div class = "col-sm-3 text-center"><button onclick = "checkVip();">确认</button></div>
								<div class = "col-sm-3"><span class = "show-vip">11vip</span></div>
																 
							</div> -->
						</div>
						<div class = "col-sm-12 show-commodity-content">
							<div class="col-sm-12 " style = "margin-top:10px;">
							<table  class = "table table-hover text-center table-striped " width = "100%">
								<thead>
								 <tr>
									<td>#</td>
									<td>商品编号</td>
									<td>商品名称</td>
									<td>单价</td>
									<td>数量</td>
									<td>总价</td>
									<td>操作</td>
								</tr>
								</thead>
								<tbody class = "show-commodity-content-tr " id = "messageBox">
									<!-- <tr>
									<td>#</td>
									<td>商品编号</td>
									<td>商品名称</td>
									<td>价格</td>
									<td style="width: 20%">
									<input onkeyup="onlyZ()" onafterpaste="onlyZ()" id= "buyNum" style="width: 30%"/>
									</td>
									<td>操作</td>
								</tr> -->
								</tobody> 
								
							</table>
							<nav aria-label="Page navigation " class = "col-sm-12 text-right row" id = "pagining"></nav>
						</div>
						</div>
						
					</div>
				
				<div class = "col-sm-6 get-commodity">
					<div class = "col-sm-12 text-center" style = "border-bottom :1px solid #eee;">
							<h4><span> 购买商品列表</span></h4>
						</div>
						<div class = "row show-commodity-header">
							<input class = "col-sm-4 my-search" id = "my-search-input-vip" onblur="searchVip();" placeholder = "输入vip"/>
							
							<div class= "col-sm-3 center-block" style = "margin-top: 10px;">
								<span class = ""id = "vipAccont" >vip帐号</span>
							</div>
							<div class= "col-sm-2 button-get">
								<button onclick = "buyCore()"> 购买</button>
							</div>
							<div class= "col-sm-2 button-get">
								<button onclick = "reset()"> 重置</button>
							</div>
						</div>
						<div class = "col-sm-12 show-commodity-content">
							<div class="col-sm-12 pre-scrollable" style = "margin-top:10px;height : 180px;margin-bottom: 40px;">
							<table  class = "table table-hover text-center table-striped " width = "100%">
								<thead>
								<tr>
									<td>#</td>
									<td>商品编号</td>
									<td>商品名称</td>
									<td>单价</td>
									<td>数量</td>
									<td>总价</td>
									<td>折扣价</td>
									<td>操作</td>
								</tr>
								</thead>
								<tbody class = "" id = "buy-commodity-body">
									<!-- <tr>
									<td>#</td>
									<td>商品编号</td>
									<td>商品名称</td>
									<td>单价</td>
									<td>数量</td>
									<td>总价</td>
									<td>折扣价</td>
									<td>操作</td>
									</tr> -->
								</tbody>
							</table>
						</div>
						<div class = "col-sm-6 " ><span  class="show-font" >原价:<span id = "get-money-old"></span></span></div>
						
						<div class = "col-sm-6"><span class="show-font">折扣价格:<span id = "get-money-new"></span></span></div>
				</div>
</div>
				<div class = "col-sm-12">
					<div class = "row" style = "margin-top:20px;">
						
						
						
						<div class = "col-sm-4"><span class="show-font">收入:</span>&nbsp;<span><input style="width:200px;" id = "pay-money" type = "text" onkeyup = "onlyZZZ()" onafterpaste = "onlyZZZ()"/></span></div>
						<div class = "col-sm-4"><input type = "button" onclick = "returnCore()" value ="找零" class="show-font">&nbsp;:&nbsp;<span id = "return-money" class="show-font"></span></div>
						<div class = "col-sm-4"><button class="show-font" onclick = "sellLists()">打印小票</button></div>
						<div style="display:none" id ="dealId"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
<script type = "text/javascript" src = "${ctx}/js/cherk/cherk.js"></script>
</body>
</html>



