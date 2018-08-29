
package com.hkz.supermarket.service;

import java.util.List;
import java.util.Map;

import com.hkz.supermarket.model.Deal;
import com.hkz.supermarket.model.Sell;

public interface CherkService {
	
	//购买动作
	public boolean purchase(Sell sell,Map<String,Object> result) throws Exception;
	
	//生成消费记录
	public Deal getDeal(List<Sell> sellList,String username,String dealId,String dealDate,Map<String, Object> result) throws Exception;
	
}
