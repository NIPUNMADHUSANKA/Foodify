package Foodify.Backend.model;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="RegisteredCustomer")
public class Registered_Customer {

	@Id
	private String Id;
	
	private String UserName;
	private String Password;
	private String AccountState;
	
	private ArrayList<String> Preferences = new ArrayList<String>();
	private String location;
	private String email;
	private String Telephone;
	
	
	public String getId() {
		return Id;
	}
	public void setId(String id) {
		Id = id;
	}
	public String getUserName() {
		return UserName;
	}
	public void setUserName(String userName) {
		UserName = userName;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public ArrayList<String> getPreferences() {
		return Preferences;
	}
	public void setPreferences(ArrayList<String> preferences) {
		Preferences = preferences;
	}
	public String getAccountState() {
		return AccountState;
	}
	public void setAccountState(String accountState) {
		AccountState = accountState;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTelephone() {
		return Telephone;
	}
	public void setTelephone(String telephone) {
		Telephone = telephone;
	}
	
}
