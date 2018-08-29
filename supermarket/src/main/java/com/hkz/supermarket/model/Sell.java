package com.hkz.supermarket.model;

import java.math.BigDecimal;
import java.util.Date;

public class Sell extends SellKey {
    private String sellDealNumber;

    private String sellVipId;

    private String sellCommodityName;
    
    private String sellCommodityId;
    
    private Double sellNum;

    private BigDecimal sellPrice;

    private BigDecimal sellMoney;

    private Date sellDate;

    public String getSellDealNumber() {
        return sellDealNumber;
    }

    public void setSellDealNumber(String sellDealNumber) {
        this.sellDealNumber = sellDealNumber == null ? null : sellDealNumber.trim();
    }

    public String getSellVipId() {
        return sellVipId;
    }

    public void setSellVipId(String sellVipId) {
        this.sellVipId = sellVipId == null ? null : sellVipId.trim();
    }

    public String getSellCommodityName() {
        return sellCommodityName;
    }

    public void setSellCommodityName(String sellCommodityName) {
        this.sellCommodityName = sellCommodityName == null ? null : sellCommodityName.trim();
    }

    public Double getSellNum() {
        return sellNum;
    }

    public void setSellNum(Double sellNum) {
        this.sellNum = sellNum;
    }

    public BigDecimal getSellPrice() {
        return sellPrice;
    }

    public void setSellPrice(BigDecimal sellPrice) {
        this.sellPrice = sellPrice;
    }

    public BigDecimal getSellMoney() {
        return sellMoney;
    }

    public void setSellMoney(BigDecimal sellMoney) {
        this.sellMoney = sellMoney;
    }

	public String getSellCommodityId() {
		return sellCommodityId;
	}

	public void setSellCommodityId(String sellCommodityId) {
		this.sellCommodityId = sellCommodityId;
	}

	public Date getSellDate() {
		return sellDate;
	}

	public void setSellDate(Date sellDate) {
		this.sellDate = sellDate;
	}
}