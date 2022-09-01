package Foodify.Backend.controller;

import java.awt.PageAttributes.MediaType;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import Foodify.Backend.model.Restaurant;

import org.apache.commons.io.FilenameUtils;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import Foodify.Backend.repository.FoodMenuRepo;
import Foodify.Backend.repository.Registered_Customer_Repository;
import Foodify.Backend.repository.RestaurantRepository;
import Foodify.Backend.service.Restaurantserv;
import Foodify.Backend.exception.fieldErrorResponse;
import Foodify.Backend.model.FoodCategory;
import Foodify.Backend.model.FoodItem;
import Foodify.Backend.model.FoodMenu;
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

	@Autowired
	private FoodMenuRepo foodMenuRepo;

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
	
	/* -------------------------------- Add Food Menu -------------------------------- */
	@PostMapping("/RegisteredUser/addFoodMenu")
	public ResponseEntity<?> addFoodMenu(@Valid @RequestBody FoodMenu foodMenu) {
		
		String userName = SecurityContextHolder.getContext().getAuthentication().getName();
		
		foodMenu.setUsername(userName);
		
		try {

			return new ResponseEntity<>(service.addFoodMenu(foodMenu), HttpStatus.OK);

		} catch (Exception e) {

			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		
	}

	/* -------------------------------- Get Food Menu -------------------------------- */
	@GetMapping("/RegisteredUser/getFoodMenu")
	public List<FoodMenu> getFoodMenu() {
		
		String userName = SecurityContextHolder.getContext().getAuthentication().getName();
		
		return foodMenuRepo.findByuserName(userName);

	}



	/* -------------------------------- Add Food category -------------------------------- */
	@PostMapping("/RegisteredUser/addFoodMenuCategory")
	public ResponseEntity<?> addFoodCategory(@Valid @RequestBody FoodCategory foodCategory) {
		
		try {

			return new ResponseEntity<>(service.addFoodCategory(foodCategory), HttpStatus.OK);

		} catch (Exception e) {

			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		
	}


	/* -------------------------------- Add Food Item -------------------------------- */
	@PostMapping("/RegisteredUser/addFoodMenuCategoryItem")
	public ResponseEntity<?> addFoodCategoryItem(@Valid @RequestBody FoodItem foodItem) {
		
		try {

			return new ResponseEntity<>(service.addFoodCategoryItem(foodItem), HttpStatus.OK);

		} catch (Exception e) {

			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}
		
	}

	


//---------------upload cover image--------------------------------------
    @PostMapping("/FoodiFy/Restaurant/uploadBannerImage")
    public ResponseEntity<?> uploadImage(@RequestParam("imageFile")MultipartFile file) throws IOException {
    	
    	String userName = SecurityContextHolder.getContext().getAuthentication().getName();
    					
    	
//    	String imageDirectory = System.getProperty("user.dir") + "/uploads/restaurantBanners/"+userName;
//        makeDirectoryIfNotExist(imageDirectory);
//        System.out.println(imageDirectory);
//        Path fileNamePath = Paths.get(imageDirectory,userName.concat(".").concat(FilenameUtils.getExtension(file.getOriginalFilename())));
//        System.out.println(fileNamePath);
        
//    	-----------------------store image in binary, BSON type in MongoDB(files less than 16MB)--------------------
        Restaurant restaurant = restaurantrepo.findByuserName(userName);
        restaurant.setBannerImage(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
        System.out.println(restaurant.getBannerImage());
        restaurantrepo.save(restaurant);
        
		return new ResponseEntity<>(userName, HttpStatus.CREATED);
       
    }

//    private void makeDirectoryIfNotExist(String imageDirectory) {
//        File directory = new File(imageDirectory);
//        if (!directory.exists()) {
//            directory.mkdir();
//        }
//    }
    
//    -------------------get restaurant information-----------------------------
    @GetMapping("/FoodiFy/Restaurant/GetRestaurant")
    private String getRestaurantCover(Model model) {
    	
    	String userName = SecurityContextHolder.getContext().getAuthentication().getName();
    	Restaurant restaurant = restaurantrepo.findByuserName(userName);
    	
//    	model.addAttribute(restaurant);
    	model.addAttribute("bannerImage",Base64.getEncoder().encodeToString(restaurant.getBannerImage().getData()));
    	restaurant.setbImage(Base64.getEncoder().encodeToString(restaurant.getBannerImage().getData()));
    	
    	System.out.println(restaurant.getbImage());
    	
		return restaurant.getbImage();
    	
    }
    
    
  //--------------------------------------------upload Logo details--------------------------------------------------------
    @PostMapping("/FoodiFy/Restaurant/uploadLogoDetails")
    public ResponseEntity<?> uploadLogoDetails(@RequestParam("imageFile")MultipartFile file) throws IOException {
    	
    	String userName = SecurityContextHolder.getContext().getAuthentication().getName();
    	
//    	-----------------------store image in binary, BSON type in MongoDB(files less than 16MB)--------------------
        Restaurant restaurant = restaurantrepo.findByuserName(userName);
        restaurant.setBannerImage(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
        System.out.println(restaurant.getBannerImage());
        restaurantrepo.save(restaurant);
        
		return new ResponseEntity<>(userName, HttpStatus.CREATED);     
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
