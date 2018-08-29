package com.hkz.supermarket.dao;

import java.util.List;
import com.hkz.supermarket.model.Sell;

public interface SellMapper {

	public List<Sell> selectSell();


	public Sell selectSellByName(String sellname);


	public List<Sell> searchBySellDate();


	public List<Sell> searchBySellHot() ;


	public int insert(Sell sell);


	public List<String> searchHotCommodityYearsterday();


	public List<String> searchHotCommodityMonth();


	public List<String> searchHotCommodity();
}