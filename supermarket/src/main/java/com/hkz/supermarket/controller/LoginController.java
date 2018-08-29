package com.hkz.supermarket.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.hkz.supermarket.model.Admin;
import com.hkz.supermarket.model.User;
import com.hkz.supermarket.service.AdminService;
import com.hkz.supermarket.service.CommodityService;
import com.hkz.supermarket.service.UserService;

@Controller
@RequestMapping("login")
public class LoginController {
	
	@Resource
	private AdminService adminService;
	
	@Resource
	private UserService userService;
	
	@Resource
	private CommodityService commodityService;
	
	
	@RequestMapping("adminIndex")
	public ModelAndView toLogin(){
		//管理员中心页面
		ModelAndView model = new ModelAndView();
		List<String> names = commodityService.searchNumLess();
		model.addObject("names",names);
		model.setViewName("login/adminIndex");
		return model;
	}
	
	@RequestMapping("cherkIndex")
	public String toCherk(){
		//收营员页面
		return "login/cherkIndex";
	}
	
	@RequestMapping("register")
	public String toRegister(){
		return "login/register";
	}
	
	@RequestMapping("findPassword")
	public String toPassword(){
		return "login/findPassword";
	}
	
	@RequestMapping("index")
	public ModelAndView toIndex(HttpServletRequest request,HttpServletResponse response,HttpSession session){
		session.removeAttribute("username");
		session.removeAttribute("utype");
		ModelAndView model = new ModelAndView();
		model.setViewName("login/index");
		return model;
	}
	
	@RequestMapping("login")
	@ResponseBody
	public Map<String,Object> login(HttpServletRequest request,HttpServletResponse response,HttpSession session){
		String username = request.getParameter("username");
		String utype = request.getParameter("utype");
		String password = request.getParameter("password");
		
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("msg", 0);
		result.put("type", "");
		if (utype.equals("admin") && username != null && password != null){
			Admin admin = adminService.selectAdminByName(username);
			if (admin != null && admin.getAdminPassword().equals(password)){
				session.setAttribute("username", username);
				session.setAttribute("utype", utype);
				result.put("account", username);
				result.put("type" , "admin");
			}
			
		}else if (utype.equals("cherk")){
			User user = userService.selectUserByName(username);
			if (user != null && user.getUserPassword().equals(password)){
				session.setAttribute("username", username);
				session.setAttribute("utype", utype);
				result.put("account", username);
				result.put("type", "cherk");
			}	
		}
		return result;
	} 
	
}
