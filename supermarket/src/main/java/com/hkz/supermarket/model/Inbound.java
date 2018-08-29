package com.hkz.supermarket.model;

import java.math.BigDecimal;

public class Inbound {
    private Integer inboundId;

    private String inboundOrderNumber;

    private String inboundCommodityId;

    private String inboundCommodityName;

    private Double inboundCommodityNum;

    private BigDecimal inboundCommodityPrice;

    private BigDecimal inboundMoney;

    private String inboundDate;

    private String inboundSuperId;

    public Integer getInboundId() {
        return inboundId;
    }

    public void setInboundId(Integer inboundId) {
        this.inboundId = inboundId;
    }

    public String getInboundOrderNumber() {
        return inboundOrderNumber;
    }

    public void setInboundOrderNumber(String inboundOrderNumber) {
        this.inboundOrderNumber = inboundOrderNumber == null ? null : inboundOrderNumber.trim();
    }

    public String getInboundCommodityId() {
        return inboundCommodityId;
    }

    public void setInboundCommodityId(String inboundCommodityId) {
        this.inboundCommodityId = inboundCommodityId == null ? null : inboundCommodityId.trim();
    }

    public String getInboundCommodityName() {
        return inboundCommodityName;
    }

    public void setInboundCommodityName(String inboundCommodityName) {
        this.inboundCommodityName = inboundCommodityName == null ? null : inboundCommodityName.trim();
    }

    public Double getInboundCommodityNum() {
        return inboundCommodityNum;
    }

    public void setInboundCommodityNum(Double inboundCommodityNum) {
        this.inboundCommodityNum = inboundCommodityNum;
    }

    public BigDecimal getInboundCommodityPrice() {
        return inboundCommodityPrice;
    }

    public void setInboundCommodityPrice(BigDecimal inboundCommodityPrice) {
        this.inboundCommodityPrice = inboundCommodityPrice;
    }

    public BigDecimal getInboundMoney() {
        return inboundMoney;
    }

    public void setInboundMoney(BigDecimal inboundMoney) {
        this.inboundMoney = inboundMoney;
    }

    public String getInboundDate() {
        return inboundDate;
    }

    public void setInboundDate(String inboundDate) {
        this.inboundDate = inboundDate == null ? null : inboundDate.trim();
    }

    public String getInboundSuperId() {
        return inboundSuperId;
    }

    public void setInboundSuperId(String inboundSuperId) {
        this.inboundSuperId = inboundSuperId == null ? null : inboundSuperId.trim();
    }
}