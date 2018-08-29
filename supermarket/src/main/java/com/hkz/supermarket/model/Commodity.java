package com.hkz.supermarket.model;

import java.math.BigDecimal;

public class Commodity {
    private Integer commodityId;

    private String commodityCode;

    private String commodityBarcode;

    private String commodityName;

    private Double commodityNowNum;

    private Double commodityWarnNum;

    private String commodityType;

    private BigDecimal commodityPurchasePrice;

    private BigDecimal commoditySellingPrice;

    private Integer commodityAllowSell;

    private Integer commodityKeyHot;

    private String commodityManufacturer;

    private String commoditySuper;

    public Integer getCommodityId() {
        return commodityId;
    }

    public void setCommodityId(Integer commodityId) {
        this.commodityId = commodityId;
    }

    public String getCommodityCode() {
        return commodityCode;
    }

    public void setCommodityCode(String commodityCode) {
        this.commodityCode = commodityCode == null ? null : commodityCode.trim();
    }

    public String getCommodityBarcode() {
        return commodityBarcode;
    }

    public void setCommodityBarcode(String commodityBarcode) {
        this.commodityBarcode = commodityBarcode == null ? null : commodityBarcode.trim();
    }

    public String getCommodityName() {
        return commodityName;
    }

    public void setCommodityName(String commodityName) {
        this.commodityName = commodityName == null ? null : commodityName.trim();
    }

    public Double getCommodityNowNum() {
        return commodityNowNum;
    }

    public void setCommodityNowNum(Double commodityNowNum) {
        this.commodityNowNum = commodityNowNum;
    }

    public Double getCommodityWarnNum() {
        return commodityWarnNum;
    }

    public void setCommodityWarnNum(Double commodityWarnNum) {
        this.commodityWarnNum = commodityWarnNum;
    }

    public String getCommodityType() {
        return commodityType;
    }

    public void setCommodityType(String commodityType) {
        this.commodityType = commodityType == null ? null : commodityType.trim();
    }

    public BigDecimal getCommodityPurchasePrice() {
        return commodityPurchasePrice;
    }

    public void setCommodityPurchasePrice(BigDecimal commodityPurchasePrice) {
        this.commodityPurchasePrice = commodityPurchasePrice;
    }

    public BigDecimal getCommoditySellingPrice() {
        return commoditySellingPrice;
    }

    public void setCommoditySellingPrice(BigDecimal commoditySellingPrice) {
        this.commoditySellingPrice = commoditySellingPrice;
    }

    public Integer getCommodityAllowSell() {
        return commodityAllowSell;
    }

    public void setCommodityAllowSell(Integer commodityAllowSell) {
        this.commodityAllowSell = commodityAllowSell;
    }

    public Integer getCommodityKeyHot() {
        return commodityKeyHot;
    }

    public void setCommodityKeyHot(Integer commodityKeyHot) {
        this.commodityKeyHot = commodityKeyHot;
    }

    public String getCommodityManufacturer() {
        return commodityManufacturer;
    }

    public void setCommodityManufacturer(String commodityManufacturer) {
        this.commodityManufacturer = commodityManufacturer == null ? null : commodityManufacturer.trim();
    }

    public String getCommoditySuper() {
        return commoditySuper;
    }

    public void setCommoditySuper(String commoditySuper) {
        this.commoditySuper = commoditySuper == null ? null : commoditySuper.trim();
    }
}