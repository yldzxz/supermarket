package com.hkz.supermarket.dao;

import java.util.List;

import com.hkz.supermarket.model.Commodity;

public interface CommodityMapper {
    int deleteByPrimaryKey(Integer commodityId);

    int insert(Commodity record);

    int insertSelective(Commodity record);

    Commodity selectByPrimaryKey(Integer commodityId);

    int updateByPrimaryKeySelective(Commodity record);

    int updateByPrimaryKey(Commodity record);

	List<Commodity> selectCommodity();

	Commodity selectCommodityByName(String username);

	List<Commodity> searchByCode(String string);

	List<Commodity> searchByName(String string);
	
	List<String> searchNumLess();
}