package com.resultmanagement.resultmanagement.dto;

import java.util.Date;

public class SubjectDTO {

	private Integer subjectId;
	private String name;
	private String type;
	private String courseType;
	private Date doc;
	private Date dou;
	private String subDesc;
	private Integer schoolId;
	
	
	
	public SubjectDTO() {
		super();
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
	public String getSubDesc() {
		return subDesc;
	}
	public void setSubDesc(String subDesc) {
		this.subDesc = subDesc;
	}
	public Integer getSchoolId() {
		return schoolId;
	}
	public void setSchoolId(Integer schoolId) {
		this.schoolId = schoolId;
	}
	
	
}
