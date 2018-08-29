package com.hkz.supermarket.model;

import java.math.BigDecimal;
import java.util.Date;

public class OutMoney {
    private Integer outmoneyId;

    private String outmoneyInboundNumber;

    private String outmoneyType;

    private BigDecimal outmoneyGet;
    
    private Date outmoneyTime;

    public Integer getOutmoneyId() {
        return outmoneyId;
    }

    public void setOutmoneyId(Integer outmoneyId) {
        this.outmoneyId = outmoneyId;
    }


    public String getOutmoneyInboundNumber() {
        return outmoneyInboundNumber;
    }

    public void setOutmoneyInboundNumber(String outmoneyInboundNumber) {
        this.outmoneyInboundNumber = outmoneyInboundNumber == null ? null : outmoneyInboundNumber.trim();
    }

    public String getOutmoneyType() {
        return outmoneyType;
    }

    public void setOutmoneyType(String outmoneyType) {
        this.outmoneyType = outmoneyType == null ? null : outmoneyType.trim();
    }

    public BigDecimal getOutmoneyGet() {
        return outmoneyGet;
    }

    public void setOutmoneyGet(BigDecimal outmoneyGet) {
        this.outmoneyGet = outmoneyGet;
    }

	public Date getOutmoneyTime() {
		return outmoneyTime;
	}

	public void setOutmoneyTime(Date outmoneyTime) {
		this.outmoneyTime = outmoneyTime;
	}
}