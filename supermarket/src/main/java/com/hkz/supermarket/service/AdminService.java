package com.hkz.supermarket.service;

import java.util.List;

import com.hkz.supermarket.model.Admin;

public interface AdminService {
	
	List<Admin> selectAdmin();
	
	Admin selectAdminByName(String username);
	
	int updateAdmin(Admin admin);
	
	int addAdmin(Admin admin);
	
	int deleteAdminById(int id);
	
	Admin selectByPrimaryKey(Integer adminId);
}
