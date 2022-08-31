package Foodify.Backend.repository;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import Foodify.Backend.model.FoodCategory;


@Repository
public interface FoodCategoryRepo extends MongoRepository<FoodCategory,String>{
    
    @Query("{'$and':[ {'menuId': ?0}, {'foodMenuCategory':?1} ] }")
	Optional<FoodCategory> findByMenuCategoryExists(ObjectId menuId, String foodMenuCategory);

    
}
