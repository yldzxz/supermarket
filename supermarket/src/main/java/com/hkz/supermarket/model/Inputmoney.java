package com.hkz.supermarket.model;

import java.math.BigDecimal;
import java.util.Date;

public class Inputmoney {
    private Integer inputmoneyId;

    private String inputmoneyDealNumber;

    private String inputmoneyType;

    private BigDecimal inputmoneyGet;
    
    private Date inputmoneyTime;
    
    public Integer getInputmoneyId() {
        return inputmoneyId;
    }

    public void setInputmoneyId(Integer inputmoneyId) {
        this.inputmoneyId = inputmoneyId;
    }

    public String getInputmoneyDealNumber() {
        return inputmoneyDealNumber;
    }

    public void setInputmoneyDealNumber(String inputmoneyDealNumber) {
        this.inputmoneyDealNumber = inputmoneyDealNumber == null ? null : inputmoneyDealNumber.trim();
    }

    public String getInputmoneyType() {
        return inputmoneyType;
    }

    public void setInputmoneyType(String inputmoneyType) {
        this.inputmoneyType = inputmoneyType == null ? null : inputmoneyType.trim();
    }

    public BigDecimal getInputmoneyGet() {
        return inputmoneyGet;
    }

    public void setInputmoneyGet(BigDecimal inputmoneyGet) {
        this.inputmoneyGet = inputmoneyGet;
    }

	public Date getInputmoneyTime() {
		return inputmoneyTime;
	}

	public void setInputmoneyTime(Date inputmoneyTime) {
		this.inputmoneyTime = inputmoneyTime;
	}
}