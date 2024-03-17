package com.resultmanagement.resultmanagement.services;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.resultmanagement.resultmanagement.dto.ClassDTO;
import com.resultmanagement.resultmanagement.dto.SchoolDTO;
import com.resultmanagement.resultmanagement.dto.StuSubMarksDTO;
import com.resultmanagement.resultmanagement.dto.SubjectDTO;
import com.resultmanagement.resultmanagement.entity.School;

@Service
public interface SchoolService {

	void addSchool(SchoolDTO schoolDTO);

	List<SchoolDTO> schoolLists();

	List autoCompleteSearchSchool(String searchText);

	void addClass(ClassDTO classDTO);

	List<ClassDTO> schoolClassLists();

	void addSubject(SubjectDTO subjectDTO);

	List<SubjectDTO> schoolSubLists();

	void addExamSubMarks(List<StuSubMarksDTO> stuSubMarksDTOs);

	List<StuSubMarksDTO> examMarkslists(Integer examId, Integer schoolId, Integer studentId);

}
