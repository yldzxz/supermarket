package com.hkz.supermarket.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hkz.supermarket.model.Commodity;
import com.hkz.supermarket.model.Deal;
import com.hkz.supermarket.model.Sell;
import com.hkz.supermarket.model.Vip;
import com.hkz.supermarket.service.CherkService;
import com.hkz.supermarket.service.CommodityService;
import com.hkz.supermarket.service.DealService;
import com.hkz.supermarket.service.VipService;
import com.hkz.supermarket.utils.Utils;

@Controller
@RequestMapping("cherk")
public class CherkController {

	@Resource
	private VipService vipService;

	@Resource
	private CommodityService commodityService;
	
	@Resource
	private CherkService cherkService;
	
	@Resource
	private DealService dealService;

	@RequestMapping("toRegisterVip")
	public String toadd() {
		return "cherk/vipRegister";
	}

	@RequestMapping("getVip")
	public String toVip() {
		return "cherk/getVip";
	}

	@RequestMapping("showDeal")
	public ModelAndView showDeal(String id,HttpSession session) {
		ModelAndView model = new ModelAndView();
		Deal deal = dealService.searchByName(id).get(0);
		//判断是否是这个收银员的
		String username = (String) session.getAttribute("username");
		if (deal != null && username.equals(deal.getDealUserNumber()))
			model.addObject("deal", deal);
		else if (deal == null){
			model.addObject("msg","无交易信息");
		} else{
			model.addObject("msg","无权限");
		}
		model.setViewName("cherk/showDeal");
		
		return model;
	}
	
	@ResponseBody
	@RequestMapping("seachVip")
	public Map<String, Object> find(String vipname) {
		Map<String, Object> result = new HashMap<String, Object>();
		Vip vip = vipService.selectVipByName(vipname);
		if (vip != null) {
			result.put("msg", "exist");
			result.put("vip", vip);
		} else {
			result.put("msg", "noExist");
		}
		return result;
	}

	@ResponseBody
	@RequestMapping("addVip")
	public Map<String, Object> add(String vipName, String vipPhone) {
		Map<String, Object> result = new HashMap<String, Object>();
		Vip vip = new Vip();
		long string = new Date().getTime();
		String str = String.valueOf(string);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd-HH:mm:ss");
		vip.setVipAccount(str);
		vip.setVipDate(sdf.format(string));
		vip.setVipName(vipName);
		vip.setVipPhone(vipPhone);
		vip.setVipUsesMoney(BigDecimal.valueOf(0.0));
		vip.setVipCode(0);
		int data = vipService.addVip(vip);
		result.put("msg", data);
		return result;
	}

	// 返回商品
	@ResponseBody
	@RequestMapping("listResult")
	public Map<String, Object> listResult(String string, int pageNum, String type) {
		Map<String, Object> result = new HashMap<String, Object>();
		List<Commodity> list = new ArrayList<Commodity>();
		int pageSize = 3;
		if (type == "byName") {
			PageHelper.startPage(pageNum, pageSize);
			list = commodityService.searchByName(string);
		} else if (type == "byCode") {
			PageHelper.startPage(pageNum, pageSize);
			list = commodityService.searchByCode(string);
		}
		PageInfo<Commodity> page = new PageInfo<Commodity>(list);
		result.put("list", list);
		result.put("page", page);
		result.put("msg", 0);
		return result;
	}

	// 购买过程
	@ResponseBody
	@RequestMapping("buy")
	public Map<String, Object> buy(HttpServletRequest request, @RequestBody String sells) throws Exception {
		Map<String, Object> result = new HashMap<String, Object>();
		String username = request.getParameter("userAcount");
		ObjectMapper objectMapper = new ObjectMapper();
		JavaType javaType = objectMapper.getTypeFactory().constructParametricType(List.class, Sell.class);
		List<Sell> list = objectMapper.readValue(sells, javaType);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date date = new Date();
		String dealId = Utils.dealId(username, date);
		String dealDate = sdf.format(date);
		result.put("msg", 0);
		Deal deal = cherkService.getDeal(list,username,dealId,dealDate,result);
		result.put("deal",deal);
		return result;
	}

}
