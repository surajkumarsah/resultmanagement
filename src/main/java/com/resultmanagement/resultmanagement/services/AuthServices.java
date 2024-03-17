package com.resultmanagement.resultmanagement.services;

import org.springframework.stereotype.Service;

import com.resultmanagement.resultmanagement.entity.Registration;

@Service
public interface AuthServices {

	Registration addRegistration(Registration registration);

}
