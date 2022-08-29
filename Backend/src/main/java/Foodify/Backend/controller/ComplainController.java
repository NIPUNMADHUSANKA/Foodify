package Foodify.Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Foodify.Backend.model.Complain;
import Foodify.Backend.repository.ComplainRepository;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/RegisteredUser")
public class ComplainController {
	
	@Autowired
	private ComplainRepository complainRepository;
	
	@PostMapping("/addComplains")
	public Complain createComplain(@RequestBody Complain complain) {
		return complainRepository.save(complain);
	}

}
