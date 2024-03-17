package com.resultmanagement.resultmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.resultmanagement.resultmanagement.entity.Roles;

public interface UserRoleRepository extends JpaRepository<Roles, Integer>{

    @Query("select roleName from Roles roles where roles.roleName = :roleName")
    Roles getRole(@Param("roleName") String roleName);
}
