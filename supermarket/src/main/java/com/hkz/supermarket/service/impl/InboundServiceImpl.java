 
package com.hkz.supermarket.service.impl;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hkz.supermarket.dao.CommodityMapper;
import com.hkz.supermarket.dao.InboundMapper;
import com.hkz.supermarket.dao.OutMoneyMapper;
import com.hkz.supermarket.model.Commodity;
import com.hkz.supermarket.model.Inbound;
import com.hkz.supermarket.model.OutMoney;
import com.hkz.supermarket.service.InboundService;

@Service("inboundService")
public class InboundServiceImpl implements InboundService {

	@Resource
	private InboundMapper inboundMapper;
	
	@Resource
	private CommodityMapper commodityMapper;
	
	@Resource
	private OutMoneyMapper outMoneyMapper;
	
	
	@Override
	public List<Inbound> selectInbound() {
		return inboundMapper.selectInbound();
	}

	@Override
	public Inbound selectInboundByName(String inboundname) {
		return inboundMapper.selectInboundByName(inboundname);
	}

	@Override
	public int addInbound(List<Inbound> inbound) {
		for (int i =  0 ; i < inbound.size(); i++){
			insertInbound(inbound.get(i));
		}
		return 0;
	}

	@Override
	public Inbound selectInboundById(int inboundId) {
		return inboundMapper.selectByPrimaryKey(inboundId);
	}

	@Override
	public int insertInbound(Inbound inbound) {
		
		int i = inboundMapper.insert(inbound); //入库
		//查询商品
		Commodity commodity = commodityMapper.selectCommodityByName(inbound.getInboundCommodityId());
		//修改商品库存
		commodity.setCommodityNowNum(commodity.getCommodityNowNum() + inbound.getInboundCommodityNum());
		//更新商品
		commodityMapper.updateByPrimaryKey(commodity);
		//修改支出
		OutMoney outMoney = new OutMoney();
		outMoney.setOutmoneyInboundNumber(inbound.getInboundOrderNumber());
		outMoney.setOutmoneyGet(inbound.getInboundMoney());
		outMoney.setOutmoneyTime(new Date());
		outMoney.setOutmoneyType("入库");
		//增加支出
		outMoneyMapper.insert(outMoney);
		
		return i;
	}

	@Override
	public int deleteInboundById(int id) {
		return inboundMapper.deleteByPrimaryKey(id);
	}

	

}
