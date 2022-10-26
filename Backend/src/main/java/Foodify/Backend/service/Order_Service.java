package Foodify.Backend.service;

import Foodify.Backend.model.*;
import Foodify.Backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Optional;



@Service
public class Order_Service implements Order_Serv{

	@Autowired
	private Order_Repository order_repository;

	@Autowired
	private FoodItem_Repository foodItem_repository;

	@Autowired
	private RestaurantRepository restaurantRepository;

	@Autowired
	private Registered_Customer_Repository registered_customer_repository;

	@Autowired
	private ShoppingCart_Repository ShoppingCartRepo;

	@Autowired
	private IntakePendingRepository intakePendingRepository;

	@Autowired
	private IntakeItemPending intakeItemPendingRepository;

	@Override
	public List<Order> findByUser(String UserId){
		return order_repository.findByUser(UserId);
	}

	@Override
	public List<Order> findByRes(String RestaurantId){
		return order_repository.findByUser(RestaurantId);
	}
	@Override
	public List<Order> getDetailedOrders(String userId){
		List<Order> undetailedOrders = order_repository.findByUser(userId);

		for (Order order: undetailedOrders) {
			ArrayList details = order.getDetails();
			double price = 0;
			Restaurant res = restaurantRepository.findByid(order.getResId());
			order.setResId(res.getRestaurantName());

			for (int i = 0; i < details.size(); i++){
				LinkedHashMap x = (LinkedHashMap) details.get(i);
				FoodItem item = foodItem_repository.findByid(x.get("item").toString());
				x.put("name",item.getName());
				x.put("price",item.getPrice());
				x.put("discount",item.getDiscount());
				price += (((double)x.get("price")) * ((int)x.get("quantity"))) - (int)x.get("discount");
			}
			order.setPrice((float) price);
		}

		return undetailedOrders;
	}

	@Override
	public List<Order> getDetailedOrders(){
		List<Order> undetailedOrders = order_repository.findAll();
		for (Order order: undetailedOrders) {
			ArrayList details = order.getDetails();
			double price = 0;
			Restaurant res = restaurantRepository.findByid(order.getResId());
			order.setResId(res.getRestaurantName());
			Optional<Registered_Customer> user = registered_customer_repository.findById(order.getUser());
			order.setUser(user.get().getuserName());
			for (int i = 0; i < details.size(); i++){
				LinkedHashMap x = (LinkedHashMap) details.get(i);
				FoodItem item = foodItem_repository.findByid(x.get("item").toString());
				x.put("name",item.getName());
				x.put("price",item.getPrice());
				x.put("discount",item.getDiscount());
				x.put("res", user);
				price += (((double)x.get("price")) * ((int)x.get("quantity"))) - (int)x.get("discount");
			}
			order.setPrice((float) price);
		}
		return undetailedOrders;
	}

	//	------------------------detailed order set------------------------------------
	public List<Order> detailedOrders(){

//		getting the order list
		List<Order> orders = order_repository.findAll();

		List<OrderItem> items = new ArrayList<>();

		int amount = 0;

//		loop orders
		for (Order order : orders){

//			System.out.println(order.getResId()+"second");
			List<OrderItem> items1 = order.getItems();
			//get res name
			String resId = order.getResId();
			Restaurant restaurant = restaurantRepository.findByid(resId);
			order.setResId(restaurant.getRestaurantName());

//			looping items
			for (OrderItem item : items1){

//				setting names of order items
				String foodId = item.getFoodId();
//				System.out.println("FoodId :"+ foodId);

//				taking the food item and assigning the name
				if(foodId != null){
					FoodItem foodItem1 = foodItem_repository.findByid(foodId);
					item.setFoodName(foodItem1.getName());
					item.setPrice(foodItem1.getPrice());
					item.setDiscount(foodItem1.getDiscount());
					item.setTotal(Math.round(item.getQuantity()* item.getPrice()- item.getDiscount()));
					amount += item.getTotal();
//					item.setFoodName(foodItem1.getName());
				}
//
			}

//			setting updated order items
			order.setItems(items1);
			order.setPrice(amount);
		}
		return orders;
	}

//	------------------------setting up order------------------------------------
	@Override
	public String setOrder(Order order, String userName) {

//		-----------------get the shopping cart and get the items----------------------
		ShoppingCart shoppingCart = ShoppingCartRepo.findByuserName(userName);
		List<OrderItem> items = shoppingCart.getItems();

		List<OrderItem> foodItmes = new ArrayList<>();
		String restaurantId = null;

		System.out.println(order.getOrderDate());
		System.out.println(order.getOrderTime());

//		-----------------for item pending------------
		Double calaries = 0.0;
		Double fat = 0.0;
		Double protein = 0.0;
		Double carbo = 0.0;
		Double price = 0.0;

//		----------setting up RID----------------
//		setting-up intake pending---------------
		for(OrderItem item : items){

			restaurantId = item.getRestaurantId();
			item.setPreparedStatus("Queued");

//			-------------------setting up values for intake pending------------------
			FoodItem foodItem1 = foodItem_repository.findByid(item.getFoodId());
			calaries = calaries + foodItem1.getCalaries();
			fat = fat + foodItem1.getFat();
			protein = protein + foodItem1.getProtein();
			carbo = carbo + foodItem1.getCarbo();
			price = price + item.getPrice();
		}

//		--------------------create new intake pending----------------------
		String rName = restaurantRepository.findByid(restaurantId).getRestaurantName();

		IntakePending intakePending = new IntakePending();
		intakePending.setCarbo(carbo);
		intakePending.setProtein(protein);
		intakePending.setFat(fat);
		intakePending.setCalaries(calaries);
		intakePending.setPrice(price);
		intakePending.setUserName(userName);
		intakePending.setResturant(rName);

////		-------------converting date & time to string-----------------
		intakePending.setPurches_date(order.getOrderDate());
		intakePending.setPurches_time(order.getOrderTime());

//		----------------saving intake pending----------------------------
		intakePendingRepository.save(intakePending);


//			--------------calling relevant intake pending--------------
		IntakePending intakePending1 =
				intakePendingRepository.getIntakePendingByUserNameAndPurches_dateAndPurches_time(
						userName,order.getOrderDate(),order.getOrderTime()
				);

		System.out.println(intakePending1.getId()+"order service 1");

//		-----------------------------setting up intake pending item ------------------------
		for(OrderItem item1 : items){

//			--------------for the intake pending item----------------------
			IntakePendingItem intakePendingItem = new IntakePendingItem();
			FoodItem foodItem1 = foodItem_repository.findByid(item1.getFoodId());

//			--------settingup individual values------------------
//			-------nutrition-------
			intakePendingItem.setCalaries(foodItem1.getCalaries());
			intakePendingItem.setProtein(foodItem1.getProtein());
			intakePendingItem.setFat(foodItem1.getFat());
			intakePendingItem.setCarbo(foodItem1.getCarbo());

//			----------setting other values-------------
			intakePendingItem.setQuantity((double) (item1.getQuantity()));
			intakePendingItem.setPrice((double) (item1.getPrice()));
			intakePendingItem.setItem(foodItem1.getName());

			intakePendingItem.setPending(intakePending1.getId());

//			----------save intake pending item----------
			intakeItemPendingRepository.save(intakePendingItem);
		}

//		--------setting up order details-----------------
		order.setItems(items);
		order.setResId(restaurantId);
		order.setPrice(shoppingCart.getPrice());
		order.setUserName1(userName);
		order.setPreparedState("Queued");

		order_repository.save(order);
		items.clear();
		shoppingCart.setItems(items);
		shoppingCart.setPrice(0);
		ShoppingCartRepo.save(shoppingCart);

//		offers.setStartDate(LocalDate.parse(Bdate));
//		offers.setEndDate(LocalDate.parse(Edate));
		return null;
	}

//	----------------------------to call relevant orders of the restaurant--------------------------
	@Override
	public List<Order> callOrder(String userName1) {

		Restaurant restaurant = restaurantRepository.findByuserName(userName1);
//		System.out.println(restaurant.getId());
//		getting the order list
		List<Order> orders = order_repository.findByresId(restaurant.getId());

		List<OrderItem> items = new ArrayList<>();

//		updating items in the orders
//		loop orders
		for (Order order : orders){
//			System.out.println(order.getResId()+"second");
			List<OrderItem> items1 = order.getItems();

//			looping items
			for (OrderItem item : items1){

//				setting names of order items
				String foodId = item.getFoodId();

//				taking the food item and assigning the name
				FoodItem foodItem1 = foodItem_repository.findByid(foodId);
				item.setFoodName(foodItem1.getName());
				item.setImage(foodItem1.getImage());
//				System.out.println(item.getFoodName());
			}

//			setting updated order items
			order.setItems(items1);
		}
		return orders;
	}

	@Override
	public String updateOrderItem(String itemId, String orderId) {

		System.out.println("order service");
		System.out.println(orderId);

		Order orders = order_repository.findByid(orderId);

		System.out.println(orders);
		List<OrderItem> items = orders.getItems();

//		for(Order order : orders)

		int count = 0;
		for(OrderItem item : items){
			System.out.println(item.getFoodId()+"order service");
			System.out.println(itemId+"order service");

			if(Objects.equals(item.getFoodId(), itemId)){

				if(Objects.equals(item.getPreparedStatus(), "Queued")){item.setPreparedStatus("Preparing");}
				else if(Objects.equals(item.getPreparedStatus(), "Preparing")){item.setPreparedStatus("Finished");}
			}

			if(Objects.equals(item.getPreparedStatus(), "Preparing")){

				System.out.println("order service");
				orders.setPreparedState("Preparing");
			}
			else if(Objects.equals(item.getPreparedStatus(), "Finished")){

				System.out.println("order service");
				count++;
				if(count == items.size()){
					orders.setPreparedState("Finished");
				}

			}
		}

		orders.setItems(items);
		order_repository.save(orders);
		return null;
	}

	@Override
	public String updateOrderStatus(String orderId) {

		System.out.println("order service");
		System.out.println(orderId);

		Order orders = order_repository.findByid(orderId);

		System.out.println(orders);

		orders.setPreparedState("Completed");
		order_repository.save(orders);

		return null;
	}
}
