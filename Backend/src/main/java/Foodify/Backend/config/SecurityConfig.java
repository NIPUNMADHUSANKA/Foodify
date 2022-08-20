package Foodify.Backend.config;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import Foodify.Backend.service.JwtFilterRequest;
import Foodify.Backend.service.UserService;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private JwtFilterRequest jwtFilterRequest;
	
	
	@Bean
	public PasswordEncoder passwordEncoder() {
	    return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		auth.userDetailsService(userService).passwordEncoder(passwordEncoder());
//		auth.inMemoryAuthentication().withUser("Piyum").password(passwordEncoder().encode("test@123")).authorities("restaurant");
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http.csrf().disable().authorizeRequests().antMatchers(
				"/register/Signupuser",
				"/FoodiFy/auth/login",
				"/Restaurant/Register/Signuprestaurant")
		.permitAll().anyRequest().authenticated();
		
		http.addFilterBefore(jwtFilterRequest, UsernamePasswordAuthenticationFilter.class);
		// TODO Auto-generated method stub
//		http.authorizeRequests().anyRequest().authenticated();
//		http.formLogin();
	}
	

	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {

		return super.authenticationManagerBean();
	}
	
	

}

////@Autowired
////private Registered_Customer_Sev userServise;
//
////@Autowired
////private CustomerService userService;
//
//@Autowired
//private CustomerService userService;
//
//@Autowired
//private JWTTokenHelper jwtTokenHelper;
//
//@Autowired
//private AuthenticationEntryPoint authenticationEntryPoint;
//
////@Autowired
////private BCryptPasswordEncoder bCryptPasswordEncoder;
//
////------------for in memory authentication use userName and password---------------
//@Override
//protected void configure(AuthenticationManagerBuilder auth) throws Exception {
////	auth.inMemoryAuthentication().withUser("Piyum").password(encoder().encode("test@123")).authorities("restaurant");
//	
////	-----this is for DB authentication-------
////	auth.userDetailsService(userDetailsService).passwordEncoder(encoder());
//	
//	UserDetailsService userDetailsService = mongoUserDetails();
//    auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
//    
//    System.out.println("Hello"+userDetailsService);
//    
////	-----end of DB authentication-------
//}
//
//@Bean
//public PasswordEncoder passwordEncoder() {
//    return new BCryptPasswordEncoder();
//}
//
////-------------Bean removed from here----------------------
//public UserDetailsService mongoUserDetails() {
//    return new CustomerService();
//}
//
//
//@Bean
//@Override
//public AuthenticationManager authenticationManagerBean() throws Exception {
//	// TODO Auto-generated method stub
//	return super.authenticationManagerBean();
//}
//
//
//
//@Override
//protected void configure(HttpSecurity http) throws Exception {
////	http.authorizeRequests().anyRequest().permitAll();
////	http.authorizeRequests().anyRequest().authenticated();
//	
//	
////	--------------------------------------------------------------------------------------------------------------
//	http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().exceptionHandling()
//	.authenticationEntryPoint(authenticationEntryPoint).and()
//	.authorizeRequests((request) -> request.antMatchers(
//			"/FoodiFy/auth/login")
//			.permitAll()
//			.antMatchers(HttpMethod.OPTIONS, 
//					 "/**")
//			.permitAll().anyRequest().authenticated())
//	.addFilterBefore(new JWTAuthenticationFilter(userService, jwtTokenHelper),
//			UsernamePasswordAuthenticationFilter.class);
//	
////	-------need to put form login---------
//	http.cors();
////	http.formLogin();
////	for basic authentication
////	http.httpBasic();
//}
