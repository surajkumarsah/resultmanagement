//package com.resultmanagement.resultmanagement.model;
//
//import java.util.Collection;
//
//import org.springframework.security.core.GrantedAuthority;
//
//import com.resultmanagement.resultmanagement.entity.Roles;
//import com.resultmanagement.resultmanagement.entity.Users;
//
//public class UsersModel extends Users {
//	
//	private Long compId;
//	private String userName;
//	private String password;
//	private String email;
//    private boolean enabled;
//    private boolean tokenExpired;
//    
//    
//    
//	public UsersModel(String userName, String password, String email, boolean enabled,
//			boolean tokenExpired, Collection<Roles> roles) {
//		super(userName, password, email, enabled, tokenExpired, roles);
//		//this.compId = compId;
//		this.userName = userName;
//		this.password = password;
//		this.email = email;
//		this.enabled = enabled;
//		this.tokenExpired = tokenExpired;
//	}
//	
//
//	public Long getCompId() {
//		return compId;
//	}
//	public void setCompId(Long compId) {
//		this.compId = compId;
//	}
//	public String getUserName() {
//		return userName;
//	}
//	public void setUserName(String userName) {
//		this.userName = userName;
//	}
//	public String getPassword() {
//		return password;
//	}
//	public void setPassword(String password) {
//		this.password = password;
//	}
//	public String getEmail() {
//		return email;
//	}
//	public void setEmail(String email) {
//		this.email = email;
//	}
//	public boolean isEnabled() {
//		return enabled;
//	}
//	public void setEnabled(boolean enabled) {
//		this.enabled = enabled;
//	}
//	public boolean isTokenExpired() {
//		return tokenExpired;
//	}
//	public void setTokenExpired(boolean tokenExpired) {
//		this.tokenExpired = tokenExpired;
//	}
//    
//    
//
//}
