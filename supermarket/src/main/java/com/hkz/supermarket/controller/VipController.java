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
import com.hkz.supermarket.model.Vip;

import com.hkz.supermarket.service.VipService;

@Controller
@RequestMapping("vip")
public class VipController {
	
	@Resource
	private VipService vipService;
	
	@RequestMapping("toadd")
	public String toadd(){
		return "vip/add";
	}
	
	@RequestMapping("getVip")
	public ModelAndView toedit(int vipId){
		ModelAndView model = new ModelAndView();
		model.setViewName("vip/edit");
		Vip vip = vipService.selectByPrimaryKey(vipId);
		
		model.addObject("vip", vip);
		return model;
	}
	
	@RequestMapping("list")
	@ResponseBody
	public Map<String,Object> list(int pageNum){
		Map<String,Object> result = new HashMap<String,Object>();
		List<Vip> list = new  ArrayList<Vip>();
		int pageSize  = 3;
		PageHelper.startPage(pageNum,pageSize); 
		list = vipService.selectVip();
		PageInfo<Vip> page = new PageInfo<Vip>(list);
		result.put("list",list);
		result.put("page", page);
		result.put("msg", 0);
		return result;
	}
	
	@RequestMapping("delete")
	@ResponseBody	
	public Map<String,Object> delete(HttpServletRequest request){
		Map<String,Object> result = new HashMap<String,Object>();
		String vipId = request.getParameter("vipId");
		int id = 0;
		try{
			id = Integer.parseInt(vipId);
		}catch(Exception e){
			e.printStackTrace();
		}
		int data = vipService.deleteVipById(id);
		result.put("msg",data);
		return result;
	}
	
	@ResponseBody
	@RequestMapping("add")
	public Map<String,Object> add(HttpServletRequest request,Vip vip){
		
		Map<String,Object> result = new HashMap<String,Object>();
		

		int data = vipService.addVip(vip);
		result.put("msg",data);
		return result;
	}
	
	@ResponseBody
	@RequestMapping("edit")
	public Map<String,Object> edit(Vip vip){
		Map<String,Object> result = new HashMap<String,Object>();
		int data = vipService.updateVip(vip);
		result.put("msg",data);
		return result;
	}
	
	
	@ResponseBody
	@RequestMapping("findName")
	public Map<String,Object> find(String vipname){
		Map<String,Object> result = new HashMap<String,Object>();
		Vip Vip = vipService.selectVipByName(vipname);
		if (Vip != null){
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
		
		List<Vip> list = new  ArrayList<Vip>();
		int pageSize  = 3;
		PageHelper.startPage(pageNum,pageSize); 
		list = vipService.searchVipByName(string);
		PageInfo<Vip> page = new PageInfo<Vip>(list);
		result.put("list",list);
		result.put("page", page);
		result.put("msg", 0);
		return result;
	}
	
}
