 
package com.hkz.supermarket.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hkz.supermarket.dao.DealMapper;
import com.hkz.supermarket.model.Deal;
import com.hkz.supermarket.service.DealService;

@Service("dealService")
public class DealServiceImpl implements DealService {
	
	@Resource
	private DealMapper dealMapper;
	

	@Override
	public List<Deal> selectDeal() {
		return dealMapper.selectDeal();
	}

	@Override
	public int updateDeal(Deal deal) {
		return dealMapper.updateByPrimaryKey(deal);
	}

	@Override
	public int addDeal(Deal deal) {
		return dealMapper.insert(deal);
	}

	@Override
	public int deleteDealById(int id) {
		return dealMapper.deleteByPrimaryKey(id);
	}

	@Override
	public Deal selectDealById(int dealId) {
		return dealMapper.selectByPrimaryKey(dealId);
	}

	@Override
	public List<Deal> searchByName(String string) {
		return dealMapper.searchByName(string);
	}



	@Override
	public List<Deal> searchByDealDate() {
		return dealMapper.searchByDealDate();
	}

	@Override
	public List<Deal> searchByDealMoney() {
		return dealMapper.searchByDealMoney();
	}

}
