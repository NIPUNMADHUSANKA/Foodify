
package Foodify.Backend.repository;

import Foodify.Backend.model.FoodItem;
import Foodify.Backend.model.Registered_Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FoodItem_Repository extends MongoRepository<FoodItem, String> {

	@Query(value ="{restaurant: ?0}", count=true)
	List<FoodItem> findByRes(String ResId);
	
}



