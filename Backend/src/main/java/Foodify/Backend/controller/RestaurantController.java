package Foodify.Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Foodify.Backend.repository.RestaurantRepository;
import Foodify.Backend.model.Restaurant;

@RestController
public class RestaurantController extends Registered_Customer_Controller{

	@Autowired
	private RestaurantRepository restaurantRepository;
	
//	create method
	@PostMapping("/create")
	public void createRestaurant(@RequestBody Restaurant restaurant) {
		restaurantRepository.insert(restaurant); 
	}
	
//	update method
	@PostMapping
	public void updateRestaurant() {
		
	}
	
//	de_activate method
	@PostMapping("/deactivate/{id}")
	public void deacivateRestaurant(@PathVariable String id) {
		
	}
	
//	show details method
	@GetMapping
	public void showRestaurantDetails() {
		
	}
}
