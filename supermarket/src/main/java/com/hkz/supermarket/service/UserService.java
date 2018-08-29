package com.hkz.supermarket.service;

import java.util.List;

import com.hkz.supermarket.model.User;

public interface UserService {
	
	List<User> selectUser();
	
	User selectUserByName(String username);
	
	int updateUser(User User);
	
	int addUser(User User);
	
	int deleteUserById(int id);

	User selectUserById(int userId);

	List<User> searchByName(String string);
}
