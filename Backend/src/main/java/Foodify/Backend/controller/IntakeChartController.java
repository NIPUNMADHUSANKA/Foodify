package Foodify.Backend.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Foodify.Backend.model.IntakeChart;
import Foodify.Backend.model.IntakePending;
import Foodify.Backend.repository.IntakeChartRepository;
import Foodify.Backend.repository.IntakeItemPending;
import Foodify.Backend.repository.IntakePendingRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class IntakeChartController {
    
    @Autowired
    private IntakeChartRepository intakeChartRepository;

    @Autowired
    private IntakePendingRepository intakePendingRepository;

    @Autowired
    private IntakeItemPending intakePendingItemRepository;


    @PostMapping("/FoodiFy/Premium/addIntakeChart")
	public void addIntakeChart(@RequestBody IntakeChart intakeChart) {

        String userName = SecurityContextHolder.getContext().getAuthentication().getName();

        String localDate = LocalDate.now().toString();

        //LocalDate date = LocalDate.parse(localDate);

        intakeChart.setUserName(userName);
        intakeChart.setLastUpdate(localDate);

        intakeChartRepository.save(intakeChart);


    }

    @GetMapping("/FoodiFy/Premium/getIntakeChart")   
    public ResponseEntity<?> getIntakeChart() {
        String userName = SecurityContextHolder.getContext().getAuthentication().getName();

        try {

            IntakeChart intakeChart = intakeChartRepository.findByuserName(userName);

            LocalDate date = LocalDate.parse(intakeChart.getLastUpdate());

            if(LocalDate.now().equals(date)){
                return new ResponseEntity<>(intakeChart, HttpStatus.OK);
            }
            else{

                intakeChart.setLastUpdate(LocalDate.now().toString());
                intakeChart.setCalaries(0.0);
                intakeChart.setFat(0.0);
                intakeChart.setProtein(0.0);
                intakeChart.setCarbo(0.0);
                intakeChartRepository.save(intakeChart);
                return new ResponseEntity<>(intakeChart, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }

    }


    @GetMapping("/FoodiFy/Premium/getPending")
    public ResponseEntity<?> getIntakePending() {

        String userName = SecurityContextHolder.getContext().getAuthentication().getName();

        List<IntakePending> pending = intakePendingRepository.findAllByuserName(userName);

        if(!pending.isEmpty()){
            return new ResponseEntity<>(pending, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Not Found", HttpStatus.BAD_REQUEST);
        }

    }


    @GetMapping("/FoodiFy/Premium/getPendingItems/{id}")
	public ResponseEntity<?> getPendingItems(@PathVariable(value="id") String pendingid) {
		
        try {

            return new ResponseEntity<>(intakePendingItemRepository.findBypending(pendingid), HttpStatus.OK);

        } catch (Exception e) {

            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);

        }

	}


}