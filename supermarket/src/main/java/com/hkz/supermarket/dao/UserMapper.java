package com.hkz.supermarket.dao;

import java.util.List;

import com.hkz.supermarket.model.User;

public interface UserMapper {
    int deleteByPrimaryKey(Integer userId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer userId);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

	User selectByName(String username);

	List<User> selectUser();

	User selectUserById(int userId);

	List<User> searchByName(String string);
}