package com.hkz.supermarket.model;

import java.math.BigDecimal;

public class OutBound {
    private Integer outboundId;

    private String outboundOrderNumber;

    private String outboundCommodityId;

    private String outboundCommodityName;

    private Double outboundCommodityNum;

    private BigDecimal outboundCommodityPrice;

    private BigDecimal outboundMoney;

    private String outboundDate;

    public Integer getOutboundId() {
        return outboundId;
    }

    public void setOutboundId(Integer outboundId) {
        this.outboundId = outboundId;
    }

    public String getOutboundOrderNumber() {
        return outboundOrderNumber;
    }

    public void setOutboundOrderNumber(String outboundOrderNumber) {
        this.outboundOrderNumber = outboundOrderNumber == null ? null : outboundOrderNumber.trim();
    }

    public String getOutboundCommodityId() {
        return outboundCommodityId;
    }

    public void setOutboundCommodityId(String outboundCommodityId) {
        this.outboundCommodityId = outboundCommodityId == null ? null : outboundCommodityId.trim();
    }

    public String getOutboundCommodityName() {
        return outboundCommodityName;
    }

    public void setOutboundCommodityName(String outboundCommodityName) {
        this.outboundCommodityName = outboundCommodityName == null ? null : outboundCommodityName.trim();
    }

    public Double getOutboundCommodityNum() {
        return outboundCommodityNum;
    }

    public void setOutboundCommodityNum(Double outboundCommodityNum) {
        this.outboundCommodityNum = outboundCommodityNum;
    }

    public BigDecimal getOutboundCommodityPrice() {
        return outboundCommodityPrice;
    }

    public void setOutboundCommodityPrice(BigDecimal outboundCommodityPrice) {
        this.outboundCommodityPrice = outboundCommodityPrice;
    }

    public BigDecimal getOutboundMoney() {
        return outboundMoney;
    }

    public void setOutboundMoney(BigDecimal outboundMoney) {
        this.outboundMoney = outboundMoney;
    }

    public String getOutboundDate() {
        return outboundDate;
    }

    public void setOutboundDate(String outboundDate) {
        this.outboundDate = outboundDate == null ? null : outboundDate.trim();
    }
}