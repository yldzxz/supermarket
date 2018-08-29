<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/common/taglibs.jsp"%>
<%@ include file="/common/meta.jsp"%>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/js/login/login.js"></script>
<script type="text/javascript" src="${ctx}/js/user/user.js"></script>
<script type="text/javascript" src="${ctx}/js/vip/vip.js"></script>
<script type="text/javascript" src="${ctx}/js/admin/admin.js"></script>
<script type="text/javascript" src="${ctx}/js/commodity/commodity.js"></script>
<script type="text/javascript" src="${ctx}/js/supers/supers.js"></script>
<script type="text/javascript" src="${ctx}/js/money/input.js"></script>
<script type="text/javascript" src="${ctx}/js/money/output.js"></script>
<script type="text/javascript" src="${ctx}/js/money/allMoney.js"></script>
<script type="text/javascript" src="${ctx}/js/utils/utils.js"></script>
<script type="text/javascript" src="${ctx}/js/sell/sell.js"></script>
<script type="text/javascript" src="${ctx}/js/deal/deal.js"></script>
<script type="text/javascript" src="${ctx}/js/inbound/inbound.js"></script>
<script type="text/javascript" src="${ctx}/js/outbound/outbound.js"></script>
<title>后台管理</title>
<style>

body {
	/*	background-color : #0C5198; */
	background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#fafafa),
		to(#0C5198));
}

.my-h2 {
	font-size: 20px;
}

.my-header {
	background-color: #273644;
	margin-left: 15px;
	margin-right: 15px;
	margin-bottom: 10px;
	margin-top: 5px;
}

.my-h2 a {
	text-decoration: none;
}

.su-header {
	color: pink;
	font-weight: bold;
	font-size: 30px;
}

.show-box {
	margin-bottom: 10px;
	height: 450px;
	border-left-color: black;
	border: 1px;
	background-color: #FFFFFF;
}

.my-nav {
	color: #3399FF;
}

.show-box hr {
	margin-right: 15px;
}
#messageBox{
	height : 240px;
}
</style>

</head>
<body onload="disptime()">
	<c:if test="${empty username}">
		<script>
			window.location.href = ctx + "/index.jsp";
		</script>
	</c:if>

	<c:if test="${utype != 'admin'}">
		<script>
			window.location.href = ctx + "/index.jsp";
		</script>
	</c:if>
	<div class="container-fluid">
		<div class="row ">
			<div class="container-fluid my-header">
				<div class="col-sm-6 col-xs-6">
					<h3>
						<span class="col-sm-1 glyphicon glyphicon-shopping-cart www"
							style="color: #337ab7;"></span> <span class="su-header">
							超市管理系统</span>
					</h3>
				</div>

				<h2 class="my-h2">
					<a href="#" class="text-right col-sm-5 col-xs-5"><span>${username}</span><span
						class="glyphicon glyphicon-user"></span></a> <a href="#" class=""><span
						class="glyphicon glyphicon-cog"></span></a>&nbsp; <a
						href="${ctx}/login/index.do" class=""><span class="">退出</span></a>
				</h2>

			</div>
		</div>

		<nav class="navbar navbar-default my-nav">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed"
						data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
						aria-expanded="false">
						<span class="sr-only">Toggle navigation</span> <span
							class="icon-bar"></span> <span class="icon-bar"></span> <span
							class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#"><span
						class="glyphicon glyphicon-home" aria-hidden="true"></span></a>
				</div>

				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse"
					id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li class="active"><a href="javascript:show();">首页<span class="sr-only">(current)</span></a></li>
						<li><a href="javascript:void(0);" onclick = "commodityCommand.list(1);">商品管理</a></li>
						
						<li class="dropdown"><a href="#" class="dropdown-toggle"
							data-toggle="dropdown" role="button" aria-haspopup="true"
							aria-expanded="false">销售管理<span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href="javascript:void(0);" onclick="sellCommand.list(1)">销售信息</a></li>
								<li><a href="javascript:void(0);" onclick="dealCommand.list(1);">交易信息</a></li>
							</ul>
						</li>
						
						<li class="dropdown"><a href="#" class="dropdown-toggle"
							data-toggle="dropdown" role="button" aria-haspopup="true"
							aria-expanded="false">人员管理<span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href="javascript:void(0);" onclick="adminCommand.adminList(1);">管理员列表</a></li>
								<li><a href="javascript:void(0);" onclick="vipCommand.vipList(1);">会员列表</a></li>
								<li><a href="javascript:void(0);" onclick="userCommand.userList(1);">员工列表</a></li>
							</ul>
						</li>

						<li class="dropdown"><a href="#" class="dropdown-toggle"
							data-toggle="dropdown" role="button" aria-haspopup="true"
							aria-expanded="false">库存管理<span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href="javascript:void(0);" onclick = "inBoundCommand.list(1);">入库管理</a></li>
								<li><a href="javascript:void(0);" onclick = "outBoundCommand.list(1);">出库管理</a></li>
							</ul></li>
						
						<li class="dropdown"><a href="#" class="dropdown-toggle"
							data-toggle="dropdown" role="button" aria-haspopup="true"
							aria-expanded="false">收支情况<span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href="javascript:void(0);" onclick = "inMoneyCommand.list(1);">收入情况</a></li>
								<li><a href="javascript:void(0);" onclick ="outMoneyCommand.list(1);">支出情况</a></li>
								<li><a href="javascript:void(0);" onclick ="allMoneyCommand.list();">总利润</a></li>
							</ul></li>
						
						<li class="dropdown"><a href="#" class="dropdown-toggle"
							data-toggle="dropdown" role="button" aria-haspopup="true"
							aria-expanded="false">其他<span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href="javascript:void(0);" onclick ="supersCommand.supersList(1);">供应商信息</a></li>
								<li><a href="javascript:void(0);"  onclick ="">厂商信息</a></li>
							</ul></li>
						<li><a href="javascript:About();">关于我们</a></li>

					</ul>


				</div>
				<!-- /.navbar-collapse -->
			</div>
			<!-- /.container-fluid -->
		</nav>

		<div class=" show-box container-fluid">
			<div class="col-sm-12">
				<h4>
					<span class="col-sm-2 text-right">当前时间:</span> <span
						class="col-sm-2" id="myclock"></span> <span class="col-sm-2"
						id="my-time"></span> <span class="col-sm-6" id="my-tt"></span>
				</h4>

			</div>

			<hr class="col-sm-11" />


			<div class="col-sm-12" id="remind-box">
				今日提醒
				<hr class="col-sm-11" />
				
				<div>库存告警商品：<br/>
				<c:forEach var = "name" items = "names">
					<span>${name}</span><br/>
				</c:forEach>
				</div>
			</div>



			<div class="row">
				<div class="col-sm-12" id="messageBox">
					
					
					
				</div>
				<nav aria-label="Page navigation " class = "col-sm-12 text-right row" id = "pagining">
					
				</nav>
			</div>
		</div>
		
	</div>

</body>

</html>



