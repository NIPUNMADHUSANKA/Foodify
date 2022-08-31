package Foodify.Backend.controller;

import java.io.IOException;
import java.util.Date;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import Foodify.Backend.model.Complain;
import Foodify.Backend.model.Restaurant;
import Foodify.Backend.repository.ComplainRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ComplainController {
	
	@Autowired
	private ComplainRepository complainRepository;
	
	@PostMapping("/FoodiFy/User/addComplains")
	public Complain createComplain(@RequestBody Complain complain,@RequestParam("Image")MultipartFile file) throws IOException {
		
		String userName = SecurityContextHolder.getContext().getAuthentication().getName();
//		System.out.println(complain);

		System.out.println(userName);
//		String restauratId=complain.getRestaurantId();
//		String complainTitle=complain.getComplainTitle();
//		String complainDescription=complain.getComplainDescription();
//		String complainStatus=complain.getComplainStatus();
//		Date addedDate=complain.getAddedDate();
		
//		complain.setUsername(userName);
//		complain.setImage(new Binary(BsonBinarySubType.BINARY, complain.getImage().getData()));
//		System.out.println(complain.getImage());
	
//		Complain complainImage = null;
//		Binary image = complainImage.setImage(new Binary(BsonBinarySubType.BINARY,file.getBytes()));
//		System.out.println(image);
		
//		Complain complain = complainRepository.findByuserName(userName);
        Binary image = complain.setImage(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
        System.out.println(complain.getImage());
//        complainRepository.save(complain);
		System.out.println(complain);

		return complainRepository.save(complain);
	}
	
	
//	@PostMapping("/FoodiFy/User/addComplains/addImage")
//	public ResponseEntity <?> uploadImage (@RequestParam("imageFile")MultipartFile file) throws IOException{
//		Complain complain = null;
//		complain.setImage(new Binary(BsonBinarySubType.BINARY,file.getBytes()));
//		
//		
//
//	}

}
