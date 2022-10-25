package Foodify.Backend.controller;

import Foodify.Backend.model.Order;
import Foodify.Backend.service.Order_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OrderController {

    @Autowired(required = false) //error debugged by false
    private Order_Service order_service;

    @GetMapping("/FoodiFy/User/Orders/{userId}")
    public List<Order> ordersByUser(@PathVariable String userId){
        List<Order> detailed =  order_service.getDetailedOrders(userId);
//        List<Order> detailed =  order_repository.findByUser(userId);
        return detailed;
    }

    @GetMapping("/FoodiFy/Admin/Orders/All")
    public ResponseEntity<?> ordersAll(){
        try {

            ResponseEntity<List<Order>> detailed = new ResponseEntity<>(order_service.detailedOrders(), HttpStatus.OK);
            return detailed;

        } catch (Exception e) {

            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);

        }
    }

//    ----------------------to make the order--------------------------------
@PostMapping("/FoodiFy/User/setOrder")
public ResponseEntity<?> getOrderFood(@RequestBody Order order) {

//		String foodId = null;
//		FoodItem food = foodItems.findByid(foodId);
    String userName = SecurityContextHolder.getContext().getAuthentication().getName();

    try {

        return new ResponseEntity<>(order_service.setOrder(order,userName), HttpStatus.OK);

    } catch (Exception e) {

        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);

    }

//		return null;
}


    //    ----------------------to make the order--------------------------------
    @GetMapping("/FoodiFy/Restaurant/callOrder")
    public ResponseEntity<?> callOrders() {

//		String foodId = null;
//		FoodItem food = foodItems.findByid(foodId);
        String userName = SecurityContextHolder.getContext().getAuthentication().getName();
        System.out.println(userName);
        try {

            return new ResponseEntity<>(order_service.callOrder(userName), HttpStatus.OK);

        } catch (Exception e) {

            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);

        }

//		return null;
    }


}
