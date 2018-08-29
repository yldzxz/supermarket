
package com.hkz.supermarket.service.impl;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;


import com.hkz.supermarket.dao.DealMapper;
import com.hkz.supermarket.dao.SellMapper;
import com.hkz.supermarket.model.Commodity;
import com.hkz.supermarket.model.Deal;
import com.hkz.supermarket.model.Inputmoney;
import com.hkz.supermarket.model.Sell;
import com.hkz.supermarket.service.CherkService;
import com.hkz.supermarket.service.CommodityService;
import com.hkz.supermarket.service.MoneyService;
import com.hkz.supermarket.utils.Utils;


@Service("cherkService")
public class CherkServiceImpl implements CherkService{
	@Resource
	private SellMapper sellMapper;
	
	@Resource
	private CommodityService commodityService;
	
	@Resource
	private DealMapper dealMapper;
	
	@Resource
	private CherkService cherkService;
	
	@Resource
	private MoneyService inputmoneyService;
	
	@Override

	public boolean purchase(Sell sell,Map<String,Object> result) throws Exception {
		//产生销售记录，修改商品数据
		sellMapper.insert(sell);
		Commodity commodity =  commodityService.searchByCode(sell.getSellCommodityId()).get(0);	
		commodity.setCommodityKeyHot(commodity.getCommodityKeyHot() + 1);
		Double num = commodity.getCommodityNowNum() - sell.getSellNum();
		if (num < 0){
			result.put("sell", sell);
			throw new Exception();
		}
		commodity.setCommodityNowNum(commodity.getCommodityNowNum() - sell.getSellNum());
		commodityService.updateCommodity(commodity);
		return true;
	}
	

	public Deal getDeal(List<Sell> sellList,String username,String dealId,String dealDate,Map<String,Object> result) throws Exception {
		//产生交易记录，增加收入表
		Deal deal = new Deal();
		boolean flag = true;
		Inputmoney inputmoney = new Inputmoney();
		BigDecimal sum = new BigDecimal(0);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		deal.setDealOrderNumber(dealId);
		deal.setDealUserNumber(username);
		deal.setDealDate(dealDate);
		for(Sell sell : sellList){
			//生成交易时间
			sell.setSellDate(sdf.parse(dealDate));
			//生成交易号
			sell.setSellDealNumber(dealId);
			//生成订单号
			sell.setSellOrderNumber(Utils.orderId(username, new Date()));
			flag = cherkService.purchase(sell,result);
			if (!flag){
				break;
			}
			sum = sum.add(sell.getSellMoney());
		}
		deal.setDealMoney(sum);
		dealMapper.insert(deal);
		
		inputmoney.setInputmoneyDealNumber(dealId);
		inputmoney.setInputmoneyGet(sum);
		inputmoney.setInputmoneyType("出售");
		
		inputmoneyService.insertInputmoney(inputmoney);
		return deal;
	}



	

}
