package Foodify.Backend.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@Document(collection="Intake")
public class Intake {

    @Id
	private String id;
    private String userName;
    private Date lastUpdate;
    private List<List<String>> daily;
    private List<List<String>> weekly;
    private List<List<String>> monthly;
    private List<List<String>> yearly;

    
    public Intake(String id, String userName, Date lastUpdate, List<List<String>> daily, List<List<String>> weekly,
            List<List<String>> monthly, List<List<String>> yearly) {
        this.id = id;
        this.userName = userName;
        this.lastUpdate = lastUpdate;
        this.daily = daily;
        this.weekly = weekly;
        this.monthly = monthly;
        this.yearly = yearly;
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
	public void setUsername(String userName) {
		this.userName = userName;
	}
    
    
}
