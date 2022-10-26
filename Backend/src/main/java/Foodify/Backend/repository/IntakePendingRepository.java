package Foodify.Backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import Foodify.Backend.model.IntakePending;
import java.util.List;


@Repository
public interface IntakePendingRepository extends MongoRepository<IntakePending,String>{

    List<IntakePending> findAllByuserName(String userName);

    @Query("{$and :[{userName: ?0},{purches_date: ?1},{purches_time: ?3}] }")
    IntakePending getIntakePendingByUserNameAndPurches_dateAndPurches_time(String userName, String purches_date,String purches_time);

   
    
}
