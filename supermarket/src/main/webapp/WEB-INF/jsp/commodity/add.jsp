<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file= "/common/taglibs.jsp" %>
<%@ include file= "/common/meta.jsp" %>	
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/js/commodity/commodity.js"></script>
<title>add commodity</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-6">
				<div class="text-center">
					<h3>添加商品</h3>
				</div>
				<hr/>
				<div class = "col-sm-12">
					<form class="form-horizontal text-center" >
						<div class="control-group">
							<label class="control-label" for="commodityCode">商品代码 :</label>
							<input type="text" id="commodityCode" placeholder="商品代码" onblur = "commodityAddCommond.find()" onfocus="true">
							<label class="control-label" id = "tip"></label>
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="commodityName">商品名称 :</label>
							<input type="text" id="commodityName" placeholder="商品名称">
						</div>
						<br/>
						
					
						<div class="control-group">
							<label class="control-label" for="commodityNowNum">库存数量 :</label>
							<input type="text" id="commodityNowNum" placeholder="库存数量">
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="commodityWarnNum">库存警告数量 :</label>
							<input type="text" id="commodityWarnNum" placeholder="库存警告数量">
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="selectType" >类型 :</label>
							<select name="selectType" id="selectType" style="width: 180px;">   
						        <option value="d1">日常品</option>   
						        <option value="d2">零食</option>   
						        <option value="d3">高级品</option>   
      						</select> 
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="commodityPurchasePrice"> 进货价格:</label>
							<input type="text" id="commodityPurchasePrice" placeholder="进货价格">
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="commoditySellingPrice"> 销售价格:</label>
							<input type="text" id="commoditySellingPrice" placeholder="销售价格">
						</div>			
						<br/>
						<div class="control-group">
							<label class="control-label" for="selectSell" >是否允许销售 :</label>
							<select name="selectSell" id="selectSell" style="width: 180px;">   
						        <option value="1">1</option>   
						        <option value="0">0</option>      
      						</select> 
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="commodityKeyHot"> 购买热度:</label>
							<input type="text" id="commodityKeyHot" placeholder="购买热度">
						</div>
						
						<br/>
						<div class="control-group">
							<label class="control-label" for="commodityManufacturer"> 厂商:</label>
							<input type="text" id="commodityManufacturer" placeholder="厂商">
						</div>
						
						<br/>
						<div class="control-group">
							<label class="control-label" for="commoditySuper"> 供应商:</label>
							<input type="text" id="commoditySuper" placeholder="供应商">
						</div>
						
						<br/>
						<div class="control-group">
							
								<button type="button" class="btn col-sm-offset-4 col-sm-4" onclick = "commodityAddCommond.addcommodity()">增加商品</button>
							
						</div>
					</form>
				</div>
			</div>

		</div>
	</div>



<script type = "text/javascript" src = "${ctx}/js/commodity/addCommodity.js" ></script>
</body>
</html>