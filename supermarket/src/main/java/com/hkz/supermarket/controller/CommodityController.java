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
import com.hkz.supermarket.model.Commodity;
import com.hkz.supermarket.service.CommodityService;

@Controller
@RequestMapping("commodity")
public class CommodityController {
	
	@Resource
	private CommodityService commodityService;
	
	@RequestMapping("toadd")
	public String toadd(){
		return "commodity/add";
	}
	
	@RequestMapping("getCommodity")
	public ModelAndView toedit(int commodityId){
		ModelAndView model = new ModelAndView();
		model.setViewName("commodity/edit");
		Commodity commodity = commodityService.selectByPrimaryKey(commodityId);
		
		model.addObject("commodity", commodity);
		return model;
	}
	
	@RequestMapping("list")
	@ResponseBody
	public Map<String,Object> list(int pageNum){
		Map<String,Object> result = new HashMap<String,Object>();
		List<Commodity> list = new  ArrayList<Commodity>();
		int pageSize  = 3;
		PageHelper.startPage(pageNum,pageSize); 
		list = commodityService.selectCommodity();
		PageInfo<Commodity> page = new PageInfo<Commodity>(list);
		result.put("list",list);
		result.put("page", page);
		result.put("msg", 0);
		return result;
	}
	
	@RequestMapping("delete")
	@ResponseBody	
	public Map<String,Object> delete(HttpServletRequest request){
		Map<String,Object> result = new HashMap<String,Object>();
		String commodityId = request.getParameter("commodityId");
		int id = 0;
		try{
			id = Integer.parseInt(commodityId);
		}catch(Exception e){
			e.printStackTrace();
		}
		int data = commodityService.deleteCommodityById(id);
		result.put("msg",data);
		return result;
	}
	
	@ResponseBody
	@RequestMapping("add")
	public Map<String,Object> add(HttpServletRequest request,Commodity Commodity){
		
		Map<String,Object> result = new HashMap<String,Object>();
		

		int data = commodityService.addCommodity(Commodity);
		result.put("msg",data);
		return result;
	}
	
	@ResponseBody
	@RequestMapping("edit")
	public Map<String,Object> edit(Commodity Commodity){
		Map<String,Object> result = new HashMap<String,Object>();
		int data = commodityService.updateCommodity(Commodity);
		result.put("msg",data);
		return result;
	}
	
	
	@ResponseBody
	@RequestMapping("findName")
	public Map<String,Object> find(String Commodityname){
		Map<String,Object> result = new HashMap<String,Object>();
		Commodity Commodity = commodityService.selectCommodityByName(Commodityname);
		if (Commodity != null){
			result.put("msg", "exist");
		}else{
			result.put("msg", "noExist");
		}
		return result;
	}
	
	@ResponseBody
	@RequestMapping("listResult")
	public Map<String,Object> listResult(String string,int pageNum,String type){
		Map<String,Object> result = new HashMap<String,Object>();
		
		List<Commodity> list = new  ArrayList<Commodity>();
		
		int pageSize  = 3;
		if (type.equals("code")){
			PageHelper.startPage(pageNum,pageSize); 
			list = commodityService.searchByCode(string);
		}else if(type.equals("name")){
			PageHelper.startPage(pageNum,pageSize); 
			list = commodityService.searchByName(string);
		}
		PageInfo<Commodity> page = new PageInfo<Commodity>(list);
		result.put("list",list);
		result.put("page", page);
		result.put("msg", 0);
		return result;
	}
}
