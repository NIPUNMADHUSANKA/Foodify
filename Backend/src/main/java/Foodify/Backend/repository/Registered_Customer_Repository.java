
package Foodify.Backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import Foodify.Backend.model.Registered_Customer;

@Repository
public interface Registered_Customer_Repository extends MongoRepository<Registered_Customer, String> {
	
	@Query("{'$and':[ {'userName': ?0}, {'password':?1} ] }")
	Optional<Registered_Customer> findByUser(String UserName, String Password);
	
	@Query(value = "{ 'status' : ?0 }", fields = "{ 'item' : 1, 'status' : 1 }")
    List<Registered_Customer> findByStatusIncludeItemAndStatusFields(String status);
    
    @Query(value ="{userName: ?0}", count=true)               
    public Integer findByUserName(String userName);
    
    @Query(value ="{email: ?0}", count=true)                
    public Integer findByUserEmail(String email);
	
}