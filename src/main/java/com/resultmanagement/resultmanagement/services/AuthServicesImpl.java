package com.resultmanagement.resultmanagement.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.resultmanagement.resultmanagement.entity.Registration;
import com.resultmanagement.resultmanagement.repository.RegistrationRepo;

@Service
public class AuthServicesImpl implements AuthServices {

	@Autowired
	RegistrationRepo registrationRepo;
	
	@Override
	public Registration addRegistration(Registration registration) {
		Registration reg = registrationRepo.save(registration);
		return reg;
	}

}
