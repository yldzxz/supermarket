package com.hkz.supermarket.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hkz.supermarket.model.User;
import com.hkz.supermarket.service.UserService;

@Controller
@RequestMapping("user")
public class UserController {
	
	@Resource
	private UserService userService;
	
	@RequestMapping("toadd")
	public String toadd(){
		return "user/add";
	}
	
	@RequestMapping("getUser")
	public ModelAndView toedit(int userId){
		ModelAndView model = new ModelAndView();
		model.setViewName("user/edit");
		User user = userService.selectUserById(userId);
		
		model.addObject("user", user);
		return model;
	}
	
	@RequestMapping("list")
	@ResponseBody
	public Map<String,Object> list(int pageNum){
		Map<String,Object> result = new HashMap<String,Object>();
		List<User> list = new  ArrayList<User>();
		int pageSize  = 3;
		PageHelper.startPage(pageNum,pageSize); 
		list = userService.selectUser();
		PageInfo<User> page = new PageInfo<User>(list);
		result.put("list",list);
		result.put("page", page);
		result.put("msg", 0);
		return result;
	}
	
	@RequestMapping("delete")
	@ResponseBody	
	public Map<String,Object> delete(HttpServletRequest request){
		Map<String,Object> result = new HashMap<String,Object>();
		String userId = request.getParameter("userId");
		int id = 0;
		try{
			id = Integer.parseInt(userId);
		}catch(Exception e){
			e.printStackTrace();
		}
		int data = userService.deleteUserById(id);
		result.put("msg",data);
		return result;
	}
	
	@ResponseBody
	@RequestMapping("add")
	public Map<String,Object> add(HttpServletRequest request,User user){
		
		Map<String,Object> result = new HashMap<String,Object>();
		

		int data = userService.addUser(user);
		result.put("msg",data);
		return result;
	}
	
	@ResponseBody
	@RequestMapping("edit")
	public Map<String,Object> edit(User user){
		Map<String,Object> result = new HashMap<String,Object>();
		int data = userService.updateUser(user);
		result.put("msg",data);
		return result;
	}
	
	
	@ResponseBody
	@RequestMapping("findName")
	public Map<String,Object> find(String username){
		Map<String,Object> result = new HashMap<String,Object>();
		User user = userService.selectUserByName(username);
		if (user != null){
			result.put("msg", "exist");
		}else{
			result.put("msg", "noExist");
		}
		return result;
	}
	
	@ResponseBody
	@RequestMapping("listResult")
	public Map<String,Object> listResult(String string,int pageNum){
		Map<String,Object> result = new HashMap<String,Object>();
		
		List<User> list = new  ArrayList<User>();
		int pageSize  = 3;
		PageHelper.startPage(pageNum,pageSize); 
		list = userService.searchByName(string);
		PageInfo<User> page = new PageInfo<User>(list);
		result.put("list",list);
		result.put("page", page);
		result.put("msg", 0);
		return result;
	}
}
