package com.hkz.supermarket.dao;

import java.math.BigDecimal;
import java.util.List;

import com.hkz.supermarket.model.Inputmoney;

public interface InputmoneyMapper {
    int deleteByPrimaryKey(Integer inputmoneyId);

    int insert(Inputmoney record);

    List<Inputmoney> selectMoney();

	BigDecimal pet();

	BigDecimal petToday();

	BigDecimal petMonth();
}