package com.hkz.supermarket.model;

public class SellKey {
    private Integer sellId;

    private String sellOrderNumber;

    public Integer getSellId() {
        return sellId;
    }

    public void setSellId(Integer sellId) {
        this.sellId = sellId;
    }

    public String getSellOrderNumber() {
        return sellOrderNumber;
    }

    public void setSellOrderNumber(String sellOrderNumber) {
        this.sellOrderNumber = sellOrderNumber == null ? null : sellOrderNumber.trim();
    }
}