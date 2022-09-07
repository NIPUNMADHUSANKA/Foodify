package Foodify.Backend.service;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import Foodify.Backend.exception.FoodMenuException;
import Foodify.Backend.exception.customFieldError;
import Foodify.Backend.exception.fieldErrorResponse;
import Foodify.Backend.model.FoodCategory;
import Foodify.Backend.model.FoodItem;
import Foodify.Backend.model.FoodMenu;
import Foodify.Backend.model.Registered_Customer;
import Foodify.Backend.repository.FoodCategoryRepo;
import Foodify.Backend.repository.FoodItem_Repository;
import Foodify.Backend.repository.FoodMenuRepo;
import Foodify.Backend.repository.OffersRepository;
import Foodify.Backend.repository.Registered_Customer_Repository;

import java.io.IOException;
import java.lang.reflect.Array;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;


@Service
public class RestaurantService implements Restaurantserv{
	
	@Autowired
	private Registered_Customer_Repository restaurantRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private FoodMenuRepo foodMenuRepo;

	@Autowired
	private FoodCategoryRepo foodCategoryRepo;

	@Autowired
	private FoodItem_Repository foodItem_Repository;
	
	@Autowired
	private FoodItem_Repository foodItems;
	
	@Autowired
	private OffersRepository offersRepo;
	
	@Override
	public ResponseEntity<Object> validate(String name, String name2, String username, String email) {
		String error;
//		Integer count1 = 0;
		
//		---------------to check the userName-------------------------------------------------
		if(name == "userName") {
			
			System.out.println(username);
			Integer count1 = restaurantRepository.findByUserName(username); 
			System.out.println(email);
			if(count1 > 0) {
				error = "UserName already exists";
//				--------------call error response and add errors to custom field error list-----------
				fieldErrorResponse fieldErrorResponse = new fieldErrorResponse();
				List<customFieldError> fieldErrors = new ArrayList<>();
				customFieldError fieldError = new customFieldError();
				
	        	fieldError.setField("userName");
	        	fieldError.setMessage(error);
	        	fieldErrors.add(fieldError);
//	        	System.out.println(error);
	        	
	        	
//	        	adding final values to fieldErrorResponse and sending it as JSON object to front-end--------------
	        	fieldErrorResponse.setFieldErrors(fieldErrors);
//	        	return true;
	        	return new ResponseEntity<Object>(fieldErrorResponse, HttpStatus.BAD_REQUEST);
			}
		}
		if(name2 == "email"){
			Integer count2 = restaurantRepository.findByUserEmail(email); 
			System.out.println(count2);
			if(count2 > 0) {
				error = "Email already exists";
//				--------------call error response and add errors to custom field error list-----------
				fieldErrorResponse fieldErrorResponse = new fieldErrorResponse();
				List<customFieldError> fieldErrors = new ArrayList<>();
				customFieldError fieldError = new customFieldError();
				
	        	fieldError.setField("email");
	        	fieldError.setMessage(error);
	        	fieldErrors.add(fieldError);
//	        	System.out.println(error);
	        	
	        	
//	        	adding final values to fieldErrorResponse and sending it as JSON object to front-end--------------
	        	fieldErrorResponse.setFieldErrors(fieldErrors);
	        	return new ResponseEntity<Object>(fieldErrorResponse, HttpStatus.BAD_REQUEST);
			}
		}
		return null;
	}



	@Override
	public String passwordEncorder(String userName, String email, String password, String accountStatus) {
		// TODO Auto-generated method stub
		
		String epassword = passwordEncoder.encode(password);
		
		Registered_Customer user = new Registered_Customer();
		
		user.setuserName(userName);
		user.setEmail(email);
		user.setpassword(epassword);
		user.setaccountState(accountStatus);
		
		restaurantRepository.save(user);
		System.out.println(epassword);
		return null;
	}



	@Override
	public void updateContactDetails(String username) {
		// TODO Auto-generated method stub
		
	}


//---------------------for upload cover image-------------------------------
	@Override
	public void init(String userName) {
		// TODO Auto-generated method stub
		
			
	}



	@Override
	public void saveBanner(MultipartFile file, String username) {
		// TODO Auto-generated method stub
		
		String imageDirectory = System.getProperty("user.dir") + "/uploads/restaurantBanners/"+username;
		final Path root = Paths.get("uploads");
		final Path fileNamePath = Paths.get(imageDirectory,username.concat(".").concat(FilenameUtils.getExtension(file.getOriginalFilename())));
		
		try {
		      Files.createDirectory(fileNamePath);
		    } catch (IOException e) {
		      throw new RuntimeException("Could not initialize folder for upload!");
		    }
		
		try {
		      Files.copy(file.getInputStream(),fileNamePath.resolve(file.getOriginalFilename()));
		    } catch (Exception e) {
		      throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
		    }
		
	}



	@Override
	public Resource loadBanner(String filename) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public FoodMenu addFoodMenu(FoodMenu foodMenu) throws FoodMenuException {

		String userName = foodMenu.getUsername();
		String foodMenuName = foodMenu.getfoodMenuName();

		Optional<FoodMenu> FoodMenuOptional = foodMenuRepo.findByResturantMenuExists(userName, foodMenuName);

		if (FoodMenuOptional.isPresent()) {
			throw new FoodMenuException(FoodMenuException.FoodMemuAlreadyExists());

		}
		else{
			foodMenuRepo.save(foodMenu);
			return null;
		}

	}



	@Override
	public FoodCategory addFoodCategory(FoodCategory foodCategory) throws FoodMenuException {
		
		String menuId = foodCategory.getmenuId();
		String foodMenuCategory = foodCategory.getfoodMenuCategory();

		Optional<FoodCategory> FoodMenuCateOptional = foodCategoryRepo.findByMenuCategoryExists(menuId, foodMenuCategory);

		if (FoodMenuCateOptional.isPresent()) {
			throw new FoodMenuException(FoodMenuException.FoodMemuCategoryAlreadyExists());

		}
		else{
			foodCategoryRepo.save(foodCategory);
			return null;
		}


	}



	@Override
	public FoodItem addFoodCategoryItem(FoodItem foodItem) throws FoodMenuException {

		String catId = foodItem.getcatId();
		String name = foodItem.getName();

		Optional<FoodItem> FoodMenuCateItemOptional = foodItem_Repository.findByMenuCategoryItemExists(catId, name);

		if (FoodMenuCateItemOptional.isPresent()) {
			throw new FoodMenuException(FoodMenuException.FoodMemuCategoryItemAlreadyExists());

		}
		else{
			foodItem_Repository.save(foodItem);
			return null;
		}

	}


	//---------------------------------to get the food items--------------------------------------------
	@Override
	public List<String> getItems(String items) {
		// TODO Auto-generated method stub
		List<String> itemNames = new ArrayList<String>();
		
		String[] arr = null;
		//converting using String.split() method with "," as a delimiter  
        arr = items.split(",");
        
        for (int i = 0; i< arr.length; i++)
        {  
        	FoodItem food = foodItems.findByid(arr[i]);
        	itemNames.add(food.getName());
            System.out.println(arr[i]);  
        }
		return itemNames;
	}






	
	
	
}
