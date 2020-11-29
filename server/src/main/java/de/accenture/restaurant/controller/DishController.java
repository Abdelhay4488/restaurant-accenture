package de.accenture.restaurant.controller;


import de.accenture.restaurant.entity.Dish;
import de.accenture.restaurant.service.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
public class DishController {
    // we need to write all RestAPI Endpoints for all the methods which is
    // represented in the Controller Class
    @Autowired
    private DishService service;


    // Get a list of Dishes
    @GetMapping("/dishes")
    public List<Dish> findAllDishes(){
        return service.findAllDishes();
    }


    // Post Method

    // Post only one Dish
    // @RequestBody because we will have an input Json and will be passed to the Dish object
    @PostMapping("/dish")
    public Dish createDish(@RequestBody Dish dish){
        return service.createDish(dish);
    }


    // Post list of Dishes
    @PostMapping("/dishes")
    public List<Dish> createDishes(@RequestBody List<Dish> dishes){
        return service.createDishes(dishes);
    }

    // Get Method
    // Get Dish By Id
    @GetMapping("/dish/{id}")
    //@PathVariable is used because we need to pass the id variable as part of the url
    // you can use also @RequesParamter (check how to use it)
    public Dish findDishById(@PathVariable int id){
        return service.findDishById(id);
    }

    //Get Dish by Title
    @GetMapping("/dishByTitle/{title}")
    public Dish findDishByTitle(@PathVariable String title){
        return service.findDishByTitle(title);
    }

    // Delete Method
    @DeleteMapping("/dish/{id}")
    public String deleteDish(@PathVariable int id){
        return service.deleteDish(id);
    }

    // Put Method ( Update )
    @PutMapping("/dish")
    public Dish updateDish(@RequestBody Dish dish){
        return service.updateDish(dish);
    }



}
