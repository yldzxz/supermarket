<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file= "/common/taglibs.jsp" %>
<%@ include file= "/common/meta.jsp" %>	
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/js/vip/vip.js"></script>
<title>edit vip</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-6">
				<div class="text-center">
					<h3>edit vip</h3>
				</div>
				<hr/>
				<div class = "col-sm-12">
					<form class="form-horizontal text-center" >
						<div class="control-group">
							<label class="control-label" for="inputId">id :</label>
							<input type="text" id="inputId" placeholder="id" value = "${vip.vipId}" readonly>
							<label class="control-label" id = "tip"></label>
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inputAccount">帐号  :</label>
							<input type="text" id="inputAccount" placeholder="vip名"  value = "${vip.vipAccount}" readonly>
							<label class="control-label" id = "tip"></label>
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inputName">姓&nbsp;&nbsp;&nbsp;名 :</label>
							<input type="text" id="inputName" placeholder="姓名" value = "${vip.vipName}">
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inputUseMoney"> 已用金额:</label>
							<input type="text" id="inputUseMoney" placeholder="已用金额" value = "${vip.vipUsesMoney}">
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inputCode">积分 :</label>
							<input type="text" id="inputCode" placeholder="积分" value = "${vip.vipCode}">
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inputDate" >日期 :</label>
							<input type="datetime-local" id="inputDate" >
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inputPhone">电话 :</label>
							<input type="tel" id="inputPhone" placeholder="电话" value = "${vip.vipPhone}">
						</div>
						
						<br/>
						<div class="control-group">
							
								<button type="button" class="btn col-sm-offset-4 col-sm-4" onclick = "vipEditCommond.editVip()">提交</button>
							
						</div>
					</form>
				</div>
			</div>

		</div>
	</div>



<script type = "text/javascript" src = "${ctx}/js/vip/editVip.js" ></script>
</body>
</html>