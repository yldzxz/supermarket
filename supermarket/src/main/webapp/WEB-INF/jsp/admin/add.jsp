<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file= "/common/taglibs.jsp" %>
<%@ include file= "/common/meta.jsp" %>	
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/js/admin/admin.js"></script>
<title>add admin</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-6">
				<div class="text-center">
					<h3>添加用户</h3>
				</div>
				<hr/>
				<div class = "col-sm-12">
					<form class="form-horizontal text-center" >
						<div class="control-group">
							<label class="control-label" for="inputAdminName">帐号 :</label>
							<input type="text" id="inputAdminName" placeholder="帐号" onblur = "adminAddCommond.findA()" onfocus="true">
							<label class="control-label" id = "tip"></label>
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inputPassword">密  &nbsp;&nbsp;&nbsp;码 :</label>
							<input type="password" id="inputPassword" placeholder="密码">
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inputEmail">邮  &nbsp;&nbsp;&nbsp;件 :</label>
							<input type="text" id="inputEmail" placeholder="邮件">
						</div>
						<br/>
						
						<div class="control-group">
							
								<button type="button" class="btn col-sm-offset-4 col-sm-4" onclick = "adminAddCommond.addAdmin()">增加管理员</button>
							
						</div>
					</form>
				</div>
			</div>

		</div>
	</div>



<script type = "text/javascript" src = "${ctx}/js/admin/addAdmin.js" ></script>
</body>
</html>