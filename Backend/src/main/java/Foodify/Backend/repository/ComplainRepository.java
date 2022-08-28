package Foodify.Backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Foodify.Backend.model.Complain;

@Repository
public interface ComplainRepository extends MongoRepository<Complain,String> {

}
