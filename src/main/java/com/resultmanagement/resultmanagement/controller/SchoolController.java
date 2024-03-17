package com.resultmanagement.resultmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.resultmanagement.resultmanagement.dto.ClassDTO;
import com.resultmanagement.resultmanagement.dto.SchoolDTO;
import com.resultmanagement.resultmanagement.dto.StuSubMarksDTO;
import com.resultmanagement.resultmanagement.dto.SubjectDTO;
import com.resultmanagement.resultmanagement.dto.UsersDTO;
import com.resultmanagement.resultmanagement.entity.School;
import com.resultmanagement.resultmanagement.services.SchoolService;
import com.resultmanagement.resultmanagement.services.UserService;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/school")
public class SchoolController {
	
	@Autowired
	SchoolService schoolService;
	
	@Autowired
	UserService userService;
	
	@RequestMapping("")
	public ModelAndView addSchoolPage() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("/school/schooldetails.html");
		return mv;
	}
	
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public ResponseEntity<?> addSchool(@RequestBody SchoolDTO schoolDTO){
		schoolService.addSchool(schoolDTO);
		return new ResponseEntity<>(schoolDTO, new HttpHeaders() ,HttpStatus.OK);
	}
	
	@RequestMapping(value = "/addClass", method = RequestMethod.POST)
	public ResponseEntity<?> addClass(@RequestBody ClassDTO classDTO){
		schoolService.addClass(classDTO);
		return new ResponseEntity<>(classDTO, new HttpHeaders() ,HttpStatus.OK);
	}
	
	@RequestMapping(value = "/addSubject", method = RequestMethod.POST)
	public ResponseEntity<?> addSubject(@RequestBody SubjectDTO subjectDTO){
		schoolService.addSubject(subjectDTO);
		return new ResponseEntity<>(subjectDTO, new HttpHeaders() ,HttpStatus.OK);
	}
	
	@ResponseBody
	@RequestMapping(value = "/lists", method = RequestMethod.GET)
	public List<SchoolDTO> schoolLists(){
		return schoolService.schoolLists();
	}
	
	@ResponseBody
	@RequestMapping(value = "/sublists", method = RequestMethod.GET)
	public List<SubjectDTO> schoolSubLists(){
		return schoolService.schoolSubLists();
	}
	
	@ResponseBody
	@RequestMapping(value = "/clists", method = RequestMethod.GET)
	public List<ClassDTO> schoolClassLists(){
		return schoolService.schoolClassLists();
	}
	
	@RequestMapping("/searchSchoolAutoComplete")
    @ResponseBody
    public List autoCompleteSearchSchool(@RequestParam("searchText") String searchText, HttpSession http) {

		List SchoolNames = schoolService.autoCompleteSearchSchool(searchText);
        return SchoolNames;
    }
	
	@RequestMapping(value = "/addExamMarks", method = RequestMethod.POST)
	public ResponseEntity<?> addExamSubMarks(@RequestBody List<StuSubMarksDTO> stuSubMarksDTOs){
		schoolService.addExamSubMarks(stuSubMarksDTOs);
		return new ResponseEntity<>("Marks added Successfully.", new HttpHeaders() ,HttpStatus.OK);
	}

	@ResponseBody
	@RequestMapping(value = "/examMarkslists", method = RequestMethod.GET)
	public ResponseEntity<?> examMarkslists(@RequestBody StuSubMarksDTO stuSubMarksDTO){
		List<StuSubMarksDTO> stuSubMarksDTOs = schoolService.examMarkslists(stuSubMarksDTO.getExamId(), stuSubMarksDTO.getSchoolId(), stuSubMarksDTO.getStudentId());
		return new ResponseEntity<>(stuSubMarksDTOs, new HttpHeaders() ,HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/reportcard", method = RequestMethod.GET)
	public ModelAndView reportCard() throws Exception {
		ModelAndView mv = new ModelAndView();
		
		//UsersDTO usersDTO = userService.getUserById(id);
		mv.setViewName("/school/reportcard.html");
		//mv.addObject("user", usersDTO);
//		PdfGeneratorRunner r = new PdfGeneratorRunner();
//		String runStr = "runStirng";
//		r.run(runStr);
		return mv;
	}
	
}
