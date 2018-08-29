 
package com.hkz.supermarket.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hkz.supermarket.model.Sell;
import com.hkz.supermarket.service.SellService;

@Controller
@RequestMapping("sell")
public class SellController {
	@Resource
	private SellService sellService;
	
	@RequestMapping("list")
	@ResponseBody
	public Map<String,Object> list(int pageNum){
		Map<String,Object> result = new HashMap<String,Object>();
		List<Sell> list = new  ArrayList<Sell>();
		int pageSize  = 3;
		PageHelper.startPage(pageNum,pageSize); 
		list = sellService.selectSell();
		PageInfo<Sell> page = new PageInfo<Sell>(list);
		result.put("list",list);
		result.put("page", page);
		//获取热销商品
		List<String> yest = sellService.searchHotCommodityYearsterday();
		result.put ("hotYest",yest);
		result.put ("hotMouth",sellService.searchHotCommodityMonth());
		result.put ("hot",sellService.searchHotCommodity());
		
		result.put("msg", 0);
		return result;
	}
	
	@ResponseBody
	@RequestMapping("listResult")
	public Map<String,Object> listResult(int pageNum,String type){
		Map<String,Object> result = new HashMap<String,Object>();	
		List<Sell> list = new  ArrayList<Sell>();
		int pageSize  = 3;
		if (type.equals("date")){
			PageHelper.startPage(pageNum,pageSize); 
			list = sellService.searchBySellDate();
		}else if(type.equals("sellNum")){
			PageHelper.startPage(pageNum,pageSize); 
			list = sellService.searchBySellHot();
		}
		PageInfo<Sell> page = new PageInfo<Sell>(list);
		result.put("list",list);
		result.put("page", page);
		result.put ("hotYest",sellService.searchHotCommodityYearsterday());
		result.put ("hotMouth",sellService.searchHotCommodityMonth());
		result.put ("hot",sellService.searchHotCommodity());
		result.put("msg", 0);
		return result;
	}
}
