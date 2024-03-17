package com.resultmanagement.resultmanagement.entity;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "student_id")
	private Integer studentId;
	private String name;
	private String rollNo;
	private Integer schoolId;
	private String stuClass;
	private String stuRank;
	private Date doc;//date of creation
	private Date dou;//date of updation
	private Date dob;//date of birth
	private Integer addressId;
	private Integer mobile;
	private String email;
	
	
	
	public Student() {
		super();
	}

	public Student(Integer studentId, String name, String rollNo, Integer schoolId, String stuClass, String stuRank,
			Date doc, Date dou, Integer addressId, Date dob, Integer mobile, String email) {
		super();
		this.studentId = studentId;
		this.name = name;
		this.rollNo = rollNo;
		this.schoolId = schoolId;
		this.stuClass = stuClass;
		this.stuRank = stuRank;
		this.doc = doc;
		this.dou = dou;
		this.dob = dob;
		this.addressId = addressId;
		this.mobile = mobile;
		this.email = email;
	}
	
	public Integer getStudentId() {
		return studentId;
	}
	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRollNo() {
		return rollNo;
	}
	public void setRollNo(String rollNo) {
		this.rollNo = rollNo;
	}
	public String getRank() {
		return stuRank;
	}
	public void setRank(String rank) {
		this.stuRank = rank;
	}
	public Date getDoc() {
		return doc;
	}
	public void setDoc(Date doc) {
		this.doc = doc;
	}
	public Date getDou() {
		return dou;
	}
	public void setDou(Date dou) {
		this.dou = dou;
	}

	public Integer getAddress() {
		return addressId;
	}
	public void setAddress(Integer addressId) {
		this.addressId = addressId;
	}
	public Integer getMobile() {
		return mobile;
	}
	public void setMobile(Integer mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getSchoolId() {
		return schoolId;
	}

	public void setSchoolId(Integer schoolId) {
		this.schoolId = schoolId;
	}

	public String getStuClass() {
		return stuClass;
	}

	public void setStuClass(String stuClass) {
		this.stuClass = stuClass;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}
	
	
	

}
