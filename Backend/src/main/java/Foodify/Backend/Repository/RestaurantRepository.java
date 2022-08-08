package Foodify.Backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Foodify.Backend.model.Restaurant;

@Repository
public interface RestaurantRepository extends MongoRepository<Restaurant, String>{

}
