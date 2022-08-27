package Foodify.Backend.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import Foodify.Backend.model.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import Foodify.Backend.repository.Registered_Customer_Repository;
import Foodify.Backend.repository.RestaurantRepository;
import Foodify.Backend.service.Restaurantserv;
import Foodify.Backend.exception.fieldErrorResponse;
import Foodify.Backend.model.Registered_Customer;
import Foodify.Backend.model.Restaurant;


//using cross origin annotation to communicate with react.js and spring
//@RequestMapping("/Restaurant")

@RestController
@CrossOrigin (origins = "http://localhost:3000")
public class RestaurantController{
	

	@Autowired
	private Registered_Customer_Repository restaurantRepository;
	
	@Autowired
	private Restaurantserv service;
	
	@Autowired
	private RestaurantRepository restaurantrepo;
	
	fieldErrorResponse fieldErrorResponse = new fieldErrorResponse();
	
//	-----------------------------------------create method-------------------------------------------------------------------
//	----------to response entity, use response object----------
	@PostMapping("/Restaurant/Register/Signuprestaurant")
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
			Registered_Customer user2 = restaurantRepository.findByuserName(userName);
			
			Restaurant restaurant = new Restaurant();
			restaurant.setUserId(user2.getId());
			restaurant.setUserName(user2.getuserName());
			restaurantrepo.save(restaurant);
			
			
		}
//		 System.out.println(data);
		return count;				
	}
//	----------------end of create method-----------------------------------------------------------------------------------------




//	----------------------------de_activate method-------------------------------------------------------------------------------
	@PostMapping("/Restaurant/restaurant/deactivate/{id}")
	public void deacivateRestaurant(@PathVariable String id) {
		
	}
	
//	show details method
	@GetMapping("/FoodiFy/Service/ShowRestaurant")
	public List<Restaurant> showRestaurants() {
		
		return restaurantrepo.findAll();
		
	}
	

	@PostMapping("/FoodiFy/Restaurant/editContact")
	public void updateContactDetails(@RequestBody  Restaurant contactDetails) {
		
		String userName = SecurityContextHolder.getContext().getAuthentication().getName();
		System.out.println(userName);
//		System.out.println(contactDetails.getAddress());
		
		Restaurant restaurant = restaurantrepo.findByuserName(userName);
//		System.out.println(restaurant.getUserId());
		
		restaurant.setAddress(contactDetails.getAddress());
		restaurant.setLocation(contactDetails.getLocation());
		restaurant.setTelephone(contactDetails.getTelephone());
		
		restaurantrepo.save(restaurant);
	}
	
	@PostMapping("/FoodiFy/Restaurant/editAboutUs")
	public void updateAboutUs(@RequestBody  Restaurant AboutUs) {
		
		String userName = SecurityContextHolder.getContext().getAuthentication().getName();
		System.out.println(userName);
//		System.out.println(contactDetails.getAddress());
		
		Restaurant restaurant = restaurantrepo.findByuserName(userName);
//		System.out.println(restaurant.getUserId());
		
		restaurant.setAddress(AboutUs.getAbout());
//		restaurant.setLocation(contactDetails.getLocation());
//		restaurant.setTelephone(contactDetails.getTelephone());
		
		restaurantrepo.save(restaurant);
	}
	
		
	
	
	
	
//	show details method
//	@GetMapping("/FoodiFy/Service/ShowRestaurantAbout")
//	public List<Restaurant> showAboutUs() {
//		
//		
////		return restaurantrepo.findlast();
//		
//	}
}
