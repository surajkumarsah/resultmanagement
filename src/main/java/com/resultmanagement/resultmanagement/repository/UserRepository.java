package com.resultmanagement.resultmanagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.resultmanagement.resultmanagement.entity.School;
import com.resultmanagement.resultmanagement.entity.StuSubMarks;
import com.resultmanagement.resultmanagement.entity.Users;

public interface UserRepository extends JpaRepository<Users, Integer> {

    @Query("select u from Users u where u.id = :userId")
    List<Users> getUserByAdminId(@Param("userId") Long userId);
    
    @Query("SELECT u FROM Users u WHERE u.userName = :userName")
    public Users getUserByUsername(@Param("userName") String userName);
    
    @Query("select u from Users u where u.userName like lower(CONCAT('%',:userName,'%') ) ")
	List<Users> searchUserNameAutocomplete(@Param("userName") String userName);

    @Query("update Users u set u.subMarks =:stuSubMarks where u.id =:id")
	void updateSubMarks(@Param("stuSubMarks") List<StuSubMarks> stuSubMarks,@Param("id") Integer id);

}
