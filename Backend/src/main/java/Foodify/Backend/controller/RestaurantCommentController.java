package Foodify.Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Foodify.Backend.model.RestaurantComment;
import Foodify.Backend.repository.RestaurantCommentRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RestaurantCommentController {
	
	@Autowired
	private RestaurantCommentRepository restaurantCommentRepository;
	
	@PostMapping("/FoodiFy/User/addRestaurantComment")
	public RestaurantComment createComment(@RequestBody RestaurantComment Rescomment) {
		
		String userName = SecurityContextHolder.getContext().getAuthentication().getName();
		System.out.println(Rescomment);

		System.out.println(userName);
//		String restauratId=commentRes.getRestaurantId();
//		String commentDescription=complain.getCommentDescription();
//		Date addedDate=complain.getAddedDate();
		
		Rescomment.setUsername(userName);
		
		
		return restaurantCommentRepository.save(Rescomment);
	}

}

