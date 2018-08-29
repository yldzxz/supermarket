 
package com.hkz.supermarket.service;

import java.util.List;

import com.hkz.supermarket.model.Supers;

public interface SuperService {
	List<Supers> selectSupers();
	
	Supers selectSupersByName(String Supersname);
	
	int updateSupers(Supers Supers);
	
	int addSupers(Supers Supers);
	
	int deleteSupersById(int id);

	Supers selectSupersById(int SupersId);

	List<Supers> searchByName(String string);
}
