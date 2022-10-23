package Foodify.Backend.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import Foodify.Backend.model.IntakeChart;
import Foodify.Backend.model.IntakePending;

@Repository
public interface IntakeChartRepository extends MongoRepository<IntakeChart,String>{

    IntakeChart findByuserName(String userName);
}