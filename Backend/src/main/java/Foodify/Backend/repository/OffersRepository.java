package Foodify.Backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import Foodify.Backend.model.Offers;

public interface OffersRepository extends MongoRepository<Offers, String>{
	
	Offers findByid(String id);

}
