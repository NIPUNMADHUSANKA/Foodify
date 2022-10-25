package Foodify.Backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//import java.sql.Array;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document(collection="Orders")
public class Order {

    @Id
    private String Id;

    private Date datetime;
    private ArrayList details;
    private String user;

    private float price;

    private String resId;

    private String resname;

    private List<OrderItem> items;

    private LocalDate orderDate;

    private LocalDateTime orderTime;

    private String userName1;

    private String paymentId;

    private String preparedState;

    public String getPreparedState() {
        return preparedState;
    }

    public void setPreparedState(String preparedState) {
        this.preparedState = preparedState;
    }

    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

    public List<OrderItem> getItems() {
        return items;
    }

    public void setItems(List<OrderItem> items) {
        this.items = items;
    }

    public LocalDate getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
    }

    public LocalDateTime getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(LocalDateTime orderTime) {
        this.orderTime = orderTime;
    }

    public String getUserName1() {
        return userName1;
    }

    public void setUserName1(String userName1) {
        this.userName1 = userName1;
    }

    public String getResId() {
        return resId;
    }

    public void setResId(String resId) {
        this.resId = resId;
    }

    public String getResName() {
        return resname;
    }

    public void setResName(String resname) {
        this.resname = resname;
    }

    public String getId() { return Id.toString(); }

    public void setId(String id) { Id = id; }

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
