package com.hkz.supermarket.dao;

import java.util.List;

import com.hkz.supermarket.model.Vip;

public interface VipMapper {
    int deleteByPrimaryKey(Integer vipId);

    int insert(Vip record);

    int insertSelective(Vip record);

    Vip selectByPrimaryKey(Integer vipId);

    int updateByPrimaryKeySelective(Vip record);

    int updateByPrimaryKey(Vip record);

	List<Vip> selectVip();

	List<Vip> searchByName(String vipname);

	Vip selectVipByName(String vipaccount);
}