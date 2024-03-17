package com.resultmanagement.resultmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.resultmanagement.resultmanagement.entity.Users;
import com.resultmanagement.resultmanagement.entity.Registration;
import com.resultmanagement.resultmanagement.services.AuthServices;

@Controller
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	AuthServices authServices;
	
	@RequestMapping("")
	public ModelAndView LoginPage() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("/auth/Registration.html");
		return mv;
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<?> login(@RequestBody Users login) {
		if (login.getUserName().equals("suraj") && login.getPassword().equals("suraj")) {
	        return new ResponseEntity<>("Pass", new HttpHeaders(), HttpStatus.OK);
		}
        return new ResponseEntity<>("Fail", new HttpHeaders(), HttpStatus.OK);
	}
	
	@RequestMapping("/reg")
	public ModelAndView regPage() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("/auth/registration.html");
		return mv;
	}
	
	@RequestMapping(value = "/registration", method = RequestMethod.POST)
	public ResponseEntity<?> registration(@RequestBody Registration registration) {
		Registration regi = authServices.addRegistration(registration);
        return new ResponseEntity<>(regi, new HttpHeaders(), HttpStatus.OK);
	}

}
