 
package com.hkz.supermarket.service.impl;

import java.util.List;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import com.hkz.supermarket.dao.SellMapper;
import com.hkz.supermarket.model.Sell;
import com.hkz.supermarket.service.SellService;

@Service("sellService")
public class SellServiceImpl implements SellService {
	@Resource
	private SellMapper sellMapper;
	
	@Override
	public List<Sell> selectSell() {
		return sellMapper.selectSell();
	}

	@Override
	public Sell selectSellByName(String sellname) {
		return sellMapper.selectSellByName(sellname);
	}

	@Override
	public List<Sell> searchBySellDate() {
		return sellMapper.searchBySellDate();
	}

	@Override
	public List<Sell> searchBySellHot() {
		return sellMapper.searchBySellHot();
	}

	@Override
	public List<String> searchHotCommodityYearsterday() {
		return sellMapper.searchHotCommodityYearsterday();
	}

	@Override
	public List<String> searchHotCommodityMonth(){
		return sellMapper.searchHotCommodityMonth();
	}

	@Override
	public List<String> searchHotCommodity() {
		return sellMapper.searchHotCommodity();
	}

	


}
