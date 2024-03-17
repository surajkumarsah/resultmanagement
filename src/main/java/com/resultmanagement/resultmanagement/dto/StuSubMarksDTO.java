package com.resultmanagement.resultmanagement.dto;

public class StuSubMarksDTO {

	private Integer stuSubMarksId;
	private Integer schoolId;
	private Integer studentId;
	private Integer subjectId;
	private Integer marks;
	private Integer theoryMarks;
	private Integer practicalMarks;
	private Integer extraMarks;
	private Integer assignmentMarks;
	private Integer examId;
	
	
	public StuSubMarksDTO() {
		super();
	}
	
	
	
	public StuSubMarksDTO(Integer stuSubMarksId, Integer schoolId, Integer studentId, Integer subjectId, Integer marks,
			Integer theoryMarks, Integer practicalMarks, Integer extraMarks, Integer assignmentMarks, Integer examId) {
		super();
		this.stuSubMarksId = stuSubMarksId;
		this.schoolId = schoolId;
		this.studentId = studentId;
		this.subjectId = subjectId;
		this.marks = marks;
		this.theoryMarks = theoryMarks;
		this.practicalMarks = practicalMarks;
		this.extraMarks = extraMarks;
		this.assignmentMarks = assignmentMarks;
		this.examId = examId;
	}



	public Integer getTheoryMarks() {
		return theoryMarks;
	}


	public void setTheoryMarks(Integer theoryMarks) {
		this.theoryMarks = theoryMarks;
	}


	public Integer getPracticalMarks() {
		return practicalMarks;
	}


	public void setPracticalMarks(Integer practicalMarks) {
		this.practicalMarks = practicalMarks;
	}


	public Integer getExtraMarks() {
		return extraMarks;
	}


	public void setExtraMarks(Integer extraMarks) {
		this.extraMarks = extraMarks;
	}


	public Integer getAssignmentMarks() {
		return assignmentMarks;
	}


	public void setAssignmentMarks(Integer assignmentMarks) {
		this.assignmentMarks = assignmentMarks;
	}


	public Integer getStuSubMarksId() {
		return stuSubMarksId;
	}
	public void setStuSubMarksId(Integer stuSubMarksId) {
		this.stuSubMarksId = stuSubMarksId;
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
	public Integer getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(Integer subjectId) {
		this.subjectId = subjectId;
	}
	public Integer getMarks() {
		return marks;
	}
	public void setMarks(Integer marks) {
		this.marks = marks;
	}
	public Integer getExamId() {
		return examId;
	}
	public void setExamId(Integer examId) {
		this.examId = examId;
	}
	
	
}
