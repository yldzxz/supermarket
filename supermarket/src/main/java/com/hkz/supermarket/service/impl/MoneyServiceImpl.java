 
package com.hkz.supermarket.service.impl;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hkz.supermarket.dao.InputmoneyMapper;
import com.hkz.supermarket.dao.OutMoneyMapper;
import com.hkz.supermarket.model.Inputmoney;
import com.hkz.supermarket.model.OutMoney;
import com.hkz.supermarket.service.MoneyService;

@Service("moneyService")
public class MoneyServiceImpl implements MoneyService {
	
	@Autowired
	private InputmoneyMapper inputmoneyMapper;
	
	@Autowired
	private OutMoneyMapper outMoneyMapper;

	@Override
	public List<Inputmoney> getMoney() {
		return inputmoneyMapper.selectMoney();
	}

	@Override
	public List<OutMoney> payMoney() {
		return outMoneyMapper.selectMoney();
	}


	@Override
	public BigDecimal pet() {
		BigDecimal de = inputmoneyMapper.pet();
		return 	de == null ? new BigDecimal(0):de;
	}

	@Override
	public BigDecimal pay() {
		BigDecimal de = outMoneyMapper.pay();
		return 	de == null ? new BigDecimal(0):de;
	}

	@Override
	public int insertInputmoney(Inputmoney inputmoney) {
		return inputmoneyMapper.insert(inputmoney);
	}

	@Override
	public int insertOutmoney(OutMoney outmoney) {
		return  outMoneyMapper.insert(outmoney);
	}

	@Override
	public BigDecimal payToday() {
		BigDecimal de = outMoneyMapper.payToday();
		return 	de == null ? new BigDecimal(0):de;
	}

	@Override
	public BigDecimal payMonth() {
		BigDecimal de = outMoneyMapper.payMonth();
		return 	de == null ? new BigDecimal(0):de;
	}

	@Override
	public BigDecimal petToday() {
		BigDecimal de = inputmoneyMapper.petToday();
		return 	de == null ? new BigDecimal(0):de;
	}

	@Override
	public BigDecimal petMonth() {
		BigDecimal de = inputmoneyMapper.petMonth();
		return 	de == null ? new BigDecimal(0):de;
	}

	@Override
	public int profit(Map<String, Object> result) {
		BigDecimal dayProfit = petToday().subtract(payToday());
		BigDecimal mouthProfit = petMonth().subtract(payMonth());
		BigDecimal profit = pet().subtract(pay());
		result.put("dayProfit", dayProfit);
		result.put("mouthProfit", mouthProfit);
		result.put("profit", profit);
		return 0;
	}

}
