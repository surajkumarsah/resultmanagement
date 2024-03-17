package com.resultmanagement.resultmanagement.dto;

import java.util.Date;
import java.util.List;

import com.resultmanagement.resultmanagement.entity.Exam;
import com.resultmanagement.resultmanagement.entity.Subject;

public class ClassDTO {

	private Integer classId;
	private String className;
	private String classType;
	private String classDesc;
	private Date doc;
	private Date dou;
	private Integer schoolId;
    private List<SubjectDTO> subjects;
    private List<ExamDTO> exams;
	
	
	public ClassDTO() {
		super();
	}
	
	public ClassDTO(Integer classId, String className, String classType, String classDesc, Date doc, Date dou,
			Integer schoolId) {
		super();
		this.classId = classId;
		this.className = className;
		this.classType = classType;
		this.classDesc = classDesc;
		this.doc = doc;
		this.dou = dou;
		this.schoolId = schoolId;
	}
	public Integer getClassId() {
		return classId;
	}
	public void setClassId(Integer classId) {
		this.classId = classId;
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	public String getClassType() {
		return classType;
	}
	public void setClassType(String classType) {
		this.classType = classType;
	}
	public String getClassDesc() {
		return classDesc;
	}
	public void setClassDesc(String classDesc) {
		this.classDesc = classDesc;
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
	public Integer getSchoolId() {
		return schoolId;
	}
	public void setSchoolId(Integer schoolId) {
		this.schoolId = schoolId;
	}

	public List<SubjectDTO> getSubjects() {
		return subjects;
	}

	public void setSubjects(List<SubjectDTO> subjects) {
		this.subjects = subjects;
	}

	public List<ExamDTO> getExams() {
		return exams;
	}

	public void setExams(List<ExamDTO> exams) {
		this.exams = exams;
	}

	
	
	
	
}
