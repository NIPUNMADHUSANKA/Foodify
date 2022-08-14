package Foodify.Backend.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.FieldError;

import Foodify.Backend.exception.customFieldError;
import Foodify.Backend.exception.fieldErrorResponse;
import Foodify.Backend.model.Registered_Customer;
import Foodify.Backend.repository.Registered_Customer_Repository;


@Service
public class RestaurantService {
	
	@Autowired
	private Registered_Customer_Repository restaurantRepository;
	
//	public RestaurantService(HashMap<String, String> data) {
//		super();
//		Integer count = restaurantRepository.findByUserName(data.get("userName"));
//		System.out.println(count);
//		
//		if(count >= 0 ) {
//			System.out.println(data);
//		}
//	}

	public String validate(String name){
		
//		--------------call error response and add errors to custom field error list-----------
		fieldErrorResponse fieldErrorResponse = new fieldErrorResponse();

		List<customFieldError> fieldErrors = new ArrayList<>();
		
		
		String msg = "nothing";
		if (name == "userName") {
			
			System.out.println(name);
			return msg = "UserName already exist";
			
//			customFieldError fieldError = new customFieldError();
//        	fieldError.setField("userName");
//        	fieldError.setMessage("UserName already exist"); 
////        	System.out.println(fieldError.getField());
//        	fieldErrors.add(fieldError);
        	
		}else if(name == "email") {
			return msg = "Email already exist";
        	
		}
		return msg;
		
//		fieldErrorResponse.setFieldErrors(fieldErrors);

//		System.out.println(fieldErrors);
		
//		fieldErrorResponse.setFieldErrors(fieldErrors);
			
		
//		System.out.println(fieldErrorResponse.getFieldErrors());
	};
	
	
	
}
