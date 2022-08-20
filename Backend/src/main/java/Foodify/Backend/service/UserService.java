package Foodify.Backend.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import Foodify.Backend.model.Registered_Customer;
import Foodify.Backend.repository.UserRepository;

@Service
public class UserService implements UserDetailsService{

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		Registered_Customer foundUser = userRepository.findByuserName(userName);
		
		if(foundUser==null) return null;
		
		String username = foundUser.getuserName();
		String password = foundUser.getpassword();
		
		
		return new User(username,password,new ArrayList<>());
	}

}
