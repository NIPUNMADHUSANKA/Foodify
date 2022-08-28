package Foodify.Backend.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Foodify.Backend.model.Complain;
import Foodify.Backend.repository.ComplainRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ComplainController {
	
	@Autowired
	private ComplainRepository complainRepository;
	
	@PostMapping("/FoodiFy/User/addComplains")
	public Complain createComplain(@RequestBody Complain complain) {
		
		String userName = SecurityContextHolder.getContext().getAuthentication().getName();
		System.out.println(complain);

		System.out.println(userName);
//		String restauratId=complain.getRestaurantId();
//		String complainTitle=complain.getComplainTitle();
//		String complainDescription=complain.getComplainDescription();
//		String complainStatus=complain.getComplainStatus();
//		Date addedDate=complain.getAddedDate();
		
		complain.setUsername(userName);
		
		
		return complainRepository.save(complain);
	}

}
