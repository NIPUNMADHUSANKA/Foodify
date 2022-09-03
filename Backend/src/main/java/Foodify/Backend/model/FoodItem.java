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
    private String catId;

    

    private Double calaries;
    private Double fat;
    private Double protein;
    private Double carbo;

    public Double getCalaries() {
        return calaries;
    }

    public void setCalaries(Double calaries) {
        this.calaries = calaries;
    }

    
    public Double getFat() {
        return fat;
    }

    public void setFat(Double fat) {
        this.fat = fat;
    }

    
    public Double getProtein() {
        return protein;
    }

    public void setProtein(Double protein) {
        this.protein = protein;
    }

    
    public Double getCarbo() {
        return carbo;
    }

    public void setCarbo(Double carbo) {
        this.carbo = carbo;
    }

    public ObjectId getId() { return Id; }

    public void setId(ObjectId id) { Id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name;}

    public Double getPrice() { return price; }

    public void setPrice(Double price) { this.price = price; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public String getcatId() {
        return catId;
    }

    public void setCatId(String catId) {
        this.catId = catId;
    }

   
}
