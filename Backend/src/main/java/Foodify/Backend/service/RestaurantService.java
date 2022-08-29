package Foodify.Backend.service;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import Foodify.Backend.exception.FoodMenuException;
import Foodify.Backend.exception.customFieldError;
import Foodify.Backend.exception.fieldErrorResponse;
import Foodify.Backend.model.FoodCategory;
import Foodify.Backend.model.FoodMenu;
import Foodify.Backend.model.Registered_Customer;
import Foodify.Backend.repository.Registered_Customer_Repository;
import Foodify.Backend.repository.FoodCategoryRepo;
import Foodify.Backend.repository.FoodMenuRepo;

@Service
public class RestaurantService implements Restaurantserv {

	@Autowired
	private Registered_Customer_Repository restaurantRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private FoodMenuRepo foodMenuRepo;

	@Autowired
	private FoodCategoryRepo foodCategoryRepo;

	@Override
	public ResponseEntity<Object> validate(String name, String name2, String username, String email) {
		String error;
		// Integer count1 = 0;

		// ---------------to check the
		// userName-------------------------------------------------
		if (name == "userName") {

			System.out.println(username);
			Integer count1 = restaurantRepository.findByUserName(username);
			System.out.println(email);
			if (count1 > 0) {
				error = "UserName already exists";
				// --------------call error response and add errors to custom field error
				// list-----------
				fieldErrorResponse fieldErrorResponse = new fieldErrorResponse();
				List<customFieldError> fieldErrors = new ArrayList<>();
				customFieldError fieldError = new customFieldError();

				fieldError.setField("userName");
				fieldError.setMessage(error);
				fieldErrors.add(fieldError);
				// System.out.println(error);

				// adding final values to fieldErrorResponse and sending it as JSON object to
				// front-end--------------
				fieldErrorResponse.setFieldErrors(fieldErrors);
				// return true;
				return new ResponseEntity<Object>(fieldErrorResponse, HttpStatus.BAD_REQUEST);
			}
		}
		if (name2 == "email") {
			Integer count2 = restaurantRepository.findByUserEmail(email);
			System.out.println(count2);
			if (count2 > 0) {
				error = "Email already exists";
				// --------------call error response and add errors to custom field error
				// list-----------
				fieldErrorResponse fieldErrorResponse = new fieldErrorResponse();
				List<customFieldError> fieldErrors = new ArrayList<>();
				customFieldError fieldError = new customFieldError();

				fieldError.setField("email");
				fieldError.setMessage(error);
				fieldErrors.add(fieldError);
				// System.out.println(error);

				// adding final values to fieldErrorResponse and sending it as JSON object to
				// front-end--------------
				fieldErrorResponse.setFieldErrors(fieldErrors);
				return new ResponseEntity<Object>(fieldErrorResponse, HttpStatus.BAD_REQUEST);
			}
		}
		return null;
	}

	@Override
	public String passwordEncorder(String userName, String email, String password, String accountStatus) {

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

	// --------------------------end of for validate userName and
	// email--------------------------------------------

	
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
	public FoodCategory addFoodMenuCategory(FoodCategory foodCategory) throws FoodMenuException {
		
		ObjectId foodMenuId = foodCategory.getmenuId();
		String foodCategoryName = foodCategory.getfoodMenuCategory();	
		
		Optional<FoodCategory> FoodMenuCategoryOptional = foodCategoryRepo.findByMenuCategoryExists(foodMenuId,foodCategoryName);

		if (FoodMenuCategoryOptional.isPresent()) {
			throw new FoodMenuException(FoodMenuException.FoodMemuCategoryAlreadyExists());

		}
		else{
			foodCategoryRepo.save(foodCategory);
			return null;
		}

	}
	

}
