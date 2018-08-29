package com.hkz.supermarket.service;

import java.util.List;

import com.hkz.supermarket.model.Deal;

public interface DealService {
	
	List<Deal> selectDeal();
	
	
	int updateDeal(Deal deal);
	
	int addDeal(Deal deal);
	
	int deleteDealById(int id);

	Deal selectDealById(int dealId);

	List<Deal> searchByName(String string);
	
	//该交易的销售详情，一对多

	List<Deal> searchByDealDate();

	List<Deal> searchByDealMoney();
}
