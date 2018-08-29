package com.hkz.supermarket.service;

import java.util.List;

import com.hkz.supermarket.model.OutBound;

public interface OutBoundService {
	
	List<OutBound> selectOutBound();
	
	OutBound selectOutBoundByName(String outBoundname);
	
	//出库，商品减少，收入增加
	int addOutBound(OutBound outBound);
	
	OutBound selectOutBoundById(int outBoundId);

}
