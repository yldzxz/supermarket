package com.hkz.supermarket.dao;

import java.math.BigDecimal;
import java.util.List;

import com.hkz.supermarket.model.OutMoney;

public interface OutMoneyMapper {
    int deleteByPrimaryKey(Integer outmoneyId);

    int insert(OutMoney record);

	List<OutMoney> selectMoney();

	BigDecimal pay();

	BigDecimal payToday();

	BigDecimal payMonth();
}