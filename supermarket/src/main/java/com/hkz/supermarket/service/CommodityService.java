package com.hkz.supermarket.service;

import java.util.List;

import com.hkz.supermarket.model.Commodity;

public interface CommodityService {
	List<Commodity> selectCommodity();
	
	Commodity selectCommodityByName(String username);
	
	int updateCommodity(Commodity commodity);
	
	int addCommodity(Commodity commodity);
	
	int deleteCommodityById(int id);
	
	Commodity selectByPrimaryKey(Integer commodityId);
	
	List<Commodity> searchByCode(String string);
	
	List<Commodity> searchByName(String string);

	List<String> searchNumLess();
}
