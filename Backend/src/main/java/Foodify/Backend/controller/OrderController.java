package Foodify.Backend.controller;

import Foodify.Backend.model.Order;
//import Foodify.Backend.repository.Order_Repository;
import Foodify.Backend.model.Restaurant;
import Foodify.Backend.service.Order_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
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

    //    ----------------------to make the order--------------------------------
    @PutMapping("/FoodiFy/Restaurant/updateOrderItem")
    public ResponseEntity<?> updateOrderItem(@RequestParam("itemId") String itemId,
                                             @RequestParam("orderId") String orderId) {

//		String foodId = null;
//		FoodItem food = foodItems.findByid(foodId);

        System.out.println(itemId+"Controller");
        System.out.println(orderId+"Controller");
        try {
            System.out.println("Controller");
            return new ResponseEntity<>(order_service.updateOrderItem(itemId,orderId), HttpStatus.OK);

        } catch (Exception e) {

            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);

        }

//		return null;
    }

    @GetMapping("/FoodiFy/Admin/OrderRange")
    public ResponseEntity<?> getDataOfRange(@RequestParam("startDate") Date startDate, @RequestParam("endDate") Date endDate){
        try {

            return new ResponseEntity<>(order_service.getRangedOrders(startDate,endDate), HttpStatus.OK);

        } catch (Exception e) {

            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);

        }
    }


}
