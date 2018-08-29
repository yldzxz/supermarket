package com.hkz.supermarket.service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import com.hkz.supermarket.model.Inputmoney;
import com.hkz.supermarket.model.OutMoney;


public interface MoneyService {
	
	//money收入
	List<Inputmoney> getMoney();
	
	//money支出
	List<OutMoney> payMoney();
	

	
	//总收入
	BigDecimal pet();
	
	//总支出
	BigDecimal pay();
	
	//增加收入表
	int insertInputmoney(Inputmoney inputmoney);
	//增加输出表
	int insertOutmoney(OutMoney outmoney);

	BigDecimal payToday();

	BigDecimal payMonth();
	
	BigDecimal petToday();

	BigDecimal petMonth();
	//利润
	int profit(Map<String, Object> result);
}
