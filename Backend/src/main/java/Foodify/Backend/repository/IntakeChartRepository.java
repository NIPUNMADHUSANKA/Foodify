package Foodify.Backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import Foodify.Backend.model.IntakeChart;

@Repository
public interface IntakeChartRepository extends MongoRepository<IntakeChart,String>{

    IntakeChart findByuserName(String userName);
    
}