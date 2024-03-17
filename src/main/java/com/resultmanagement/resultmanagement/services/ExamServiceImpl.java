package com.resultmanagement.resultmanagement.services;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.resultmanagement.resultmanagement.dto.ExamDTO;
import com.resultmanagement.resultmanagement.dto.SchoolDTO;
import com.resultmanagement.resultmanagement.entity.Exam;
import com.resultmanagement.resultmanagement.entity.School;
import com.resultmanagement.resultmanagement.repository.ExamRepository;

@Service
public class ExamServiceImpl implements ExamService {

	@Autowired
	ExamRepository examRepository;
	
	@Autowired
	ModelMapper modelMapper;
	
	@Override
	public List<ExamDTO> schoolExamLists() {
		List<Exam> exams = examRepository.findAll();
		List<ExamDTO> examDTOs = null;
		Type targetListType = new TypeToken<List<ExamDTO>>() {
        }.getType();
		examDTOs = modelMapper.map(exams, targetListType);
		return examDTOs;
	}

	@Override
	public void addExam(ExamDTO examDTO) {
		Exam exam = modelMapper.map(examDTO, Exam.class);
		examRepository.save(exam);
	}

}
