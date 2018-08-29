package com.hkz.supermarket.model;

public class Supers {
    private Integer supersId;

    private String supersName;

    private String supersLocation;

    private String supersPhone;

    public Integer getSupersId() {
        return supersId;
    }

    public void setSupersId(Integer supersId) {
        this.supersId = supersId;
    }

    public String getSupersName() {
        return supersName;
    }

    public void setSupersName(String supersName) {
        this.supersName = supersName == null ? null : supersName.trim();
    }

    public String getSupersLocation() {
        return supersLocation;
    }

    public void setSupersLocation(String supersLocation) {
        this.supersLocation = supersLocation == null ? null : supersLocation.trim();
    }

    public String getSupersPhone() {
        return supersPhone;
    }

    public void setSupersPhone(String supersPhone) {
        this.supersPhone = supersPhone == null ? null : supersPhone.trim();
    }
}