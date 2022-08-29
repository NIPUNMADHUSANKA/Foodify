package Foodify.Backend.service;

import org.springframework.http.ResponseEntity;
import java.nio.file.Path;
import java.util.stream.Stream;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import Foodify.Backend.exception.FoodMenuException;
import Foodify.Backend.model.FoodCategory;
import Foodify.Backend.model.FoodMenu;

public interface Restaurantserv {

	public ResponseEntity<Object> validate(String name,String name2,String username,String email);
	
	public String passwordEncorder(String userName,String email,String password, String accountStatus);
	
	public void updateContactDetails(String username);

	public FoodMenu addFoodMenu(FoodMenu foodMenu) throws FoodMenuException;

	public FoodCategory addFoodMenuCategory(FoodCategory foodCategory) throws FoodMenuException;
	
	public void init(String username);
	
	public void saveBanner(MultipartFile file,String username);
	
	public Resource loadBanner(String filename);
}
