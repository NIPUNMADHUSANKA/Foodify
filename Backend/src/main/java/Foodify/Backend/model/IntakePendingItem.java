package Foodify.Backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@Document(collection="IntakePendingItem")
public class IntakePendingItem {

    @Id
	private String id;
    private String pending;

    private String item;
    private Double quantity;

    private Double calaries;
    private Double fat;
    private Double protein;
    private Double carbo;
    private Double price;
    public void setCalaries(Double calaries2) {
        // TODO Auto-generated method stub
        
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getPending() {
        return pending;
    }
    public void setPending(String pending) {
        this.pending = pending;
    }
    public String getItem() {
        return item;
    }
    public void setItem(String item) {
        this.item = item;
    }
    public Double getQuantity() {
        return quantity;
    }
    public void setQuantity(Double quantity) {
        this.quantity = quantity;
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
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public Double getCalaries() {
        return calaries;
    }
    
}
