package com.resultmanagement.resultmanagement.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Subject {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "subject_id")
	private Integer subjectId;
	private String name;
	private String type;
	private String courseType;
	private Date doc;
	private Date dou;
	private String subDesc;
	private Integer schoolId;
	
	public Subject() {
		super();
	}

	public Subject(Integer subjectId, String name, String type, String courseType, Date doc, Date dou, String desc,
			Integer schoolId) {
		super();
		this.subjectId = subjectId;
		this.name = name;
		this.type = type;
		this.courseType = courseType;
		this.doc = doc;
		this.dou = dou;
		this.subDesc = desc;
		this.schoolId = schoolId;
	}
	
	
	public Integer getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(Integer subjectId) {
		this.subjectId = subjectId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getCourseType() {
		return courseType;
	}
	public void setCourseType(String courseType) {
		this.courseType = courseType;
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
	public String getDesc() {
		return subDesc;
	}
	public void setDesc(String desc) {
		this.subDesc = desc;
	}
	public Integer getSchoolId() {
		return schoolId;
	}
	public void setSchoolId(Integer schoolId) {
		this.schoolId = schoolId;
	}

	

}
