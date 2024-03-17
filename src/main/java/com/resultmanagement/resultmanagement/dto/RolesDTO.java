package com.resultmanagement.resultmanagement.dto;

public class RolesDTO {

	private Integer id;
	private String roleName;
	private String roleDesc;
	private Integer schoolId;
	
	public RolesDTO() {
		
	}
	
	public RolesDTO(Integer id, String roleName, String roleDesc, Integer schoolId) {
		super();
		this.id = id;
		this.roleName = roleName;
		this.roleDesc = roleDesc;
		this.schoolId = schoolId;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getRoleName() {
		return roleName;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	public String getRoleDesc() {
		return roleDesc;
	}
	public void setRoleDesc(String roleDesc) {
		this.roleDesc = roleDesc;
	}
	public Integer getSchoolId() {
		return schoolId;
	}
	public void setSchoolId(Integer schoolId) {
		this.schoolId = schoolId;
	}
	
	
	
}
