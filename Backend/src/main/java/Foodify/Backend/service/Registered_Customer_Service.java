package Foodify.Backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Foodify.Backend.exception.Registered_Customer_Exception;
import Foodify.Backend.model.Registered_Customer;
import Foodify.Backend.repository.Registered_Customer_Repository;

//import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class Registered_Customer_Service implements Registered_Customer_Sev{

	@Autowired
	private Registered_Customer_Repository RegCusRepo;
	
	
	/*PasswordEncoder passwordEncoder;
	
	/*public UserService(Registered_Customer_Repository userRepository, PasswordEncoder passwordEncoder) {
	    this.userRepository = userRepository;
	    this.passwordEncoder = passwordEncoder;
	  }*/
	  
	@Override
	public Registered_Customer Login(String UserName, String Password) throws Registered_Customer_Exception {
		
		Optional<Registered_Customer> RegCusOptional = RegCusRepo.findByUser(UserName, Password);
		if (!RegCusOptional.isPresent()) {
			throw new Registered_Customer_Exception(Registered_Customer_Exception.NotFoundException());
		}else {
			return RegCusOptional.get();
		}
	}

	
}
