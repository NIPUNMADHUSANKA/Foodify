package Foodify.Backend.controller;

import Foodify.Backend.model.OrderItem;
//import Foodify.Backend.repository.ShoppingCart_Repository;
import Foodify.Backend.service.ShopCartServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ShoppingCartController {

    /*@Autowired
    private ShoppingCart_Repository ShoppingCartRepo;
    */

    @Autowired
    private ShopCartServiceImp ShopCartService;


    @PostMapping("/FoodiFy/Service/setShoppingCart")
    public ResponseEntity<?> setShoppingCart(@RequestBody OrderItem orderItem) {

        String userName = SecurityContextHolder.getContext().getAuthentication().getName();
//        int price = orderItem.getPrice();

//        System.out.println(orderItem.getFoodId());
//        System.out.println(orderItem.getRestaurantId());
        int price = orderItem.getPrice();

        try {

            return new ResponseEntity<>(ShopCartService.setShoppingCart(userName,orderItem,price), HttpStatus.OK);

        } catch (Exception e) {

            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);

        }
//        return null;

    }

}
