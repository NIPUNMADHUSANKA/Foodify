package Foodify.Backend.model;

import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Console;
//import java.sql.Array;
import java.util.ArrayList;
import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Document(collection="Orders")
public class Order {

    @Id
    private ObjectId Id;

    private Date datetime;
    private ArrayList details;
    private String user;

    private float price;

    public String getId() { return Id.toString(); }

    public void setId(ObjectId id) { Id = id; }

    public Date getDatetime() { return datetime; }

    public void setDatetime(Date datetime) { this.datetime = datetime; }

    public ArrayList getDetails() { return details; }

    public void setDetails(ArrayList details) { this.details = details; }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user.toString();
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
};
