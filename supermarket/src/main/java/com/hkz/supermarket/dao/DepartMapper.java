package com.hkz.supermarket.dao;

import com.hkz.supermarket.model.Depart;

public interface DepartMapper {
    int deleteByPrimaryKey(Integer departId);

    int insert(Depart record);

    int insertSelective(Depart record);

    Depart selectByPrimaryKey(Integer departId);

    int updateByPrimaryKeySelective(Depart record);

    int updateByPrimaryKey(Depart record);
}