
package com.hkz.supermarket.controller;  
//收入

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
import com.hkz.supermarket.model.Inbound;
import com.hkz.supermarket.service.CommodityService;
import com.hkz.supermarket.service.InboundService;
import com.hkz.supermarket.utils.Utils;

@Controller
@RequestMapping("inbound")
public class InboundController {
	@Resource
	private InboundService inboundService;
	
	@Resource
	private CommodityService commodityService;
	
	@RequestMapping("toadd")
	public ModelAndView addV(){
		ModelAndView model = new ModelAndView();
		model.setViewName("inbound/add");
		return model;
	}
	
	
	@RequestMapping("list")
	@ResponseBody
	public Map<String,Object> list(int pageNum){
		Map<String,Object> result = new HashMap<String,Object>();
		List<Inbound> list = new  ArrayList<Inbound>();
		int pageSize  = 3;
		PageHelper.startPage(pageNum,pageSize); 
		list = inboundService.selectInbound();
		PageInfo<Inbound> page = new PageInfo<Inbound>(list);
		result.put("list",list);
		result.put("page", page);
		result.put("msg", 0);
		return result;
	}
	
	@RequestMapping("delete")
	@ResponseBody	
	public Map<String,Object> delete(HttpServletRequest request){
		Map<String,Object> result = new HashMap<String,Object>();
		String inboundId = request.getParameter("inboundId");
		int id = 0;
		try{
			id = Integer.parseInt(inboundId);
		}catch(Exception e){
			e.printStackTrace();
		}
		int data =inboundService.deleteInboundById(id);
		result.put("msg",data);
		return result;
	}
	
	@ResponseBody
	@RequestMapping("add")
	public Map<String,Object> add(HttpServletRequest request,Inbound inbound){
		
		Map<String,Object> result = new HashMap<String,Object>();
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		
		inbound.setInboundOrderNumber(Utils.inboundId(date));
		inbound.setInboundDate(sdf.format(date));
		int msg = inboundService.insertInbound(inbound);
		result.put("msg", msg);
		return result;
	}
	
	@ResponseBody
	@RequestMapping("findName")
	public Map<String,Object> find(String commodityname){
		Map<String,Object> result = new HashMap<String,Object>();
		
		List<Commodity> list = commodityService.searchByCode(commodityname);
		if (list != null && list.size() != 0){
			Commodity commodity = list.get(0);
			result.put("commodity",commodity);
			result.put("msg", "exist");
		}else{
			result.put("msg", "noExist");
		}
		return result;
	}
}
