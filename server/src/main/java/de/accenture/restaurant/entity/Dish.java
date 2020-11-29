package de.accenture.restaurant.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "dishes_list")
public class Dish {

    @Id
    @GeneratedValue

    private int id;
    private String title;
    private String description;
    private int price;
    private String url;


}
