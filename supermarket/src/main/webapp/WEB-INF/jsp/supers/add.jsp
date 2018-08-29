<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file= "/common/taglibs.jsp" %>
<%@ include file= "/common/meta.jsp" %>	
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/js/supers/supers.js"></script>
<title>add supers</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-6">
				<div class="text-center">
					<h3>添加供应商</h3>
				</div>
				<hr/>
				<div class = "col-sm-12">
					<form class="form-horizontal text-center" >
						<div class="control-group">
							<label class="control-label" for="inputsupersname">供应商名 :</label>
							<input type="text" id="inputsupersname" placeholder="供应商名" onblur = "supersAddCommond.findU()" onfocus="true">
							<label class="control-label" id = "tip"></label>
						</div>
						<br/>
						
						<div class="control-group">
							<label class="control-label" for="inputLocation">地址 :</label>
							<input type="text" id="inputLocation" placeholder="地址">
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inputPhone">电话:</label>
							<input type="text" id="inputPhone" placeholder="电话">
						</div>
						<br/>		
						<div class="control-group">
							
								<button type="button" class="btn col-sm-offset-4 col-sm-4" onclick = "supersAddCommond.addsupers()">增加供应商</button>
							
						</div>
					</form>
				</div>
			</div>

		</div>
	</div>



<script type = "text/javascript" src = "${ctx}/js/supers/addSupers.js" ></script>
</body>
</html>