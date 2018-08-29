<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file= "/common/taglibs.jsp" %>
<%@ include file= "/common/meta.jsp" %>	
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${ctx}/js/user/user.js"></script>
<title>add user</title>
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
							<label class="control-label" for="inputUsername">用户名 :</label>
							<input type="text" id="inputUsername" placeholder="用户名" onblur = "userAddCommond.findU()" onfocus="true">
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
							<input type="email" id="inputEmail" placeholder="邮件">
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inputAge">年  &nbsp;&nbsp;&nbsp;龄 :</label>
							<input type="text" id="inputAge" placeholder="年龄">
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="inputSarl">薪  &nbsp;&nbsp;&nbsp;资 :</label>
							<input type="text" id="inputSarl" placeholder="薪资">
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" style = "margin-right:180px">性  &nbsp;&nbsp;&nbsp;别 :</label>
							<div style="position: relative;margin-left: 22px;margin-top: -20px;">
							男<input type="radio" id="inputMan" placeholder="男" name = "sex" value = "男" checked>
							  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
							女<input type="radio" id="inputWomen" placeholder="女" name = "sex" value = "女">
							</div>
						</div>
						<br/>
						<div class="control-group">
							<label class="control-label" for="selectDept" >部&nbsp;&nbsp;&nbsp;门 :</label>
							<select name="selectDept" id="selectDept" style="width: 180px;">   
						        <option value="d1">d1</option>   
						        <option value="d2">d2</option>   
						        <option value="d3">d3</option>   
						        <option value="d4">d4</option>   
						        <option value="d5">d5</option>   
           
      						</select> 
						</div>
						<br/>
						<div class="control-group">
							
								<button type="button" class="btn col-sm-offset-4 col-sm-4" onclick = "userAddCommond.addUser()">增加用户</button>
							
						</div>
					</form>
				</div>
			</div>

		</div>
	</div>



<script type = "text/javascript" src = "${ctx}/js/user/addUser.js" ></script>
</body>
</html>