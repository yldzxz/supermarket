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
import com.hkz.supermarket.model.Supers;
import com.hkz.supermarket.service.SuperService;

@Controller
@RequestMapping("supers")
public class SupersController {
	
	@Resource
	private SuperService superService;
	
	@RequestMapping("toadd")
	public String toadd(){
		return "supers/add";
	}
	
	@RequestMapping("getSupers")
	public ModelAndView toedit(int SupersId){
		ModelAndView model = new ModelAndView();
		model.setViewName("supers/edit");
		Supers Supers = superService.selectSupersById(SupersId);
		
		model.addObject("supers", Supers);
		return model;
	}
	
	@RequestMapping("list")
	@ResponseBody
	public Map<String,Object> list(int pageNum){
		Map<String,Object> result = new HashMap<String,Object>();
		List<Supers> list = new  ArrayList<Supers>();
		int pageSize  = 3;
		PageHelper.startPage(pageNum,pageSize); 
		list = superService.selectSupers();
		PageInfo<Supers> page = new PageInfo<Supers>(list);
		result.put("list",list);
		result.put("page", page);
		result.put("msg", 0);
		return result;
	}
	
	@RequestMapping("delete")
	@ResponseBody	
	public Map<String,Object> delete(HttpServletRequest request){
		Map<String,Object> result = new HashMap<String,Object>();
		String SupersId = request.getParameter("supersId");
		int id = 0;
		try{
			id = Integer.parseInt(SupersId);
		}catch(Exception e){
			e.printStackTrace();
		}
		int data = superService.deleteSupersById(id);
		result.put("msg",data);
		return result;
	}
	
	@ResponseBody
	@RequestMapping("add")
	public Map<String,Object> add(HttpServletRequest request,Supers supers){
		
		Map<String,Object> result = new HashMap<String,Object>();
		

		int data = superService.addSupers(supers);
		result.put("msg",data);
		return result;
	}
	
	@ResponseBody
	@RequestMapping("edit")
	public Map<String,Object> edit(Supers Supers){
		Map<String,Object> result = new HashMap<String,Object>();
		int data = superService.updateSupers(Supers);
		result.put("msg",data);
		return result;
	}
	
	
	@ResponseBody
	@RequestMapping("findName")
	public Map<String,Object> find(String supersname){
		Map<String,Object> result = new HashMap<String,Object>();
		Supers Supers = superService.selectSupersByName(supersname);
		if (Supers != null){
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
		
		List<Supers> list = new  ArrayList<Supers>();
		int pageSize  = 3;
		PageHelper.startPage(pageNum,pageSize); 
		list = superService.searchByName(string);
		PageInfo<Supers> page = new PageInfo<Supers>(list);
		result.put("list",list);
		result.put("page", page);
		result.put("msg", 0);
		return result;
	}
}
