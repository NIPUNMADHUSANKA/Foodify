package Foodify.Backend.service;

import Foodify.Backend.model.*;
import Foodify.Backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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

//		----------setting up RID----------------
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

		order_repository.save(order);
		items.clear();
		shoppingCart.setItems(items);
		shoppingCart.setPrice(0);
		ShoppingCartRepo.save(shoppingCart);

//		offers.setStartDate(LocalDate.parse(Bdate));
//		offers.setEndDate(LocalDate.parse(Edate));
		return null;
	}
}
