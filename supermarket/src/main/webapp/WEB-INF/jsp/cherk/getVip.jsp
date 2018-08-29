<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file= "/common/taglibs.jsp" %>
<%@ include file= "/common/meta.jsp" %>	
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/js/cherk/cherk.js"></script>
<title>你的 vip</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-6">
				<div class="text-center">
					<h3>输入你的vip帐号</h3>
				</div>
				<hr/>
				<div class = "col-sm-12">
					<form class="form-horizontal text-center" >
						<div class="control-group">
							<label class="control-label" for="inputAccount">帐号 :</label>
							<input type="text" id="inputAccount" placeholder="帐号">
						</div>
						<br/>
						<div class="control-group">
							
								<button type="button" class="btn col-sm-offset-4 col-sm-4" onclick = "searchVip()">提交</button>
							
						</div>
					</form>
				</div>
			</div>

		</div>
	</div>
</body>
</html>