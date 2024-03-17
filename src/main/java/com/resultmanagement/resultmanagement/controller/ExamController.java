package com.resultmanagement.resultmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.resultmanagement.resultmanagement.dto.ClassDTO;
import com.resultmanagement.resultmanagement.dto.ExamDTO;
import com.resultmanagement.resultmanagement.dto.SchoolDTO;
import com.resultmanagement.resultmanagement.services.ExamService;

@Controller
@RequestMapping("/exam")
public class ExamController {
	
	@Autowired
	ExamService examService;

	@ResponseBody
	@RequestMapping(value = "/elists", method = RequestMethod.GET)
	public List<ExamDTO> schoolExamLists(){
		return examService.schoolExamLists();
	}
	
	@RequestMapping(value = "/addExam", method = RequestMethod.POST)
	public ResponseEntity<?> addExam(@RequestBody ExamDTO examDTO){
		examService.addExam(examDTO);
		return new ResponseEntity<>(examDTO, new HttpHeaders() ,HttpStatus.OK);
	}
	
}
