<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file= "/common/taglibs.jsp" %>
<%@ include file= "/common/meta.jsp" %>	
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/js/inbound/inbound.js"></script>
<style>

</style>
<title>add inbound</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="text-center">
					<h3>商品入库</h3>
				</div>		
				<form class="form-horizontal text-center" >
						<div class="control-group">
							<label class="control-label" for="inboundCommodityCode">商品代码 :</label>
							<input type="text" id="inboundCommodityCode" placeholder="商品代码" onblur = "inboundAddCommond.find()" onfocus="true">
							<label class="control-label" id = "tip"></label>
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inboundCommodityName">商品名称 :</label>
							<input type="text" id="inboundCommodityName" placeholder="商品名称" readonly>
						</div>
						<br/>
						
					
						<div class="control-group">
							<label class="control-label" for="inboundCommodityNum">入库数量:</label>
							<input type="text" id="inboundCommodityNum" placeholder="入库数量" onkeyup="inboundAddCommond.commodityNum()" onafterpaste="inboundAddCommond.commodityNum()" >
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inboundCommodityPrice">入库价格 :</label>
							<input type="text" id="inboundCommodityPrice" placeholder="入库价格" readonly>
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inboundCommodityMoney">入库金额:</label>
							<input type="text" id="inboundCommodityMoney" placeholder="入库金额" readonly>
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inboundSuper"> 供应商:</label>
							<input type="text" id="inboundSuper" placeholder="供应商">
						</div>
						
						<br/>
						<div class="control-group">
								<button type="button" class="btn col-sm-offset-4 col-sm-4" onclick = "inboundAddCommond.addInbound()">入库</button>
						</div>
					</form>			
			</div>

		</div>
	</div>


<script type = "text/javascript" src = "${ctx}/js/inbound/addInbound.js" ></script>

</body>
</html>