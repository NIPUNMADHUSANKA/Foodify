package Foodify.Backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import Foodify.Backend.exception.Registered_Customer_Exception;
import Foodify.Backend.model.Registered_Customer;
import org.springframework.transaction.annotation.Transactional;

@Service
public class Registered_Customer_Service implements Registered_Customer_Sev{

	@Autowired
	private Foodify.Backend.repository.Registered_Customer_Repository RegCusRepo;
	
	@Override
	public Registered_Customer Login(String UserName, String Password) throws Registered_Customer_Exception {
		
		Optional<Registered_Customer> RegCusOptional = RegCusRepo.findByUser(UserName, Password);
		if (!RegCusOptional.isPresent()) {
			throw new Registered_Customer_Exception(Registered_Customer_Exception.NotFoundException());
		}else {
			return RegCusOptional.get();
		}
	}

	//Reset Password
	@Override
	public void updateResetPasswordToken(String token, String email) throws Registered_Customer_Exception {

		Registered_Customer RegCus = RegCusRepo.findByEmail(email);
		if (RegCus == null) {
			throw new Registered_Customer_Exception(Registered_Customer_Exception.NotFoundException());
		}else {
			RegCus.setResetPasswordToken(token);
			RegCusRepo.save(RegCus);
		}
	}

	@Override
	public Registered_Customer getByResetPasswordToken(String token){
		return RegCusRepo.findByResetPasswordToken(token);
	}

	@Override
	public void updatePassword(Registered_Customer RegCus, String newPassword){
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String encodedPassword = passwordEncoder.encode(newPassword);

		RegCus.setpassword(encodedPassword);

		RegCus.setResetPasswordToken(null);
		RegCusRepo.save(RegCus);
	}

	
}
