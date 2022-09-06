package Foodify.Backend.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import javax.validation.Valid;

import Foodify.Backend.model.Restaurant;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import Foodify.Backend.repository.FoodCategoryRepo;
import Foodify.Backend.repository.FoodItem_Repository;
import Foodify.Backend.repository.FoodMenuRepo;
import Foodify.Backend.repository.Registered_Customer_Repository;
import Foodify.Backend.repository.RestaurantRepository;
import Foodify.Backend.service.Restaurantserv;
import Foodify.Backend.exception.fieldErrorResponse;
import Foodify.Backend.model.FoodCategory;
import Foodify.Backend.model.FoodItem;
import Foodify.Backend.model.FoodMenu;
import Foodify.Backend.model.Registered_Customer;

//using cross origin annotation to communicate with react.js and spring
//@RequestMapping("/Restaurant")

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RestaurantController {

	@Autowired
	private Registered_Customer_Repository restaurantRepository;

	@Autowired
	private Restaurantserv service;

	@Autowired
	private RestaurantRepository restaurantrepo;

	@Autowired
	private FoodMenuRepo foodMenuRepo;

	@Autowired
	private FoodCategoryRepo foodCategoryRepo;

	
	@Autowired
	private FoodItem_Repository foodItem_Repository;

	fieldErrorResponse fieldErrorResponse = new fieldErrorResponse();

	// -----------------------------------------create
	// method-------------------------------------------------------------------
	// ----------to response entity, use response object----------
	@PostMapping("/Restaurant/Register/Signuprestaurant")
	public ResponseEntity<Object> createRestaurant(@Valid @RequestBody Registered_Customer registeredCustomer) {

		// restaurantRepository.save(registeredCustomer);

		// RestaurantService service = new RestaurantService();

		ResponseEntity<Object> count = service.validate("userName", "email", registeredCustomer.getuserName(),
				registeredCustomer.getEmail());

		String userName = registeredCustomer.getuserName();
		String email = registeredCustomer.getEmail();
		String password = registeredCustomer.getpassword();
		String accountStatus = registeredCustomer.getaccountState();

		// --------------------sending data to db if there is no
		// errors--------------------------------------------
		if (count == null) {
			service.passwordEncorder(userName, email, password, accountStatus);
			// restaurantRepository.save(registeredCustomer);
			Registered_Customer user2 = restaurantRepository.findByuserName(userName);

			Restaurant restaurant = new Restaurant();
			restaurant.setUserId(user2.getId());
			restaurant.setUserName(user2.getuserName());
			restaurantrepo.save(restaurant);

		}
		// System.out.println(data);
		return count;
	}
	// ----------------end of create
	// method-----------------------------------------------------------------------------------------

	// ----------------------------de_activate
	// method-------------------------------------------------------------------------------
	@PostMapping("/Restaurant/restaurant/deactivate/{id}")
	public void deacivateRestaurant(@PathVariable String id) {

	}

	// show details method
	@GetMapping("/FoodiFy/Service/ShowRestaurant")
	public List<Restaurant> showRestaurants() {

		List<Restaurant> restaurants = restaurantrepo.findAll();
		List<Restaurant> restaurantsList = new ArrayList<Restaurant>();

		// System.out.println(restaurants);
		//
		for (int i = 0; i < restaurants.size(); i++) {
			Restaurant restaurant = new Restaurant();

			restaurant.setbImage(Base64.getEncoder().encodeToString(restaurants.get(i).getBannerImage().getData()));
			restaurant.setRestaurantName(restaurants.get(i).getRestaurantName());
			restaurant.setAddress(restaurants.get(i).getAddress());
			restaurant.setId(restaurants.get(i).getId());

			restaurantsList.add(restaurant);

		}

		System.out.println(restaurantsList);
		return restaurantsList;

	}

	@PostMapping("/FoodiFy/Restaurant/editContact")
	public void updateContactDetails(@RequestBody Restaurant contactDetails) {

		String userName = SecurityContextHolder.getContext().getAuthentication().getName();
		System.out.println(userName);
		// System.out.println(contactDetails.getAddress());

		Restaurant restaurant = restaurantrepo.findByuserName(userName);
		// System.out.println(restaurant.getUserId());

		restaurant.setAddress(contactDetails.getAddress());
		restaurant.setLocation(contactDetails.getLocation());
		restaurant.setTelephone(contactDetails.getTelephone());

		restaurantrepo.save(restaurant);
	}

	@PostMapping("/FoodiFy/Restaurant/editAboutUs")
	public void updateAboutUs(@RequestBody Restaurant AboutUs) {

		String userName = SecurityContextHolder.getContext().getAuthentication().getName();
		System.out.println(userName);
		// System.out.println(contactDetails.getAddress());

		Restaurant restaurant = restaurantrepo.findByuserName(userName);
		// System.out.println(restaurant.getUserId());

		restaurant.setAbout(AboutUs.getAbout());

		restaurantrepo.save(restaurant);
	}

	/*
	 * -------------------------------- Add Food Menu
	 * --------------------------------
	 */
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

	/*
	 * -------------------------------- Get Food Menu
	 * --------------------------------
	 */
	@GetMapping("/RegisteredUser/getFoodMenu")
	public List<FoodMenu> getFoodMenu() {

		String userName = SecurityContextHolder.getContext().getAuthentication().getName();

		return foodMenuRepo.findByuserName(userName);

	}

	/*
	 * -------------------------------- Add Food category
	 * --------------------------------
	 */
	@PostMapping("/RegisteredUser/addFoodMenuCategory")
	public ResponseEntity<?> addFoodCategory(
			@RequestParam("Image") MultipartFile image,
			@RequestParam("menuId") String menuId,
			@RequestParam("foodMenuCategory") String foodMenuCategory,
			@RequestParam("foodMenuCategoryDes") String foodMenuCategoryDes) throws IOException {

		FoodCategory foodCategory = new FoodCategory();

		foodCategory.setmenuId(menuId);
		foodCategory.setfoodMenuCategory(foodMenuCategory);
		foodCategory.setfoodMenuCategoryDes(foodMenuCategoryDes);
		foodCategory.setImage(new Binary(BsonBinarySubType.BINARY, image.getBytes()));

		try {

			return new ResponseEntity<>(service.addFoodCategory(foodCategory), HttpStatus.OK);

		} catch (Exception e) {

			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}

	}

	/*
	 * -------------------------------- Get Food Category
	 * --------------------------------
	 */
	@GetMapping("/RegisteredUser/getFoodCategory/{menuId}")
	public List<FoodCategory> getFoodMenu(@PathVariable String menuId) {

		return foodCategoryRepo.findBymenuId(menuId);

	}

	/*
	 * -------------------------------- Delete Food Category
	 * --------------------------------
	 */
	
	@GetMapping("/RegisteredUser/deleteFoodCategory/{catId}")
	public ResponseEntity<?> deleteFoodCategory(@PathVariable String catId) {

		try{
			
			foodCategoryRepo.deleteById(catId);
			return new ResponseEntity<>(HttpStatus.OK);

		}
		catch(Exception e){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}

	/*
	 * -------------------------------- Add Food Item
	 * --------------------------------
	 */
	@PostMapping("/RegisteredUser/addFoodMenuCategoryItem")
	public ResponseEntity<?> addFoodCategoryItem(

			@RequestParam("Image") MultipartFile image,
			@RequestParam("catId") String catId,
			@RequestParam("name") String name,
			@RequestParam("description") String description,
			@RequestParam("price") Double price,
			@RequestParam("calaries") Double calaries,
			@RequestParam("fat") Double fat,
			@RequestParam("protein") Double protein,
			@RequestParam("carbo") Double carbo

	) throws IOException {

		try {

			FoodItem foodItem = new FoodItem();

			foodItem.setCatId(catId);
			foodItem.setName(name);
			foodItem.setDescription(description);
			foodItem.setPrice(price);
			foodItem.setCalaries(calaries);
			foodItem.setCarbo(carbo);
			foodItem.setFat(fat);
			foodItem.setProtein(protein);
			foodItem.setImage(new Binary(BsonBinarySubType.BINARY, image.getBytes()));

			return new ResponseEntity<>(service.addFoodCategoryItem(foodItem), HttpStatus.OK);

		} catch (Exception e) {

			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}

	}

	// ---------------upload cover image--------------------------------------
	@PostMapping("/FoodiFy/Restaurant/uploadBannerImage")
	public ResponseEntity<?> uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {

		String userName = SecurityContextHolder.getContext().getAuthentication().getName();

		// String imageDirectory = System.getProperty("user.dir") +
		// "/uploads/restaurantBanners/"+userName;
		// makeDirectoryIfNotExist(imageDirectory);
		// System.out.println(imageDirectory);
		// Path fileNamePath =
		// Paths.get(imageDirectory,userName.concat(".").concat(FilenameUtils.getExtension(file.getOriginalFilename())));
		// System.out.println(fileNamePath);

		// -----------------------store image in binary, BSON type in MongoDB(files less
		// than 16MB)--------------------
		Restaurant restaurant = restaurantrepo.findByuserName(userName);
		restaurant.setBannerImage(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
		System.out.println(restaurant.getBannerImage());
		restaurantrepo.save(restaurant);

		return new ResponseEntity<>(userName, HttpStatus.CREATED);

	}

	// private void makeDirectoryIfNotExist(String imageDirectory) {
	// File directory = new File(imageDirectory);
	// if (!directory.exists()) {
	// directory.mkdir();
	// }
	// }

	// -------------------get restaurant information-----------------------------
	@GetMapping("/FoodiFy/Restaurant/GetRestaurant")
	private String getRestaurantCover(Model model) {

		String userName = SecurityContextHolder.getContext().getAuthentication().getName();
		Restaurant restaurant = restaurantrepo.findByuserName(userName);

		// model.addAttribute(restaurant);
		// model.addAttribute("bannerImage",Base64.getEncoder().encodeToString(restaurant.getBannerImage().getData()));
		restaurant.setbImage(Base64.getEncoder().encodeToString(restaurant.getBannerImage().getData()));

		// System.out.println(restaurant.getbImage());

		return restaurant.getbImage();

	}

	// --------------------------------------------upload Logo
	// details--------------------------------------------------------
	@PostMapping("/FoodiFy/Restaurant/uploadLogoDetails")
	public ResponseEntity<?> uploadLogoDetails(@RequestParam("imageFile") MultipartFile file,
			@RequestParam("restName") String name) throws IOException {

		String userName = SecurityContextHolder.getContext().getAuthentication().getName();

		// -----------------------store image in binary, BSON type in MongoDB(files less
		// than 16MB)--------------------
		Restaurant restaurant = restaurantrepo.findByuserName(userName);
		restaurant.setLogo(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
		restaurant.setRestaurantName(name);

		System.out.println(name);

		restaurantrepo.save(restaurant);

		return new ResponseEntity<>(userName, HttpStatus.CREATED);
	}

	// -------------------get restaurant information-----------------------------
	@GetMapping("/FoodiFy/Restaurant/GetRestaurantInfo")
	private Restaurant getRestaurant(Model model) {

		String userName = SecurityContextHolder.getContext().getAuthentication().getName();
		Restaurant restaurant = restaurantrepo.findByuserName(userName);

		// model.addAttribute(restaurant);
		restaurant.setTempLogo(Base64.getEncoder().encodeToString(restaurant.getLogo().getData()));

		// System.out.println(restaurant.getbImage());
		return restaurant;
	}

	// ---------------------------------------------get restaurant information from
	// user view-------------------------------------------------------
	@GetMapping("/FoodiFy/Service/GetRestaurantInfo/{id}")
	private Restaurant getRestaurantDetails(@PathVariable(value = "id") String id) {

		System.out.println(id);
		Restaurant restaurant = restaurantrepo.findByid(id);

		restaurant.setbImage(Base64.getEncoder().encodeToString(restaurant.getBannerImage().getData()));
		restaurant.setTempLogo(Base64.getEncoder().encodeToString(restaurant.getLogo().getData()));

		// System.out.println(restaurant.getbImage());
		// return restaurant;
		return restaurant;
	}

	// show details method
	// @GetMapping("/FoodiFy/Service/ShowRestaurantAbout")
	// public List<Restaurant> showAboutUs() {
	//
	//
	//// return restaurantrepo.findlast();
	//
	// }
}
