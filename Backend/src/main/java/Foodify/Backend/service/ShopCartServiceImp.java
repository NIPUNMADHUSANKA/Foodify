package Foodify.Backend.service;


import Foodify.Backend.model.OrderItem;
import Foodify.Backend.model.ShoppingCart;
import Foodify.Backend.repository.ShoppingCart_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ShopCartServiceImp implements ShopCartService{

    @Autowired
    private ShoppingCart_Repository ShoppingCartRepo;

//    ------------------for set up shopping cart---------------------------
    @Override
    public ResponseEntity<?> setShoppingCart(String userName, OrderItem orderItem,int price) {

        ShoppingCart shoppingCart = ShoppingCartRepo.findByuserName(userName);

        ShoppingCart cart;

//        -----------------newly send food item---------------------
        OrderItem foodItem = orderItem;
        int price2 = 0;
        //int price3 = 0;

        if(shoppingCart == null){
            cart = new ShoppingCart();

            List<OrderItem> items = new ArrayList<OrderItem>();
            items.add(foodItem);
            cart.setItems(items);
            price2 = price;

            cart.setPrice(price2);
            cart.setUserName(userName);

            ShoppingCartRepo.save(cart);

        }else{
            cart = ShoppingCartRepo.findByuserName(userName);
//            -----------------item list of current shopping cart--------------
            List<OrderItem> items = cart.getItems();
//          get the current price of the cart
            price2 = cart.getPrice();

            items.add(foodItem);

            price2 = price2+foodItem.getPrice();
            cart.setItems(items);
            cart.setPrice(price2);
            cart.setUserName(userName);

            ShoppingCartRepo.save(cart);

        }


        System.out.println("Success");


        return null;
    }
}
