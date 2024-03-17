package com.resultmanagement.resultmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resultmanagement.resultmanagement.entity.Exam;

public interface ExamRepository extends JpaRepository<Exam, Integer> {

}
