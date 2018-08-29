<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file= "/common/taglibs.jsp" %>
<%@ include file= "/common/meta.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>登录</title>

<style>
	.login-content{
		position : absolute;
		background-image:url("img/login/login.png");
    	background-repeat: no-repeat;
    	background-position: center center;
    	height:450px;
    }
    .login-head{
		    font-weight: bold;
    }
    .login-button{
    	
    }
    .login-box{
    	  position: absolute;
	    margin-top: 72px; 
    }
    .login-a{
    	position: absolute;
	    margin-top: 10px;
	   color:black;
    }
   
    a:hover {
	text-decoration: none;
}
	body{
		background-image:url("img/login/loginBack.jpg");
    	background-repeat: no-repeat;
    	background-position: center center;	
	}
</style>

</head>
<body>

	<div class = "container-fluid">
		<div class = "row" >
			<div class = "col-sm-offset-2 col-sm-8 login-content">
				<div class = "row">			
				<h1 class = "login-head text-center"> 超市管理系统</h1>
				</div>
				<div class = "row ">
					<form action = "#"  class = "col-sm-offset-5 col-sm-4 login-box ">
						用户名:<input type="text"  name="username" id="username"><br/><br/>
						密　码:<input type="password" name="password" id="password" /><br/><br/>
						收银员<input type="radio" value="cherk" name = "utype"/>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						管理员<input type = "radio" value = "admin" name = "utype" checked><br/><br/>
						<div class = "row">
							<input class = "col-sm-offset-1 col-sm-9 " type="button" value="登录" onclick="login();"/>
						</div>
						<div class = "row">
						<a href = "#" class = "col-sm-offset-1 login-a">忘记密码?</a>
						<a href = "#" class = "col-sm-offset-7  login-a text-right">立即注册</a>
						</div>
					</form>
				</div> 
			</div>
			
		</div>
	</div>
</body>
<script type = "text/javascript" src = "${ctx}/js/login/login.js"></script>
</html>