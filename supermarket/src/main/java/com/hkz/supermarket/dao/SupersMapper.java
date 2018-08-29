package com.hkz.supermarket.dao;

import java.util.List;

import com.hkz.supermarket.model.Supers;

public interface SupersMapper {
    int deleteByPrimaryKey(Integer supersId);

    int insert(Supers record);

    int insertSelective(Supers record);

    Supers selectByPrimaryKey(Integer supersId);

    int updateByPrimaryKeySelective(Supers record);

    int updateByPrimaryKey(Supers record);

	List<Supers> selectSupers();

	Supers selectByName(String supersname);

	List<Supers> searchByName(String string);
}