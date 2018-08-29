package com.hkz.supermarket.dao;

import java.util.List;

import com.hkz.supermarket.model.Deal;

public interface DealMapper {
    int deleteByPrimaryKey(Integer dealId);

    int insert(Deal record);

    Deal selectByPrimaryKey(Integer dealId);

    int updateByPrimaryKey(Deal record);

	List<Deal> selectDeal();

	List<Deal> searchByName(String string);

//	List<Sell> showSell(Deal deal);

	List<Deal> searchByDealDate();

	List<Deal> searchByDealMoney();
}