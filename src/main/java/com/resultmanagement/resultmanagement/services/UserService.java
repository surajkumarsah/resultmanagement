package com.resultmanagement.resultmanagement.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.resultmanagement.resultmanagement.dto.UsersDTO;
import com.resultmanagement.resultmanagement.entity.Users;

@Service
public interface UserService{

	Users findByEmail(String name);
	
	List autoCompleteSearchUser(String searchText);

	List<UsersDTO> usersLists(String role);

	void addUser(UsersDTO usersDTO);

	List<UsersDTO> adminLists();

	UsersDTO getUserById(Integer id);

}
