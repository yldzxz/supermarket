package com.hkz.supermarket.service;

import java.util.List;

import com.hkz.supermarket.model.Vip;

public interface VipService {
	
	List<Vip> selectVip();
		
	int updateVip(Vip Vip);
	
	int addVip(Vip Vip);
	
	int deleteVipById(int id);

	Vip selectVipByName(String vipname);

	Vip selectByPrimaryKey(int vipId);

	List<Vip> searchVipByName(String vipname);
}
