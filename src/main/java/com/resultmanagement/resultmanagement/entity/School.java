package com.resultmanagement.resultmanagement.entity;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;


@Entity
public class School {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer schoolId;
	private String schoolName;
	private String schoolDesc;
	private Date dateOfCreation;
	private Date dateOfUpdate;
	
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "school_address_id", referencedColumnName = "address_id")
	private Address addressId;
    
	private String schoolCode;
	private String schoolEmail;
	
	

	public School() {
		super();
	}

	public School(Integer schoolId, String schoolName, String schoolDesc, Date dateOfCreation, Date dateOfUpdate,
			Address addressId, String schoolCode, String schoolEmail) {
		super();
		this.schoolId = schoolId;
		this.schoolName = schoolName;
		this.schoolDesc = schoolDesc;
		this.dateOfCreation = dateOfCreation;
		this.dateOfUpdate = dateOfUpdate;
		this.addressId = addressId;
		this.schoolCode = schoolCode;
		this.schoolEmail = schoolEmail;
	}
	
	public Integer getSchoolId() {
		return schoolId;
	}
	public void setSchoolId(Integer schoolId) {
		this.schoolId = schoolId;
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
	
	public String getSchoolCode() {
		return schoolCode;
	}
	
	public void setSchoolCode(String schoolCode) {
		this.schoolCode = schoolCode;
	}

	public Address getAddressId() {
		return addressId;
	}

	public void setAddressId(Address addressId) {
		this.addressId = addressId;
	}

	public String getSchoolEmail() {
		return schoolEmail;
	}

	public void setSchoolEmail(String schoolEmail) {
		this.schoolEmail = schoolEmail;
	}
	
	
	
}
