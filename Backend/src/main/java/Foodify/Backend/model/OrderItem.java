package Foodify.Backend.model;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="FoodItems")
public class OrderItem {
    class Item{

        public ObjectId item;
        public String foodItem;
        public Integer quantity;

        public ObjectId getItem() {
            return item;
        }

        public void setItem(ObjectId item) {
            this.item = item;
        }

        public String getFoodItem() {
            return foodItem;
        }

        public void setFoodItem(FoodItem foodItem) {
            this.foodItem = foodItem.toString();
        }

        public Integer getQuantity() {
            return quantity;
        }

        public void setQuantity(Integer quantity) {
            this.quantity = quantity;
        }
    }
}
