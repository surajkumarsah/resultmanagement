package com.resultmanagement.resultmanagement.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Exam {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "exam_id")
	private Integer examId;
	private String name;
	private String type;
	private Date doc;
	private Date dou;
	private Date doe;
	private String examDesc;
	private Integer schoolId;
	private Integer studentId;
	
	
	
	public Exam() {
		super();
	}

	public Exam(Integer examId, String name, String type, Date doc, Date dou, Date doe, String desc, Integer schoolId,
			Integer studentId) {
		super();
		this.examId = examId;
		this.name = name;
		this.type = type;
		this.doc = doc;
		this.dou = dou;
		this.doe = doe;
		this.examDesc = desc;
		this.schoolId = schoolId;
		this.studentId = studentId;
	}
	
	public Integer getExamId() {
		return examId;
	}
	public void setExamId(Integer examId) {
		this.examId = examId;
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
	public Date getDoe() {
		return doe;
	}
	public void setDoe(Date doe) {
		this.doe = doe;
	}
	public String getDesc() {
		return examDesc;
	}
	public void setDesc(String desc) {
		this.examDesc = desc;
	}
	public Integer getSchoolId() {
		return schoolId;
	}
	public void setSchoolId(Integer schoolId) {
		this.schoolId = schoolId;
	}
	public Integer getStudentId() {
		return studentId;
	}
	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}
	
	

}
