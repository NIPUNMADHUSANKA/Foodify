package Foodify.Backend.controller;

import Foodify.Backend.model.FoodItem;
import Foodify.Backend.model.RestaurantComments;
import Foodify.Backend.repository.FoodItem_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Foodify.Backend.model.FoodComment;
import Foodify.Backend.repository.FoodCommentRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FoodCommentController {
	
	@Autowired
	private FoodCommentRepository foodCommentRepository;

	@Autowired
	private FoodItem_Repository foodItem_repository;
	
	@PostMapping("/FoodiFy/User/addFoodComment")
	public FoodComment createComment(@RequestBody FoodComment Foodcomment) {
		
		String userName = SecurityContextHolder.getContext().getAuthentication().getName();
		System.out.println(Foodcomment.getFoodId());
		FoodItem fooditem = foodItem_repository.findByid(Foodcomment.getFoodId());
		System.out.println(userName);
//		String restauratId=commentRes.getRestaurantId();
//		String commentDescription=complain.getCommentDescription();
//		Date addedDate=complain.getAddedDate();
		
		Foodcomment.setUsername(userName);
		Double rating1 = Foodcomment.getFoodRating();
		Double rating2 = fooditem.getFoodRating();
		if(rating2==null){
			rating2=rating1;
		}
		Double rating = (rating1 + rating2)/2;

		fooditem.setFoodRating(rating);
		foodItem_repository.save(fooditem);
		return foodCommentRepository.save(Foodcomment);
	}

}

