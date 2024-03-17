package com.resultmanagement.resultmanagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.resultmanagement.resultmanagement.entity.Roles;

public interface RoleRepository extends JpaRepository<Roles, Integer>{

    @Query("select r from Roles r where r.roleName = :roleName")
    List<Roles> getRole(@Param("roleName") String roleName);
	
}
