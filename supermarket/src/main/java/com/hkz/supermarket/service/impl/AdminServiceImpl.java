package com.hkz.supermarket.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hkz.supermarket.dao.AdminMapper;
import com.hkz.supermarket.model.Admin;
import com.hkz.supermarket.service.AdminService;

@Service("adminService")
public class AdminServiceImpl implements AdminService{
	
	@Resource
	private AdminMapper adminMapper;

	@Override
	public List<Admin> selectAdmin() {
		
		return adminMapper.selectAdmin();	
	}

	
	public Admin selectAdminByName(String username) {
		return adminMapper.selectAdminByName(username);
	}

	@Override
	public int updateAdmin(Admin admin) {
		return adminMapper.updateByPrimaryKey(admin);
	}

	@Override
	public int addAdmin(Admin admin) {
		return adminMapper.insert(admin);
	}

	@Override
	public int deleteAdminById(int id) {
		return adminMapper.deleteByPrimaryKey(id);
	}


	@Override
	public Admin selectByPrimaryKey(Integer adminId) {
		return adminMapper.selectByPrimaryKey(adminId);
	}
	
	
	
}
