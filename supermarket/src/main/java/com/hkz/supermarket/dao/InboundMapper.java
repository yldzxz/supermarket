package com.hkz.supermarket.dao;

import java.util.List;

import com.hkz.supermarket.model.Inbound;

public interface InboundMapper {
    
	int deleteByPrimaryKey(Integer inboundId);

    int insert(Inbound record);

    Inbound selectByPrimaryKey(Integer inboundId);

    int updateByPrimaryKeySelective(Inbound record);

	List<Inbound> selectInbound();
    
	Inbound selectInboundByName(String inboundname);
	
}