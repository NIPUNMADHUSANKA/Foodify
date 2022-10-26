package Foodify.Backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@Document(collection="IntakeHistory")
public class IntakeChartHistory {

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getDate() {
        return date;
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
    public Double getCarbo() {
        return carbo;
    }
    public void setCarbo(Double carbo) {
        this.carbo = carbo;
    }
    public String getUserName() {
        return userName;
    }
    @Id
	private String id;
    private String userName;
    private String date;
   
    private Double calaries;
    private Double fat;
    private Double protein;
    private Double carbo;
    public void setUserName(String userName2) {
        // TODO Auto-generated method stub
        
    }
    public void setDate(CharSequence lastUpdate) {
        // TODO Auto-generated method stub
        
    }

}