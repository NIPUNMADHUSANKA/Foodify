package Foodify.Backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Foodify.Backend.model.RestaurantComment;

@Repository
public interface RestaurantCommentRepository extends MongoRepository<RestaurantComment,String> {

}