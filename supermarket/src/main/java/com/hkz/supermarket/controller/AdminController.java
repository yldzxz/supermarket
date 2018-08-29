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
import com.hkz.supermarket.model.Admin;
import com.hkz.supermarket.service.AdminService;

@Controller
@RequestMapping("admin")
public class AdminController {

	@Resource
	private AdminService adminService;
	
	@RequestMapping("toadd")
	public String toadd(){
		return "admin/add";
	}
	
	@RequestMapping("getadmin")
	public ModelAndView toedit(int adminId){
		ModelAndView model = new ModelAndView();
		model.setViewName("admin/edit");
		Admin admin = adminService.selectByPrimaryKey(adminId);
		
		model.addObject("admin", admin);
		return model;
	}
	
	@RequestMapping("list")
	@ResponseBody
	public Map<String,Object> list(int pageNum){
		Map<String,Object> result = new HashMap<String,Object>();
		List<Admin> list = new  ArrayList<Admin>();
		int pageSize  = 3;
		PageHelper.startPage(pageNum,pageSize); 
		list = adminService.selectAdmin();
		PageInfo<Admin> page = new PageInfo<Admin>(list);
		result.put("list",list);
		result.put("page", page);
		result.put("msg", 0);
		return result;
	}
	
	@RequestMapping("delete")
	@ResponseBody	
	public Map<String,Object> delete(HttpServletRequest request){
		Map<String,Object> result = new HashMap<String,Object>();
		String adminId = request.getParameter("adminId");
		int id = 0;
		try{
			id = Integer.parseInt(adminId);
		}catch(Exception e){
			e.printStackTrace();
		}
		int data = adminService.deleteAdminById(id);
		result.put("msg",data);
		return result;
	}
	
	@ResponseBody
	@RequestMapping("add")
	public Map<String,Object> add(HttpServletRequest request,Admin admin){
		
		Map<String,Object> result = new HashMap<String,Object>();
		

		int data = adminService.addAdmin(admin);
		result.put("msg",data);
		return result;
	}
	
	@ResponseBody
	@RequestMapping("edit")
	public Map<String,Object> edit(Admin admin){
		Map<String,Object> result = new HashMap<String,Object>();
		int data = adminService.updateAdmin(admin);
		result.put("msg",data);
		return result;
	}
	
	
	@ResponseBody
	@RequestMapping("findName")
	public Map<String,Object> find(String adminname){
		Map<String,Object> result = new HashMap<String,Object>();
		Admin admin = adminService.selectAdminByName(adminname);
		if (admin != null){
			result.put("msg", "exist");
		}else{
			result.put("msg", "noExist");
		}
		return result;
	}
		
}
