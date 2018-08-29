<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ include file= "/common/meta.jsp" %>
<%@ include file= "/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link type="text/css" rel="stylesheet" href="css/common.css">
<link type="text/css" rel="stylesheet" href="css/bootstrap/bootstrap.css">
<link type="text/css" rel="stylesheet" href="css/bootstrap/bootstrap.min.css">
<link type="text/css" rel="stylesheet" href="css/bootstrap/bootstrap-theme.css">
<link type="text/css" rel="stylesheet" href="css/bootstrap/bootstrap-theme.min.css">

<script type="text/javascript" src="js/jquery/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="js/bootstrap/bootstrap.js"></script>

<title>找回密码</title>
<script type = "text/javascript">
	function find(data){
		if (data == 1){
			$(".find-password-first-box").show();
			$(".find-password-sucesss-box").hide();
			
		}
		if (data == 2){
			$(".find-password-sucesss-box").show();
			$(".find-password-first-box").hide();
		}
	}
	
	function check(){
		alert("sss");
		return false;
	}
</script>

<style>
body{
	
		background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#fafafa), to(#0C5198));
	}
	.my-header{
		background:-webkit-gradient(linear, 0% 0%, 100% 100%,from(#273644), to(#fafafa));	
		margin-left :15px;
		margin-right :15px;
		margin-bottom :10px;
		margin-top : 5px;
	}
.su-header{
		color : pink;
		font-weight : bold;
		font-size :30px;
	}
	.my-show-box-header{
		border-bottom: 1px solid #eee;
		background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#0D83C1), to(#0C5198));
		
	}
	.my-show-box{
		background-color : #FFFFFF;
		height : 520px;
		margin-left :15px;
		margin-right :15px;
		margin-bottom :10px;
		margin-top : 5px;
	}
	.find-password-box{
		margin-top : 2px;
		height : 350px;
		border : 1px solid #eee;
	}
	.password-input{
		margin-top :20px;
	}
	
</style>
</head>
<body onload = "find(1);">
	<div class = "container-fluid">
		<div class = "row">
			<div class = "col-sm-12 col-xs-12 my-header">
					<h3>
					<span class = "col-sm-1 glyphicon glyphicon-shopping-cart www" style = "color:#337ab7;"></span>
					<span class = "su-header"> 超市管理系统</span>
					</h3>
			</div>
		
		<div class = "container-fluid my-show-box">
				<div class = "col-sm-12 col-xs-12 my-show-box-header" ><h3 class = "text-center" ><strong>找回密码<strong></h3></div>
				<div class = "row">
					<div class = "col-sm-offset-4 col-sm-6 find-password-box find-password-first-box">
								
							<div class = "col-sm-12 password-input">
								<div class= "col-sm-2">账号:</div><input type = "text" class = "col-sm-5 "id= "username" />
								<div class = "col-sm-5">提示</div>
							</div>
							<div class = "col-sm-12 password-input">
								<div class= "col-sm-2">邮箱:</div><input type = "text" class = "col-sm-5" id= "email"/>
								<div class = "col-sm-5">提示</div>	
							</div>
							<div class = "col-sm-12 password-input">
							
								<div class= "col-sm-2">验证码:</div><input type = "text" class = "col-sm-5" id = "yzm"/>
								<div class = "col-sm-5">提示</div>	
							</div>
							
							<div class = "col-sm-12 password-input">
								<div class = "col-sm-6">验证码图片</div>
								<a class = "col-sm-2"> 刷新</a>
							</div>
							
							<div class = "col-sm-12 password-input text-center">
								<button class = "col-sm-offset-1 col-sm-6 submit-button text-center" style="background-color:#73B0E4;" onclick = "check();">下一步</button> 
							</div>
						
					</div>
					
					
					<div class = "col-sm-offset-4 col-sm-6 find-password-box find-password-sucesss-box">
							
							<div class = "col-sm-12 password-input">
								<div class= "col-sm-2">密码:</div><input type = "text" class = "col-sm-5 " />
								<div class = "col-sm-5">提示</div>
							</div>
							<div class = "col-sm-12 password-input">
								<div class= "col-sm-2">确认密码:</div><input type = "text" class = "col-sm-5"/>
								<div class = "col-sm-5">提示</div>	
							</div>
						
							<div class = "col-sm-12 password-input text-center">
								<button class = "col-sm-offset-1 col-sm-6 submit-button text-center" style="background-color:#73B0E4;">	确认修改</button> 
							</div>
						
					</div>
			</div>
		</div>
		
		
		</div>
	</div>

</body>
</html>



