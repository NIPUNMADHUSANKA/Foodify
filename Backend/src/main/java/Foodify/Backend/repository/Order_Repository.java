
package Foodify.Backend.repository;

import Foodify.Backend.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Order_Repository extends MongoRepository<Order, String> {


	
	@Query(value ="{user: ObjectId(?0)}")
	List<Order> findByUser(String UserId);

//	@Query(value ="{restaurant: ?0}")
//	List<Order> findByRes(ObjectId RestaurantId);
	
}



