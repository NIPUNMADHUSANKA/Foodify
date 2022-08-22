package Foodify.Backend.controller;

import javax.validation.Valid;

import Foodify.Backend.model.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Foodify.Backend.repository.Registered_Customer_Repository;
import Foodify.Backend.service.Restaurantserv;
import Foodify.Backend.exception.fieldErrorResponse;
import Foodify.Backend.model.Registered_Customer;


//using cross origin annotation to communicate with react.js and spring

@RestController
@RequestMapping("/Restaurant")
@CrossOrigin (origins = "http://localhost:3000")
public class RestaurantController{
	

	@Autowired
	private Registered_Customer_Repository restaurantRepository;
	
	@Autowired
	private Restaurantserv service;
	
	fieldErrorResponse fieldErrorResponse = new fieldErrorResponse();
	
//	-----------------------------------------create method-------------------------------------------------------------------
//	----------to response entity, use response object----------
	@PostMapping("/Register/Signuprestaurant")
	public ResponseEntity<Object> createRestaurant(@Valid @RequestBody  Registered_Customer registeredCustomer) {
		
//		restaurantRepository.save(registeredCustomer);
		
		
//		RestaurantService service = new RestaurantService();
		
		ResponseEntity<Object> count = service.validate("userName", "email",registeredCustomer.getuserName() , registeredCustomer.getEmail());
		
		String userName = registeredCustomer.getuserName();
		String email = registeredCustomer.getEmail();
		String password = registeredCustomer.getpassword();
		String accountStatus = registeredCustomer.getaccountState();

//		--------------------sending data to db if there is no errors--------------------------------------------
		if(count == null) {
			service.passwordEncorder(userName, email, password, accountStatus);
//			restaurantRepository.save(registeredCustomer);
		}
//		 System.out.println(data);
		return count;				
	}
//	----------------end of create method-----------------------------------------------------------------------------------------

	@PostMapping("/Restaurant/editContact")
	public boolean saveAbout(@RequestBody Restaurant restaurant ) {

//		restaurantRepository.save(restaurant);
		return true;
	}


//	----------------------------de_activate method-------------------------------------------------------------------------------
	@PostMapping("/restaurant/deactivate/{id}")
	public void deacivateRestaurant(@PathVariable String id) {
		
	}
	
//	show details method
	@GetMapping
	public void showRestaurantDetails() {
		
	}
}
