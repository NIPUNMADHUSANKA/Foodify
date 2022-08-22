package Foodify.Backend.controller;

import Foodify.Backend.model.Restaurant;
import Foodify.Backend.repository.RestaurantRepository;
import Foodify.Backend.service.Restaurantserv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/RestaurantInfo")
@CrossOrigin (origins = "http://localhost:3000")
public class RestaurantInfoController {

    @Autowired
    private RestaurantRepository resRepo;

    @Autowired
    private Restaurantserv resServ;

    @PostMapping("/editContact")
    public boolean saveAbout(@RequestBody Restaurant restaurant ) {

		resRepo.save(restaurant);
        return true;
    }
}
