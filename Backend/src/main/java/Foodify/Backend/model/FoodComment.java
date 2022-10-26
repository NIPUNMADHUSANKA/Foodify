package Foodify.Backend.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@Document(collection="FoodComments")
public class FoodComment {
	
	@Id
	private String id;
	private String userName;
	private String foodId;
	private String commentDescription;
	private Date addedDate;
	private Double foodRating;

	public FoodComments() {
		super();
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
	public String getCommentDescription() {
		return commentDescription;
	}
	public void setCommentDescription(String commentDescription) {
		this.commentDescription = commentDescription;
	}
	public Date getAddedDate() {
		return addedDate;
	}
	public void setAddedDate(Date addedDate) {
		this.addedDate = addedDate;
	}
	public String getFoodId() {
		return foodId;
	}
	public void setFoodId(String foodId) {
		this.foodId = foodId;
	}
<<<<<<< HEAD:Backend/src/main/java/Foodify/Backend/model/FoodComment.java
	
	
=======
	public Double getFoodRating() {
		return foodRating;
	}

	public void setFoodRating(Double foodRating) {
		this.foodRating = foodRating;
	}


>>>>>>> 8886b5f5a7d5b64c93894faeec41c4e2fd2eeb7b:Backend/src/main/java/Foodify/Backend/model/FoodComments.java
//	private File image;
	
		
}
