
package com.hkz.supermarket.controller;

import java.math.BigDecimal;
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
import com.hkz.supermarket.model.Inputmoney;
import com.hkz.supermarket.model.OutMoney;
import com.hkz.supermarket.service.MoneyService;

//处理money收支查询
@Controller
@RequestMapping("money")
public class MoneyController {
	@Resource
	private MoneyService moneyService;
	
	@RequestMapping("inputList")
	@ResponseBody
	public Map<String,Object> inlist(int pageNum){
		Map<String,Object> result = new HashMap<String,Object>();
		List<Inputmoney> list = new  ArrayList<Inputmoney>();
		int pageSize  = 3;
		PageHelper.startPage(pageNum,pageSize); 
		list = moneyService.getMoney();
		PageInfo<Inputmoney> page = new PageInfo<Inputmoney>(list);
		result.put("list",list);
		result.put("page", page);
		result.put("msg", 0);
		return result;
	}
	
	@RequestMapping("outList")
	@ResponseBody
	public Map<String,Object> outlist(int pageNum){
		Map<String,Object> result = new HashMap<String,Object>();
		List<OutMoney> list = new  ArrayList<OutMoney>();
		int pageSize  = 3;
		PageHelper.startPage(pageNum,pageSize); 
		list = moneyService.payMoney();
		PageInfo<OutMoney> page = new PageInfo<OutMoney>(list);
		result.put("list",list);
		result.put("page", page);
		result.put("msg", 0);
		return result;
	}
	
	@RequestMapping("pay")
	@ResponseBody
	public Map<String,Object> pay(String Type){
		Map<String,Object> result = new HashMap<String,Object>();
		BigDecimal re = new BigDecimal(0);
		if (Type != null){
			if (Type.equals("day")){
				re = moneyService.payToday();
			}else if (Type.equals( "mouth")){
				re = moneyService.payMonth();
			}
		}else{
			re = moneyService.pay();
		}
		result.put("pay", re);
		result.put("msg", 0);
		return result;
	}
	
	
	@RequestMapping("pet")
	@ResponseBody
	public Map<String,Object> pet(String Type){
		Map<String,Object> result = new HashMap<String,Object>();	
		BigDecimal re = new BigDecimal(0);
		
		if (Type != null){
			if (Type.equals("day")){
				re = moneyService.petToday();
			}else if (Type.equals( "mouth")){
				re = moneyService.petMonth();
			}
		}
		else{
			re = moneyService.pet();
		}
		result.put("pet", re);
		result.put("msg", 0);
		return result;
	}
	
	@RequestMapping("profit")
	@ResponseBody
	public Map<String,Object> profit(){
		Map<String,Object> result = new HashMap<String,Object>();	
		int re = moneyService.profit(result);
		result.put("msg", re);
		return result;
	}
}
