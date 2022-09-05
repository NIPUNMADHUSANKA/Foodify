package Foodify.Backend.service;

//import Foodify.Backend.model.Item;
import Foodify.Backend.model.FoodItem;
import Foodify.Backend.model.Order;
import Foodify.Backend.model.OrderItem;
import Foodify.Backend.repository.FoodItem_Repository;
import Foodify.Backend.repository.Order_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Array;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

//import static sun.nio.ch.DatagramChannelImpl.AbstractSelectableChannels.forEach;

@Service
public class Order_Service implements Order_Serv{

	@Autowired
	private Order_Repository order_repository;

	@Autowired
	private FoodItem_Repository foodItem_repository;

	@Override
	public List<Order> findByUser(String UserId){
		return order_repository.findByUser(UserId);
	}

	@Override
	public List<Order> findByRes(String RestaurantId){
		return order_repository.findByUser(RestaurantId);
	}
	@Override
	public List<Order> getDetailedOrder(String userId){
		List<Order> undetailedOrders = order_repository.findByUser(userId);

		for (Order order: undetailedOrders) {
			ArrayList details = order.getDetails();
			double price = 0;
//			order.setUser(details.toString());
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
}
