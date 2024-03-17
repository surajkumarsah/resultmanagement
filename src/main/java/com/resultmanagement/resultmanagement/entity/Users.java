package com.resultmanagement.resultmanagement.entity;

import java.util.Collection;
import java.util.List;

import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

@Entity
//@Table(uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class Users {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String userName;
	private String password;
	private String email;
    private boolean enabled;
    private boolean tokenExpired;
    
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_add_id", referencedColumnName = "address_id")
    private Address addressId;
    
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_class_id", referencedColumnName = "class_id")
    private StuClass classId;
    
    public Users() {
		super();
	}

	public Users(Integer id, String userName, String password, String email, boolean enabled, boolean tokenExpired, Address address) {
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.enabled = enabled;
		this.tokenExpired = tokenExpired;
		this.addressId = address;
		
	}
    
    

	public Users(String userName, String password, String email, boolean enabled, boolean tokenExpired,
			Collection<Roles> roles) {
		super();
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.enabled = enabled;
		this.tokenExpired = tokenExpired;
		this.roles = roles;
	}



	@ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(
                    name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "role_id", referencedColumnName = "id"))
    private Collection<Roles> roles;
	
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "student_subject_marks",
            joinColumns = @JoinColumn(
                    name = "student_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "stu_sub_marks", referencedColumnName = "stu_sub_marks_id"))
    private List<StuSubMarks> subMarks;
    
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public String getUserName() {
		return userName;
	}
	
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getPassword() {
		return password;
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

	public Collection<Roles> getRoles() {
		return roles;
	}

	public void setRoles(Collection<Roles> roles) {
		this.roles = roles;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Address getAddressId() {
		return addressId;
	}

	public void setAddressId(Address addressId) {
		this.addressId = addressId;
	}

//	public List<Subject> getSubjects() {
//		return subjects;
//	}
//
//	public void setSubjects(List<Subject> subjects) {
//		this.subjects = subjects;
//	}

	public StuClass getClassId() {
		return classId;
	}

	public void setClassId(StuClass classId) {
		this.classId = classId;
	}

//	public List<Exam> getExams() {
//		return exams;
//	}
//
//	public void setExams(List<Exam> exams) {
//		this.exams = exams;
//	}

	public List<StuSubMarks> getSubMarks() {
		return subMarks;
	}

	public void setSubMarks(List<StuSubMarks> subMarks) {
		this.subMarks = subMarks;
	}



	
}
