package Foodify.Backend.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="FoodItems")
public class FoodItem {
    @Id
    private ObjectId Id;
    private String name;
    private Double price;
    private String description;
    private ObjectId restaurant;

    public ObjectId getId() { return Id; }

    public void setId(ObjectId id) { Id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name;}

    public Double getPrice() { return price; }

    public void setPrice(Double price) { this.price = price; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public ObjectId getRestaurant() { return restaurant; }

    public void setRestaurant(ObjectId restaurant) { this.restaurant = restaurant;}
}
