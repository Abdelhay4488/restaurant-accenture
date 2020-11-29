package de.accenture.restaurant.repository;

import de.accenture.restaurant.entity.Dish;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DishRepository extends JpaRepository<Dish,Integer> {
    Dish findByTitle(String title);
}
