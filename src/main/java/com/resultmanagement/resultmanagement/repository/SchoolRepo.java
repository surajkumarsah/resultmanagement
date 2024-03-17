package com.resultmanagement.resultmanagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.resultmanagement.resultmanagement.entity.School;

public interface SchoolRepo extends JpaRepository<School, Integer> {

    @Query("select s from School s where s.schoolName like lower(CONCAT('%',:schoolName,'%') ) ")
	List<School> searchSchoolNameAutocomplete(@Param("schoolName") String schoolName);

}
