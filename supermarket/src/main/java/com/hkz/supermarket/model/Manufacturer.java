package com.hkz.supermarket.model;

public class Manufacturer {
    private Integer manufacturerId;

    private String manufacturerName;

    private String manufacturerLocation;

    private String manufacturerPhone;

    public Integer getManufacturerId() {
        return manufacturerId;
    }

    public void setManufacturerId(Integer manufacturerId) {
        this.manufacturerId = manufacturerId;
    }

    public String getManufacturerName() {
        return manufacturerName;
    }

    public void setManufacturerName(String manufacturerName) {
        this.manufacturerName = manufacturerName == null ? null : manufacturerName.trim();
    }

    public String getManufacturerLocation() {
        return manufacturerLocation;
    }

    public void setManufacturerLocation(String manufacturerLocation) {
        this.manufacturerLocation = manufacturerLocation == null ? null : manufacturerLocation.trim();
    }

    public String getManufacturerPhone() {
        return manufacturerPhone;
    }

    public void setManufacturerPhone(String manufacturerPhone) {
        this.manufacturerPhone = manufacturerPhone == null ? null : manufacturerPhone.trim();
    }
}