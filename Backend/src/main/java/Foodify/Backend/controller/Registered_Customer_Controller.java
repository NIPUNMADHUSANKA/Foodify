package Foodify.Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import Foodify.Backend.exception.Registered_Customer_Exception;
import Foodify.Backend.service.Registered_Customer_Sev;

//using cross origin annotation to communicate with react.js and spring
@CrossOrigin (origins = "http://localhost:3000")
@RestController
public class Registered_Customer_Controller {

	@Autowired
	private Registered_Customer_Sev RegCusServ;
	
	@InitBinder
	public void initBinder(WebDataBinder dataBinder) {
		StringTrimmerEditor stringTrimmerEditor = new StringTrimmerEditor(true);
		dataBinder.registerCustomEditor(String.class, stringTrimmerEditor);
	
	}
	
	//create method
	//Login
	@GetMapping("/Foodify/Login/{Username}/{Password}")
	public ResponseEntity<?> Login(@PathVariable("Username") String Username, @PathVariable("Password") String Password ){
		
		try {
			return new ResponseEntity<>(RegCusServ.Login(Username, Password), HttpStatus.OK);
		}
		catch(Registered_Customer_Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	
}
