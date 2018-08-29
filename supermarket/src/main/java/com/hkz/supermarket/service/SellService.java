package com.hkz.supermarket.service;

import java.util.List;

import com.hkz.supermarket.model.Sell;

public interface SellService {
	
	List<Sell> selectSell();
	
	Sell selectSellByName(String sellname);
	
	List<Sell> searchBySellDate();

	List<Sell> searchBySellHot();
	
	List<String> searchHotCommodityYearsterday();
	
	List<String> searchHotCommodityMonth();
	
	List<String> searchHotCommodity();
	
}
