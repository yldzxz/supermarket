<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file= "/common/taglibs.jsp" %>
<%@ include file= "/common/meta.jsp" %>	
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>showDeal</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="text-center">
					<h3>详情清单</h3>
				</div>
				<hr/>
				<table class = "col-sm-12 table table-hover text-center table-striped " >
					<thread><tr><td>销售单号</td><td>交易单号</td><td>vip号</td><td>商品代码</td><td>商品名称</td><td>销售数量</td><td>销售价格</td><td>销售总价</td><td>销售日期</td></tr></thread>
					<tbody>
						<c:forEach var = "items" items="${deal.sells}">
							<tr><td>${items.sellOrderNumber}</td>
							<td>${items.sellDealNumber}</td>
							<td>${items.sellVipId}</td>
							<td>${items.sellCommodityId}</td>
							<td>${items.sellCommodityName}</td>
							<td>${items.sellNum}</td>
							<td>${items.sellPrice}</td>
							<td>${items.sellMoney}</td>
							<td>${items.sellDate}</td></tr>
						</c:forEach>
					</tbody>
				</table>
			</div>

		</div>
	</div>
</body>
</html>