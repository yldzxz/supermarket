package com.hkz.supermarket.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hkz.supermarket.dao.VipMapper;
import com.hkz.supermarket.model.Vip;
import com.hkz.supermarket.service.VipService;

@Service("vipService")
public class VipServiceImpl implements VipService {

	@Resource
	private VipMapper vipMapper;
	
	@Override
	public List<Vip> selectVip() {
		return vipMapper.selectVip();
	}

	@Override
	public int updateVip(Vip Vip) {
		return vipMapper.updateByPrimaryKeySelective(Vip);
	}

	@Override
	public int addVip(Vip Vip) {
		return vipMapper.insert(Vip);
	}

	@Override
	public int deleteVipById(int id) {
		return vipMapper.deleteByPrimaryKey(id);
	}

	@Override
	public List<Vip> searchVipByName(String vipname) {
		return vipMapper.searchByName(vipname);
	}


	@Override
	public Vip selectByPrimaryKey(int vipId) {
		return vipMapper.selectByPrimaryKey(vipId);
	}

	@Override
	public Vip selectVipByName(String vipaccount) {
		
		return vipMapper.selectVipByName(vipaccount);
	}

}
