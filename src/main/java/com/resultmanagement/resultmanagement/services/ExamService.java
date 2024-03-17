package com.resultmanagement.resultmanagement.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.resultmanagement.resultmanagement.dto.ExamDTO;

@Service
public interface ExamService {

	List<ExamDTO> schoolExamLists();

	void addExam(ExamDTO examDTO);

}
