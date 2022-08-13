package Foodify.Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Foodify.Backend.repository.Registered_Customer_Repository;
import Foodify.Backend.model.Registered_Customer;

//using cross origin annotation to communicate with react.js and spring
@CrossOrigin 
@RestController
public class RestaurantController{

	@Autowired
	private Registered_Customer_Repository restaurantRepository;
	
//	create method
	@PostMapping("/register/Signuprestaurant")
	public void createRestaurant(@RequestBody  Registered_Customer registeredCustomer) {
		restaurantRepository.save(registeredCustomer); 
	}
	
//	de_activate method
	@PostMapping("/restaurant/deactivate/{id}")
	public void deacivateRestaurant(@PathVariable String id) {
		
	}
	
//	show details method
	@GetMapping
	public void showRestaurantDetails() {
		
	}
}
