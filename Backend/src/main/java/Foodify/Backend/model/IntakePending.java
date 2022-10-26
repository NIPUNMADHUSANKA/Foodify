package Foodify.Backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@Document(collection="IntakePending")
public class IntakePending {

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getResturant() {
        return resturant;
    }
    public void setResturant(String resturant) {
        this.resturant = resturant;
    }
    public String getPurches_time() {
        return purches_time;
    }
    public void setPurches_time(String purches_time) {
        this.purches_time = purches_time;
    }
    public String getPurches_date() {
        return purches_date;
    }
    public void setPurches_date(String purches_date) {
        this.purches_date = purches_date;
    }
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
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public Double getCarbo() {
        return carbo;
    }
    @Id
	private String id;
    private String userName;
    
    private String resturant;
    private String purches_time;
    private String purches_date;
    
    private Double calaries;
    private Double fat;
    private Double protein;
    private Double carbo;
    private Double price;
    public void setCarbo(Double carbo2) {
        // TODO Auto-generated method stub
        
    }


}
