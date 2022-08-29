package Foodify.Backend.model;

import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Console;
import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Document(collection="Orders")
public class Order {

    @Id
    private ObjectId Id;

    private Date datetime;
    private Item[] details;
    private ObjectId user;

    public String getId() { return Id.toString(); }

    public void setId(ObjectId id) { Id = id; }

    public Date getDatetime() { return datetime; }

    public void setDatetime(Date datetime) { this.datetime = datetime; }

//    public void setDate(Date datetime) throws ParseException {
//        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
////        Date date = format.parse(datetime.toString());
//        this.date = new Date();
//    }

    public Item[] getDetails() { return details; }

    public void setDetails(Item[] details) { this.details = details; }

    public String getUser() {
        return user.toString();
    }

    public void setUser(ObjectId user) {
        this.user = user;
    }
};

class Item{

    @DBRef
    public ObjectId item;
    public Integer quantity;

    public String getItem() {
        return item.toString();
    }
}
