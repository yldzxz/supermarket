package com.hkz.supermarket.service;

import java.util.List;

import com.hkz.supermarket.model.Inbound;

public interface InboundService {
	
	List<Inbound> selectInbound();
	
	Inbound selectInboundByName(String inboundname);
	
	//多条数据入库，商品增加，支出,
	int addInbound(List<Inbound> inbound);
	
	Inbound selectInboundById(int inboundId);
	
	//单条数据入库
	int insertInbound(Inbound inbound);
	
	//删除
	int deleteInboundById(int  id);
}
