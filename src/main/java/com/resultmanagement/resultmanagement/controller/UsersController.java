package com.resultmanagement.resultmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.resultmanagement.resultmanagement.dto.SchoolDTO;
import com.resultmanagement.resultmanagement.dto.UsersDTO;
import com.resultmanagement.resultmanagement.services.UserService;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/user")
public class UsersController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping("")
	public ModelAndView UsersPage() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("/admin/usersdetails.html");
		return mv;
	}
	
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public ResponseEntity<?> addUsers(@RequestBody UsersDTO usersDTO){
		userService.addUser(usersDTO);
		return new ResponseEntity<>(usersDTO, new HttpHeaders() ,HttpStatus.OK);
	}
	
	@ResponseBody
	@RequestMapping(value = "/lists", method = RequestMethod.GET)
	public List<UsersDTO> usersLists(){
		String roleString = "all";
		return userService.usersLists(roleString);
	}
	
	@ResponseBody
	@RequestMapping(value = "/adlists", method = RequestMethod.GET)
	public List<UsersDTO> adminLists(){
		String roleString = "Admin";
		return userService.usersLists(roleString);
	}
	
	@ResponseBody
	@RequestMapping(value = "/teacherlists", method = RequestMethod.GET)
	public List<UsersDTO> teacherlists(){
		String roleString = "Teacher";
		return userService.usersLists(roleString);
	}
	
	@ResponseBody
	@RequestMapping(value = "/studlists", method = RequestMethod.GET)
	public List<UsersDTO> studlists(){
		String roleString = "Student";
		return userService.usersLists(roleString);
	}
	
	@RequestMapping("/searchUserAutoComplete")
    @ResponseBody
    public List autoCompleteSearchSchool(@RequestParam("searchText") String searchText, HttpSession http) {

		List userNames = userService.autoCompleteSearchUser(searchText);
        return userNames;
    }
	
}
