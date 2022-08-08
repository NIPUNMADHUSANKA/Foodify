package Foodify.Backend.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Foodify.Backend.Repository.Registered_Customer_Repository;
import Foodify.Backend.exception.Registered_Customer_Exception;
import Foodify.Backend.model.Registered_Customer;
import Foodify.Backend.service.Registered_Customer_Sev;

@RestController
public class Registered_Customer_Controller {

	@Autowired
	private Registered_Customer_Sev RegCusServ;
	private Registered_Customer_Repository registeredCustomerRepository;
	
	@GetMapping("/Foodify/{Username}/{Password}")
	public ResponseEntity<?> Login(@PathVariable("Username") String Username, @PathVariable("Password") String Password ){
	
		try {
			return new ResponseEntity<>(RegCusServ.Login(Username, Password), HttpStatus.OK);
		}
		catch(Registered_Customer_Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
//	create method
//	put object name and v name
	@PostMapping("/create1")
	public void createRegisteredUser(@RequestBody Registered_Customer registeredCustome) {
		registeredCustomerRepository.insert(registeredCustome); 
	}
	
//	update method
	@PostMapping
	public void updateRegisteredUser() {
		
	}
	
//	de_activate method
	@PostMapping("/deactivate/{id}")
	public void deacivateRegisteredUser(@PathVariable String id) {
		
	}
	
}
