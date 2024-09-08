package com.example.springboot.Respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springboot.model.Employee;

public interface EmployeeRespository extends JpaRepository<Employee,Long> {

    
}