
package Foodify.Backend.controller;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Foodify.Backend.repository.Registered_Customer_Repository;
import Foodify.Backend.exception.Registered_Customer_Exception;
import Foodify.Backend.exception.customFieldError;
import Foodify.Backend.exception.fieldErrorResponse;
import Foodify.Backend.model.Registered_Customer;
import Foodify.Backend.service.Registered_Customer_Service;
import Foodify.Backend.service.Registered_Customer_Sev;
import Foodify.Backend.model.formResponse;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
public class Registered_Customer_Controller {

	@Autowired
	private Registered_Customer_Sev RegCusServ;
	private Registered_Customer_Repository RegCusRepo;
	
	
	@GetMapping("/Foodify/{Username}/{Password}")
	public ResponseEntity<?> Login(@PathVariable("Username") String Username, @PathVariable("Password") String Password ){
	
		try {
			return new ResponseEntity<>(RegCusServ.Login(Username, Password), HttpStatus.OK);
		}
		catch(Registered_Customer_Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	fieldErrorResponse fieldErrorResponse = new fieldErrorResponse();
//	-----------------------------------------create method-------------------------------------------------------------------
//	----------to response entity, use response object----------
	@PostMapping("/register/Signupuser")
	public ResponseEntity<?> createUser(@Valid @RequestBody Registered_Customer registeredCustomer) {
		
//		registered_Customer_Repository.save(registeredCustomer);

//		hash map to get values from the post-------------------------
		HashMap<String, String> data = new HashMap<String, String>();
		
//		assigning values to hash map
		data.put("userName", registeredCustomer.getuserName());
		data.put("email", registeredCustomer.getEmail());
		data.put("password", registeredCustomer.getpassword());
		
//		calling Registered_Customer_Service-------------------------------------
		Registered_Customer_Service CS = new Registered_Customer_Service();
		String error;
		
//		---------------to check the userName-------------------------------------------------
		Integer count1 = RegCusRepo.findByUserName(data.get("userName")); 
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
    		return new ResponseEntity<Object>(fieldErrorResponse, HttpStatus.BAD_REQUEST);
		}
		
//		-----------------------to check the email------------------------------------
		Integer count2 = RegCusRepo.findByUserEmail(data.get("email")); 
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
    		return new ResponseEntity<Object>(fieldErrorResponse, HttpStatus.BAD_REQUEST);
		}
		
//		--------------------sending data to db if there is no errors--------------------------------------------
		if(count1==0 && count2==0 && fieldErrorResponse.getFieldErrors()== null) {
			RegCusRepo.save(registeredCustomer);
		}
//		RegCusRepo.find();
//		 System.out.println(data);
		return null;				
	}
//	----------------end of create method-----------------------------------------------------------------------------------------
	
	
	
//	show details method
//	@GetMapping
//	public void showUserDetails() {
//		
//	}
}