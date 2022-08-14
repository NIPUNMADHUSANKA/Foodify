package Foodify.Backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Foodify.Backend.exception.Registered_Customer_Exception;
import Foodify.Backend.exception.customFieldError;
import Foodify.Backend.exception.fieldErrorResponse;
import Foodify.Backend.model.Registered_Customer;

@Service
public class Registered_Customer_Service implements Registered_Customer_Sev{

	@Autowired
	private Foodify.Backend.repository.Registered_Customer_Repository RegCusRepo;
	
	@Override
	public Registered_Customer Login(String UserName, String Password) throws Registered_Customer_Exception {
		
		Optional<Registered_Customer> RegCusOptional = RegCusRepo.findByUser(UserName, Password);
		if (!RegCusOptional.isPresent()) {
			throw new Registered_Customer_Exception(Registered_Customer_Exception.NotFoundException());
		}else {
			return RegCusOptional.get();
		}
	}
	
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
