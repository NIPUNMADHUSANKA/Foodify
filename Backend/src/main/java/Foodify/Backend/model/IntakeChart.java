package Foodify.Backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@Document(collection="Intake")
public class IntakeChart {

    @Id
	private String id;
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
    private String userName;
    private String lastUpdate;
   
    private Double calaries;
    private Double fat;
    private Double protein;
    private Double carbo;
    public CharSequence getLastUpdate() {
        // TODO Auto-generated method stub
        return null;
    }
    public void setLastUpdate(String string) {
        // TODO Auto-generated method stub
        
    }


}
