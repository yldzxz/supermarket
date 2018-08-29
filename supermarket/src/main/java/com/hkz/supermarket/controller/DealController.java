 
package com.hkz.supermarket.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hkz.supermarket.model.Deal;
import com.hkz.supermarket.service.DealService;


@Controller
@RequestMapping("deal")
public class DealController {
	
	@Resource
	private DealService dealService;
	
	@RequestMapping("list")
	@ResponseBody
	public Map<String,Object> list(int pageNum){
		Map<String,Object> result = new HashMap<String,Object>();
		List<Deal> list = new  ArrayList<Deal>();
		int pageSize  = 3;
		PageHelper.startPage(pageNum,pageSize); 
		list = dealService.selectDeal();
		PageInfo<Deal> page = new PageInfo<Deal>(list);
		result.put("list",list);
		result.put("page", page);	
		result.put("msg", 0);
		return result;
	}
	
	@ResponseBody
	@RequestMapping("listResult")
	public Map<String,Object> listResult(int pageNum,String type){
		Map<String,Object> result = new HashMap<String,Object>();	
		List<Deal> list = new  ArrayList<Deal>();
		int pageSize  = 3;
		if (type.equals("date")){
			PageHelper.startPage(pageNum,pageSize); 
			list = dealService.searchByDealDate();
		}else if(type.equals("sellMoney")){
			PageHelper.startPage(pageNum,pageSize); 
			list = dealService.searchByDealMoney();
		}
		PageInfo<Deal> page = new PageInfo<Deal>(list);
		result.put("list",list);
		result.put("page", page);

		result.put("msg", 0);
		return result;
	}

	@RequestMapping("deal")
	public ModelAndView deal(int dealId){
		ModelAndView result = new ModelAndView();
		Deal deal = dealService.selectDealById(dealId);
		if (deal != null){
			result.addObject(deal);	
		}		
		result.setViewName("deal/showDeal");
		return result;
	}
}
