package de.accenture.restaurant.service;


import de.accenture.restaurant.entity.Dish;
import de.accenture.restaurant.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.net.URL;
import java.util.List;

@Service
public class DishService {

    @Autowired
    private DishRepository repository;
    @Autowired
    private AmazonS3BucketService amazonS3BucketService ;

    // Post Method

    // if you will save only one Dish
    public Dish createDish(MultipartFile file,Dish dish){
        URL url  = this.amazonS3BucketService.uploadFile( file);
        dish.setUrl(url.toString());
        return repository.save(dish);
    }

    // if you will save a list of Dishs
    public List<Dish> createDishes(List<Dish> dishes){
        return repository.saveAll(dishes);
    }


    // Get Method

    // Get only one Dish By Id
    public Dish findDishById(int id){
        return repository.findById(id).orElse(null);
    }
    // Find a list of Dishes
    public List<Dish> findAllDishes(){
        return repository.findAll();
    }

    // if you want to get by name not Id.
    // Since we do not have a built in function in the JpaRepository class
    // to get by name like with Id , So we need to Create a function
    // in the repository class and call it here

    public Dish findDishByTitle(String title){
        return repository.findByTitle(title);
    }



    //Delete Method
    public String deleteDish(int id){
        repository.deleteById(id);
        return "dish removed !!" + id;
    }



    // Update Method (Put)
    public Dish updateDish(Dish dish){
        Dish existingDish = repository.findById(dish.getId()).orElse(null);
        existingDish.setTitle((dish.getTitle()));
        existingDish.setDescription(dish.getDescription());
        existingDish.setPrice(dish.getPrice());
        existingDish.setUrl(dish.getUrl());
        return  repository.save(existingDish);

    }

}
