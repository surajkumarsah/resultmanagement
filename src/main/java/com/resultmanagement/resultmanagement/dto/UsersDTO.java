package com.resultmanagement.resultmanagement.dto;

import java.util.List;

import com.resultmanagement.resultmanagement.entity.Address;
import com.resultmanagement.resultmanagement.entity.Exam;
import com.resultmanagement.resultmanagement.entity.StuClass;
import com.resultmanagement.resultmanagement.entity.StuSubMarks;
import com.resultmanagement.resultmanagement.entity.Subject;

public class UsersDTO {

	private Integer id;
	private String userName;
	private String password;
	private String email;
    private boolean enabled;
    private boolean tokenExpired;
    private List<RolesDTO> roles;
    private AddressDTO addressId;
    private Integer schoolId;
    private String rolesStr;
    
    private ClassDTO classId;
    private List<SubjectDTO> subjects;
    private List<ExamDTO> exams;
    private List<StuSubMarksDTO> subMarks;
    
	private Integer addId;
	private String address1;
	private String address2;
	private String city;
	private String country;
	private String state;
	private String zipCode;
    
	public UsersDTO() {
		super();
	}
	
	public UsersDTO(Integer id, String userName, String password, String email, boolean enabled, boolean tokenExpired) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.enabled = enabled;
		this.tokenExpired = tokenExpired;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public boolean isEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	public boolean isTokenExpired() {
		return tokenExpired;
	}
	public void setTokenExpired(boolean tokenExpired) {
		this.tokenExpired = tokenExpired;
	}

	public List<RolesDTO> getRoles() {
		return roles;
	}

	public void setRoles(List<RolesDTO> roles) {
		this.roles = roles;
	}

	public AddressDTO getAddress() {
		return addressId;
	}

	public void setAddress(AddressDTO address) {
		this.addressId = address;
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

	public Integer getSchoolId() {
		return schoolId;
	}

	public void setSchoolId(Integer schoolId) {
		this.schoolId = schoolId;
	}

	public String getRolesStr() {
		return rolesStr;
	}

	public void setRolesStr(String rolesStr) {
		this.rolesStr = rolesStr;
	}

	public ClassDTO getClassId() {
		return classId;
	}

	public void setClassId(ClassDTO classId) {
		this.classId = classId;
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

	public AddressDTO getAddressId() {
		return addressId;
	}

	public void setAddressId(AddressDTO addressId) {
		this.addressId = addressId;
	}

	public List<StuSubMarksDTO> getSubMarks() {
		return subMarks;
	}

	public void setSubMarks(List<StuSubMarksDTO> subMarks) {
		this.subMarks = subMarks;
	}


	
	
	
}
