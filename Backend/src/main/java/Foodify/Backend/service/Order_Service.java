package Foodify.Backend.service;
import Foodify.Backend.model.Order;
import Foodify.Backend.repository.Order_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface Order_Service {

	List<Order> findByUser(String UserId);
	List<Order> findByRes(String RestaurantId);
	
}
