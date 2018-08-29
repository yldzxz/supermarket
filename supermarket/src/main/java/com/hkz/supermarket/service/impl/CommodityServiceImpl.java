
package com.hkz.supermarket.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hkz.supermarket.dao.CommodityMapper;
import com.hkz.supermarket.model.Commodity;
import com.hkz.supermarket.service.CommodityService;

@Service("commodityService")
public class CommodityServiceImpl implements CommodityService{

	@Resource
	private CommodityMapper commodityMapper;
	
	@Override
	public List<Commodity> selectCommodity() {
		return commodityMapper.selectCommodity();
	}

	@Override
	public Commodity selectCommodityByName(String username) {
		return commodityMapper.selectCommodityByName(username);
	}

	@Override
	public int updateCommodity(Commodity commodity) {
		return commodityMapper.updateByPrimaryKeySelective(commodity);
	}

	@Override
	public int addCommodity(Commodity commodity) {
		return commodityMapper.insert(commodity);
	}

	@Override
	public int deleteCommodityById(int id) {
		return commodityMapper.deleteByPrimaryKey(id);
	}

	@Override
	public Commodity selectByPrimaryKey(Integer commodityId) {
		return commodityMapper.selectByPrimaryKey(commodityId);
	}

	@Override
	public List<Commodity> searchByCode(String string) {
		return commodityMapper.searchByCode(string);
	}

	@Override
	public List<Commodity> searchByName(String string) {
		return commodityMapper.searchByName(string);
	}

	@Override
	public List<String> searchNumLess() {
		return commodityMapper.searchNumLess();
	}

}
