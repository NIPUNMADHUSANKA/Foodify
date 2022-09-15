package Foodify.Backend.service;

import Foodify.Backend.model.OrderItem;
import org.springframework.http.ResponseEntity;

public interface ShopCartService {

    public ResponseEntity<?> setShoppingCart(String userName, OrderItem orderItem,int price);
}
