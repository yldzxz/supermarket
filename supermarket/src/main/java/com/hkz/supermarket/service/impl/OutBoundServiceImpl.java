 
package com.hkz.supermarket.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hkz.supermarket.model.OutBound;
import com.hkz.supermarket.service.OutBoundService;

@Service("outBoundService")
public class OutBoundServiceImpl implements OutBoundService {

	public OutBoundServiceImpl() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public List<OutBound> selectOutBound() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public OutBound selectOutBoundByName(String outBoundname) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int addOutBound(OutBound outBound) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public OutBound selectOutBoundById(int outBoundId) {
		// TODO Auto-generated method stub
		return null;
	}

}
