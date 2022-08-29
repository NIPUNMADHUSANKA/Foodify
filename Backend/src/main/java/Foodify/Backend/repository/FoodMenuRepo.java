package Foodify.Backend.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import Foodify.Backend.model.FoodMenu;


@Repository
public interface FoodMenuRepo extends MongoRepository<FoodMenu,String>{
    
    @Query("{'$and':[ {'userName': ?0}, {'foodMenuName':?1} ] }")
	Optional<FoodMenu> findByResturantMenuExists(String userName, String foodMenuName);
    
}