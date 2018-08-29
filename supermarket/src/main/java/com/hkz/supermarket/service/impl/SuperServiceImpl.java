
package com.hkz.supermarket.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hkz.supermarket.dao.SupersMapper;
import com.hkz.supermarket.model.Supers;
import com.hkz.supermarket.service.SuperService;

@Service("superService")
public class SuperServiceImpl implements SuperService{

	@Resource
	private SupersMapper superMapper;
	
	@Override
	public List<Supers> selectSupers() {
		return superMapper.selectSupers();
	}

	@Override
	public Supers selectSupersByName(String Supersname) {
		return superMapper.selectByName(Supersname);
	}

	@Override
	public int updateSupers(Supers Supers) {
		return superMapper.updateByPrimaryKey(Supers);
	}

	@Override
	public int addSupers(Supers Supers) {
		return superMapper.insert(Supers);
	}

	@Override
	public int deleteSupersById(int id) {
		return superMapper.deleteByPrimaryKey(id);
	}

	@Override
	public Supers selectSupersById(int SupersId) {
		return superMapper.selectByPrimaryKey(SupersId);
	}

	@Override
	public List<Supers> searchByName(String string) {
		return superMapper.searchByName(string);
	}
	
}

