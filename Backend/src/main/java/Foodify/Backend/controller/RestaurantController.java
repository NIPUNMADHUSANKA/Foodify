package Foodify.Backend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Foodify.Backend.repository.Registered_Customer_Repository;
import Foodify.Backend.service.RestaurantService;
import Foodify.Backend.exception.customFieldError;
import Foodify.Backend.exception.fieldErrorResponse;
import Foodify.Backend.model.Registered_Customer;
import Foodify.Backend.model.formResponse;

//using cross origin annotation to communicate with react.js and spring

@RestController
@CrossOrigin (origins = "http://localhost:3000")
public class RestaurantController{
	

	@Autowired
	private Registered_Customer_Repository restaurantRepository;
	
	fieldErrorResponse fieldErrorResponse = new fieldErrorResponse();
	
//	-----------------------------------------create method-------------------------------------------------------------------
//	----------to response entity, use response object----------
	@PostMapping("/register/Signuprestaurant")
	public Object createRestaurant(@Valid @RequestBody  Registered_Customer registeredCustomer) {
		
//		restaurantRepository.save(registeredCustomer);

//		hash map to get values from the post-------------------------
		HashMap<String, String> data = new HashMap<String, String>();
		
//		assigning values to hash map
		data.put("userName", registeredCustomer.getuserName());
		data.put("email", registeredCustomer.getEmail());
		data.put("password", registeredCustomer.getpassword());
		
//		calling restaurant service-------------------------------------
		RestaurantService RS = new RestaurantService();
		String error;
		
//		---------------to check the userName-------------------------------------------------
		Integer count1 = restaurantRepository.findByUserName(data.get("userName")); 
//		System.out.println(count);
		if(count1 > 0 ) {
			System.out.println(data);
			error = "UserName already exists";
			
//			--------------call error response and add errors to custom field error list-----------
			fieldErrorResponse fieldErrorResponse = new fieldErrorResponse();

			List<customFieldError> fieldErrors = new ArrayList<>();
			
			customFieldError fieldError = new customFieldError();
        	fieldError.setField("userName");
        	fieldError.setMessage(error);
        	
        	System.out.println(error);
//        	System.out.println(fieldError.getField());
        	fieldErrors.add(fieldError);
        	
//        	adding final values to fieldErrorResponse and sending it as JSON object to frontend--------------
        	fieldErrorResponse.setFieldErrors(fieldErrors);
    		new ResponseEntity<Object>(fieldErrorResponse, HttpStatus.BAD_REQUEST);
		}
		
//		-----------------------to check the email------------------------------------
		Integer count2 = restaurantRepository.findByUserEmail(data.get("email")); 
//		System.out.println(count);
		if(count2 > 0 ) {
			System.out.println(data);
			error = "Email already exists";
			System.out.println(error);
			
//			--------------call error response and add errors to custom field error list-----------
			fieldErrorResponse fieldErrorResponse = new fieldErrorResponse();

			List<customFieldError> fieldErrors = new ArrayList<>();
			
			customFieldError fieldError = new customFieldError();
        	fieldError.setField("email");
        	fieldError.setMessage(error); 
//        	System.out.println(fieldError.getField());
        	fieldErrors.add(fieldError);
        	
//        	adding final values to fieldErrorResponse and sending it as JSON object to frontend--------------
        	fieldErrorResponse.setFieldErrors(fieldErrors);
    		new ResponseEntity<Object>(fieldErrorResponse, HttpStatus.BAD_REQUEST);
		}
		
//		--------------------sending data to db if there is no errors--------------------------------------------
		if(count1==0 && count2==0 && fieldErrorResponse.getFieldErrors()== null) {
			restaurantRepository.save(registeredCustomer);
		}
//		restaurantRepository.find();
//		 System.out.println(data);
		return null;				
	}
//	----------------end of create method-----------------------------------------------------------------------------------------
	
	
//	----------------------------de_activate method-------------------------------------------------------------------------------
	@PostMapping("/restaurant/deactivate/{id}")
	public void deacivateRestaurant(@PathVariable String id) {
		
	}
	
//	show details method
	@GetMapping
	public void showRestaurantDetails() {
		
	}
}
