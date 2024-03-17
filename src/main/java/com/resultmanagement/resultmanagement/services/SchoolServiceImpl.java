package com.resultmanagement.resultmanagement.services;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Optional;

import javax.management.loading.ClassLoaderRepository;

import org.hibernate.query.UnknownSqlResultSetMappingException;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.resultmanagement.resultmanagement.dto.ClassDTO;
import com.resultmanagement.resultmanagement.dto.SchoolDTO;
import com.resultmanagement.resultmanagement.dto.StuSubMarksDTO;
import com.resultmanagement.resultmanagement.dto.SubjectDTO;
import com.resultmanagement.resultmanagement.entity.Address;
import com.resultmanagement.resultmanagement.entity.School;
import com.resultmanagement.resultmanagement.entity.StuClass;
import com.resultmanagement.resultmanagement.entity.StuSubMarks;
import com.resultmanagement.resultmanagement.entity.Subject;
import com.resultmanagement.resultmanagement.entity.Users;
import com.resultmanagement.resultmanagement.repository.ExamSubMarksRepository;
import com.resultmanagement.resultmanagement.repository.SchoolRepo;
import com.resultmanagement.resultmanagement.repository.StuClassRepo;
import com.resultmanagement.resultmanagement.repository.SubjectRepository;
import com.resultmanagement.resultmanagement.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class SchoolServiceImpl implements SchoolService{

	@Autowired
	SchoolRepo schoolRepo;
	
	@Autowired
	StuClassRepo classRepo;
	
	@Autowired
	SubjectRepository subjectRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	ExamSubMarksRepository examSubMarksRepository;
	
	@Autowired
	ExamSubMarksRepository subMarksRepository;
	
	@Autowired
	ModelMapper modelMapper;
	
	
	@Override
	public void addSchool(SchoolDTO schoolDTO) {
		// TODO Auto-generated method stub
		School school = modelMapper.map(schoolDTO, School.class);
		schoolRepo.save(school);
	}


	@Override
	public List<SchoolDTO> schoolLists() {
		List<School> schools = schoolRepo.findAll();
		List<SchoolDTO> schoolDTOs = null;
		Type targetListType = new TypeToken<List<SchoolDTO>>() {
        }.getType();
		schoolDTOs = modelMapper.map(schools, targetListType);
		
		for(School school: schools) {
			for(SchoolDTO schoolDTO: schoolDTOs) {
				if (school.getSchoolId() == schoolDTO.getSchoolId()) {
					Address address = school.getAddressId();
					if (address != null) {
						schoolDTO.setAddId(address.getAddressId());
						schoolDTO.setAddress1(address.getAddress1());
						schoolDTO.setAddress2(address.getAddress2());
						schoolDTO.setCity(address.getCity());
						schoolDTO.setState(address.getState());
						schoolDTO.setCountry(address.getCountry());
						schoolDTO.setZipCode(address.getZipCode());
					}
				}
			}
		}
		
		return schoolDTOs;
	}


	@Override
	public List autoCompleteSearchSchool(String searchText) {
		List<SchoolDTO> schoolDTOs = null;
        List<School> schools = schoolRepo.searchSchoolNameAutocomplete(searchText);
        Type targetListType = new TypeToken<List<SchoolDTO>>() {
        }.getType();
        schoolDTOs = modelMapper.map(schools, targetListType);
        return schoolDTOs;
	}


	@Override
	public void addClass(ClassDTO classDTO) {
		StuClass stuClass = modelMapper.map(classDTO, StuClass.class);
		classRepo.save(stuClass);
	}


	@Override
	public List<ClassDTO> schoolClassLists() {
		List<StuClass> classes = classRepo.findAll();
		List<ClassDTO> classDTOs = null;
		Type targetListType = new TypeToken<List<ClassDTO>>() {
        }.getType();
		classDTOs = modelMapper.map(classes, targetListType);
		return classDTOs;
	}


	@Override
	public void addSubject(SubjectDTO subjectDTO) {
		Subject subject = modelMapper.map(subjectDTO, Subject.class);
		subjectRepository.save(subject);
	}


	@Override
	public List<SubjectDTO> schoolSubLists() {
		List<Subject> subjects = subjectRepository.findAll();
		List<SubjectDTO> subjectDTOs = null;
		Type targetListType = new TypeToken<List<SubjectDTO>>() {
        }.getType();
		subjectDTOs = modelMapper.map(subjects, targetListType);
		return subjectDTOs;
	}

	@Transactional
	@Override
	public void addExamSubMarks(List<StuSubMarksDTO> stuSubMarksDTOs) {
		
		List<StuSubMarks> stuSubMarks = null, savedSubMarks = null;
		Type targetListType = new TypeToken<List<StuSubMarks>>() {
        }.getType();
		stuSubMarks = modelMapper.map(stuSubMarksDTOs, targetListType);
            
        if(stuSubMarksDTOs.get(0).getStuSubMarksId() == null) {
        	Optional<Users> users = userRepository.findById(stuSubMarksDTOs.get(0).getStudentId());
    		savedSubMarks = users.get().getSubMarks();
    		stuSubMarks.addAll(savedSubMarks);
    		users.get().setSubMarks(stuSubMarks);
    		userRepository.save(users.get());
        }else {
    		stuSubMarks = examSubMarksRepository.saveAll(stuSubMarks);
        }
			
	}


	@Override
	public List<StuSubMarksDTO> examMarkslists(Integer examId, Integer schoolId, Integer studentId) {
		List<StuSubMarksDTO> stuSubMarksDTOs = null;
		List<StuSubMarks> stuSubMarks = examSubMarksRepository.getExamMarksList(examId, schoolId, studentId);
		Type targetListType = new TypeToken<List<StuSubMarksDTO>>() {
        }.getType();
        stuSubMarksDTOs = modelMapper.map(stuSubMarks, targetListType);
		return stuSubMarksDTOs;
	}

}
