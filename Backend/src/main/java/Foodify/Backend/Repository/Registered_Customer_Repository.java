package Foodify.Backend.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import Foodify.Backend.model.Registered_Customer;

@Repository
public interface Registered_Customer_Repository extends MongoRepository<Registered_Customer, String> {
	
	@Query("{'$and':[ {'UserName': ?0}, {'Password':?1} ] }")
	Optional<Registered_Customer> findByUser(String UserName, String Password);

	
}


