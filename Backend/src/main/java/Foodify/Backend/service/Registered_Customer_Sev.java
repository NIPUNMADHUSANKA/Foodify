package Foodify.Backend.service;

import org.springframework.http.ResponseEntity;

import Foodify.Backend.exception.Registered_Customer_Exception;
import Foodify.Backend.model.Registered_Customer;

public interface Registered_Customer_Sev {

	public Registered_Customer Login(String UserName,String Password ) throws Registered_Customer_Exception;
	
	public ResponseEntity<Object> validate(String name,String name2,String username,String email);

}
