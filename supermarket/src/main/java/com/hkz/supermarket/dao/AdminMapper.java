package com.hkz.supermarket.dao;

import java.util.List;

import com.hkz.supermarket.model.Admin;

public interface AdminMapper {
    int deleteByPrimaryKey(Integer adminId);

    int insert(Admin record);

    int insertSelective(Admin record);

    Admin selectByPrimaryKey(Integer adminId);

    int updateByPrimaryKeySelective(Admin record);

    int updateByPrimaryKey(Admin record);

	List<Admin> selectAdmin();

	Admin selectAdminByName(String username);

}