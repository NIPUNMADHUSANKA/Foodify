package Foodify.Backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import Foodify.Backend.model.IntakePending;
import java.util.List;
import java.util.Optional;


@Repository
public interface IntakePendingRepository extends MongoRepository<IntakePending,String>{

    List<IntakePending> findAllByuserName(String userName);

   
    
}
