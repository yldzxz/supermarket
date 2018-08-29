package com.hkz.supermarket.model;

import java.math.BigDecimal;

public class Vip {
    private Integer vipId;

    private String vipAccount;

    private String vipName;

    private BigDecimal vipUsesMoney;

    private Integer vipCode;

    private String vipDate;
    
    private String vipPhone;

    public Integer getVipId() {
        return vipId;
    }

    public void setVipId(Integer vipId) {
        this.vipId = vipId;
    }

    public String getVipAccount() {
        return vipAccount;
    }

    public void setVipAccount(String vipAccount) {
        this.vipAccount = vipAccount == null ? null : vipAccount.trim();
    }

    public String getVipName() {
        return vipName;
    }

    public void setVipName(String vipName) {
        this.vipName = vipName == null ? null : vipName.trim();
    }

    public BigDecimal getVipUsesMoney() {
        return vipUsesMoney;
    }

    public void setVipUsesMoney(BigDecimal vipUsesMoney) {
        this.vipUsesMoney = vipUsesMoney;
    }

    public Integer getVipCode() {
        return vipCode;
    }

    public void setVipCode(Integer vipCode) {
        this.vipCode = vipCode;
    }

    public String getVipDate() {
        return vipDate;
    }

    public void setVipDate(String vipDate) {
        this.vipDate = vipDate == null ? null : vipDate.trim();
    }

	public String getVipPhone() {
		return vipPhone;
	}

	public void setVipPhone(String vipPhone) {
		this.vipPhone = vipPhone;
	}
}