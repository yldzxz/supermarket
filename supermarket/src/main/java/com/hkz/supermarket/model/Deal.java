package com.hkz.supermarket.model;

import java.math.BigDecimal;
import java.util.List;

public class Deal {
    private Integer dealId;

    private String dealOrderNumber;

    private BigDecimal dealMoney;

    private String dealUserNumber;

    private String dealDate;
    
    private List<Sell> sells;

    public Integer getDealId() {
        return dealId;
    }

    public void setDealId(Integer dealId) {
        this.dealId = dealId;
    }

    public String getDealOrderNumber() {
        return dealOrderNumber;
    }

    public void setDealOrderNumber(String dealOrderNumber) {
        this.dealOrderNumber = dealOrderNumber == null ? null : dealOrderNumber.trim();
    }

    public BigDecimal getDealMoney() {
        return dealMoney;
    }

    public void setDealMoney(BigDecimal dealMoney) {
        this.dealMoney = dealMoney;
    }

    public String getDealUserNumber() {
        return dealUserNumber;
    }

    public void setDealUserNumber(String dealUserNumber) {
        this.dealUserNumber = dealUserNumber == null ? null : dealUserNumber.trim();
    }

    public String getDealDate() {
        return dealDate;
    }

    public void setDealDate(String dealDate) {
        this.dealDate = dealDate == null ? null : dealDate.trim();
    }

	public List<Sell> getSells() {
		return sells;
	}

	public void setSells(List<Sell> sells) {
		this.sells = sells;
	}
}