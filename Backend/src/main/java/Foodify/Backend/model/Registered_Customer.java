package Foodify.Backend.model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="RegisteredCustomer")
public class Registered_Customer {

	@Id
	private String Id;
	
	private String userName;
	
	@NotBlank(message = "Enter your Password")
	@Length(min = 6, message = "Password must be at least 6 characters")
	private String password;
	
	private String accountState;
	
	private String location;
	
	@NotBlank(message = "Enter your Email")
	@Email(message = "Enter Valid Email")
	private String email;
	
	private String telephone;
	
	
//	registered user constructor
	public Registered_Customer() {
		super();
	}
	
	public String getId() {
		return Id;
	}
	public void setId(String id) {
		Id = id;
	}
	public String getuserName() {
		return userName;
	}
	public void setuserName(String userName) {
		this.userName = userName;
	}
	public String getpassword() {
		return password;
	}
	public void setpassword(String password) {
		this.password = password;
	}

	public String getaccountState() {
		return accountState;
	}
	public void setaccountState(String accountState) {
		this.accountState = accountState;
	}
	public String getlocation() {
		return location;
	}
	public void setlocation(String location) {
		this.location = location;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String gettelephone() {
		return telephone;
	}
	public void settelephone(String telephone) {
		this.telephone = telephone;
	}

//	toString method for user
	@Override
	public String toString() {
		return "Registered_Customer ["
				+ "userName=" + userName + 
				", password=" + password + 
				", accountState=" + accountState
				+ ", location=" + location +
				", email=" + email + 
				", telephone=" + telephone + 
				"]";
	}
	
	
	
}
