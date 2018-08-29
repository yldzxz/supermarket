package com.hkz.supermarket.dao;

import com.hkz.supermarket.model.OutBound;

public interface OutBoundMapper {
    int deleteByPrimaryKey(Integer outboundId);

    int insert(OutBound record);

    int insertSelective(OutBound record);

    OutBound selectByPrimaryKey(Integer outboundId);

    int updateByPrimaryKeySelective(OutBound record);

    int updateByPrimaryKey(OutBound record);
}