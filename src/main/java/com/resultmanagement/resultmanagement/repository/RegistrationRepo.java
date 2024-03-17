package com.resultmanagement.resultmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resultmanagement.resultmanagement.entity.Registration;

public interface RegistrationRepo extends JpaRepository<Registration, Integer> {

}
