package com.hkz.supermarket.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hkz.supermarket.dao.UserMapper;
import com.hkz.supermarket.model.User;
import com.hkz.supermarket.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService{

	@Resource
	private UserMapper userMapper;
	
	@Override
	public List<User> selectUser() {
		return userMapper.selectUser();
	}

	@Override
	public User selectUserByName(String username) {
		return userMapper.selectByName(username);
	}

	@Override
	public int updateUser(User user) {
		return userMapper.updateByPrimaryKey(user);
	}

	@Override
	public int addUser(User user) {
		return userMapper.insert(user);
	}

	@Override
	public int deleteUserById(int id) {
		return userMapper.deleteByPrimaryKey(id);
	}

	@Override
	public User selectUserById(int userId) {
		return userMapper.selectUserById(userId);
	}

	@Override
	public List<User> searchByName(String string) {
		return userMapper.searchByName(string);
	}
	
}
