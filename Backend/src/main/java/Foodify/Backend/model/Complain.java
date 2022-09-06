package Foodify.Backend.model;

import java.io.File;
import java.util.Date;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@Document(collection="Complains")
public class Complain {
	
	@Id
	private String id;
	private String userName;
	private String restaurantId;
	private String complainTitle;
	private String complainDescription;
	private String complainStatus;
	private Date addedDate;
	private Binary image;
	
	public Complain() {
		// TODO Auto-generated constructor stub
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUsername() {
		return userName;
	}
	public void setUsername(String username) {
		this.userName = username;
	}
	public String getComplainTitle() {
		return complainTitle;
	}
	public void setComplainTitle(String complainTitle) {
		this.complainTitle = complainTitle;
	}
	public String getComplainDescription() {
		return complainDescription;
	}
	public void setComplainDescription(String complainDescription) {
		this.complainDescription = complainDescription;
	}
	public Date getAddedDate() {
		return addedDate;
	}
	public void setAddedDate(Date addedDate) {
		this.addedDate = addedDate;
	}
	public String getRestaurantId() {
		return restaurantId;
	}
	public void setRestaurantId(String restaurantId) {
		this.restaurantId = restaurantId;
	}
	public String getComplainStatus() {
		return complainStatus;
	}
	public void setComplainStatus(String complainStatus) {
		this.complainStatus = complainStatus;
	}
	public Binary getImage() {
		return image;
	}
	public Binary setImage(Binary image) {
		return this.image = image;
	}
	
//	private File image;
	
		
}
