<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file= "/common/taglibs.jsp" %>
<%@ include file= "/common/meta.jsp" %>	
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/js/supers/supers.js"></script>
<title>edit supers</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-6">
				<div class="text-center">
					<h3>编辑供应商</h3>
				</div>
				<hr/>
				<div class = "col-sm-12">
					<form class="form-horizontal text-center" >
						<div class="control-group">
							<label class="control-label" for="inputPhone">id:</label>
							<input type="text" id="inputPhone" placeholder="id" value = "${supers.supersId }" readonly>
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inputsupersname">供应商名 :</label>
							<input type="text" id="inputsupersname" placeholder="供应商名"  value = "${supers.supersName }" readonly>
							<label class="control-label" id = "tip" ></label>
						</div>
						<br/>
						
						<div class="control-group">
							<label class="control-label" for="inputLocation">地址 :</label>
							<input type="text" id="inputLocation" placeholder="地址" value = "${supers.supersLocation }" >
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inputPhone">电话:</label>
							<input type="text" id="inputPhone" placeholder="电话" value = "${supers.supersPhone }" >
						</div>
						<br/>		
						<div class="control-group">
							
								<button type="button" class="btn col-sm-offset-4 col-sm-4" onclick = "superseditCommond.editsupers()">增加供应商</button>
							
						</div>
					</form>
				</div>
			</div>

		</div>
	</div>



<script type = "text/javascript" src = "${ctx}/js/supers/editSupers.js" ></script>
</body>
</html>