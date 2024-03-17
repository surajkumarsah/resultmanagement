package com.resultmanagement.resultmanagement.services;


import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.stream.Collectors;
import java.lang.reflect.Type;
import java.util.*;

import com.resultmanagement.resultmanagement.dto.RolesDTO;
import com.resultmanagement.resultmanagement.dto.SchoolDTO;
import com.resultmanagement.resultmanagement.dto.UsersDTO;
import com.resultmanagement.resultmanagement.entity.Address;
import com.resultmanagement.resultmanagement.entity.Roles;
import com.resultmanagement.resultmanagement.entity.School;
import com.resultmanagement.resultmanagement.entity.StuClass;
import com.resultmanagement.resultmanagement.entity.Users;
import com.resultmanagement.resultmanagement.repository.UserRepository;

import ch.qos.logback.core.joran.conditional.IfAction;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	ModelMapper modelMapper;
	
	@Override
	public Users findByEmail(String name) {
		return userRepository.getUserByUsername(name);
	}

	@Override
	public List autoCompleteSearchUser(String searchText) {
		List<UsersDTO> usersDTOs = null;
        List<Users> users = userRepository.searchUserNameAutocomplete(searchText);
        Type targetListType = new TypeToken<List<UsersDTO>>() {
        }.getType();
        usersDTOs = modelMapper.map(users, targetListType);
        return usersDTOs;
	}

	@Override
	public List<UsersDTO> usersLists(String role) {
		List<Users> users = userRepository.findAll();
		List<UsersDTO> usersDTOs = new ArrayList<>();
		Type targetListType = new TypeToken<List<UsersDTO>>() {
        }.getType();
		//usersDTOs = modelMapper.map(users, targetListType);
		
		for(Users user: users) {
			Address address = user.getAddressId();
			if (address != null) {
				
				UsersDTO usersDTO = new UsersDTO();
				
				usersDTO = modelMapper.map(user, UsersDTO.class);
						
				usersDTO.setAddId(address.getAddressId());
				usersDTO.setAddress1(address.getAddress1());
				usersDTO.setAddress2(address.getAddress2());
				usersDTO.setCity(address.getCity());
				usersDTO.setState(address.getState());
				usersDTO.setCountry(address.getCountry());
				usersDTO.setZipCode(address.getZipCode());
				
				String[] rolesStrArray = null;
				
				for(RolesDTO roles : usersDTO.getRoles()) {
					if(usersDTO.getRolesStr() == null) {
						usersDTO.setRolesStr(roles.getRoleName());
					}else {
						usersDTO.setRolesStr(usersDTO.getRolesStr()+", "+roles.getRoleName());
					}
				}
				
				if(!usersDTO.getRolesStr().isEmpty()) {
					rolesStrArray = usersDTO.getRolesStr().replaceAll("\\s", "").toString().split(",");
				}
				
				for(String roleStr: rolesStrArray) {
					if(!usersDTOs.stream().filter(p -> p.getId().equals(user.getId())).findAny().isPresent()) {
					
					if (role.equals("all")) {
						usersDTOs.add(usersDTO);
					}else if(role.equals("Admin") && roleStr.equals(role)) {
						usersDTOs.add(usersDTO);
					}else if(role.equals("Teacher") && roleStr.equals(role)) {
						usersDTOs.add(usersDTO);
					}else if(role.equals("Student") && roleStr.equals(role)) {
						usersDTOs.add(usersDTO);
					}
				}
				}

			}
				
		}
		
		return usersDTOs;
	}

	@Override
	public void addUser(UsersDTO usersDTO) {
		Users users = modelMapper.map(usersDTO, Users.class);
		userRepository.save(users);
	}

	@Override
	public List<UsersDTO> adminLists() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UsersDTO getUserById(Integer id) {
		Optional<Users> users = userRepository.findById(id);
		UsersDTO usersDTO = modelMapper.map(users.get(), UsersDTO.class);
		return usersDTO;
	}

}
