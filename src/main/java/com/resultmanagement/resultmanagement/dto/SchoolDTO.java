package com.resultmanagement.resultmanagement.dto;

import java.util.Date;

public class SchoolDTO {

	private Integer schoolId;
	private Integer recId;
	private String schoolName;
	private String schoolDesc;
	private Date dateOfCreation;
	private Date dateOfUpdate;
	private String schoolCode;
	private String schoolEmail;
    private AddressDTO addressId;

	private Integer addId;
	private String address1;
	private String address2;
	private String city;
	private String country;
	private String state;
	private String zipCode;
    
	
	public SchoolDTO(Integer schoolId, Integer recId, String schoolName, String schoolDesc, Date dateOfCreation,
			Date dateOfUpdate, String schoolCode, String schoolEmail, AddressDTO addressId) {
		super();
		this.schoolId = schoolId;
		this.recId = schoolId;
		this.schoolName = schoolName;
		this.schoolDesc = schoolDesc;
		this.dateOfCreation = dateOfCreation;
		this.dateOfUpdate = dateOfUpdate;
		this.schoolCode = schoolCode;
		this.schoolEmail = schoolEmail;
		this.addressId = addressId;
	}
	public Integer getSchoolId() {
		return schoolId;
	}
	public void setSchoolId(Integer schoolId) {
		this.schoolId = schoolId;
		this.recId = schoolId;
	}

	public String getSchoolName() {
		return schoolName;
	}
	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}
	public String getSchoolDesc() {
		return schoolDesc;
	}
	public void setSchoolDesc(String schoolDesc) {
		this.schoolDesc = schoolDesc;
	}
	public Date getDateOfCreation() {
		return dateOfCreation;
	}
	public void setDateOfCreation(Date dateOfCreation) {
		this.dateOfCreation = dateOfCreation;
	}
	public Date getDateOfUpdate() {
		return dateOfUpdate;
	}
	public void setDateOfUpdate(Date dateOfUpdate) {
		this.dateOfUpdate = dateOfUpdate;
	}
	public AddressDTO getAddressId() {
		return addressId;
	}
	public void setAddressId(AddressDTO addressId) {
		this.addressId = addressId;
	}
	public String getSchoolCode() {
		return schoolCode;
	}
	public void setSchoolCode(String schoolCode) {
		this.schoolCode = schoolCode;
	}
	public String getSchoolEmail() {
		return schoolEmail;
	}
	public void setSchoolEmail(String schoolEmail) {
		this.schoolEmail = schoolEmail;
	}
	
	public SchoolDTO() {
		super();
	}
	public Integer getRecId() {
		return recId;
	}
	public void setRecId(Integer recId) {
		this.recId = recId;
	}
	public Integer getAddId() {
		return addId;
	}
	public void setAddId(Integer addId) {
		this.addId = addId;
	}
	public String getAddress1() {
		return address1;
	}
	public void setAddress1(String address1) {
		this.address1 = address1;
	}
	public String getAddress2() {
		return address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	
	
	
	
	
}
