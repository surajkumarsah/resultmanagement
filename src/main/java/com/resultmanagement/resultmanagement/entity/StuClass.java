package com.resultmanagement.resultmanagement.entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

@Entity
public class StuClass {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "class_id")
	private Integer classId;
	private String className;
	private String classType;
	private String classDesc;
	private Date doc;
	private Date dou;
	private Integer schoolId;
	
	@ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "class_subject",
            joinColumns = @JoinColumn(
                    name = "class_id", referencedColumnName = "class_id"),
            inverseJoinColumns = @JoinColumn(
                    name = "subject_id", referencedColumnName = "subject_id"))
    private List<Subject> subjects;
	
	@ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "class_exam",
            joinColumns = @JoinColumn(
                    name = "class_id", referencedColumnName = "class_id"),
            inverseJoinColumns = @JoinColumn(
                    name = "exam_id", referencedColumnName = "exam_id"))
    private List<Exam> exams;
	
	public StuClass() {
		super();
	}
	
	public StuClass(Integer classId, String className, String classType, String classDesc, Date doc, Date dou,
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

	public List<Subject> getSubjects() {
		return subjects;
	}

	public void setSubjects(List<Subject> subjects) {
		this.subjects = subjects;
	}

	public List<Exam> getExams() {
		return exams;
	}

	public void setExams(List<Exam> exams) {
		this.exams = exams;
	}

	
	
	
}
