package Foodify.Backend.service;
import org.springframework.http.ResponseEntity;

import Foodify.Backend.model.Registered_Customer;

public interface Restaurantserv {

	public ResponseEntity<Object> validate(String name,String name2,String username,String email);
	
	public String passwordEncorder(String userName,String email,String password);
	
	
}
