package com.resultmanagement.resultmanagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.resultmanagement.resultmanagement.entity.StuSubMarks;

public interface ExamSubMarksRepository extends JpaRepository<StuSubMarks, Integer>{

    @Query("select m from StuSubMarks m where m.examId = :id and m.schoolId = :schoolId and m.studentId = :studentId")
	List<StuSubMarks> getExamMarksList(@Param("id") Integer examId, @Param("schoolId") Integer schoolId, @Param("studentId") Integer studentId);
	
	
}
