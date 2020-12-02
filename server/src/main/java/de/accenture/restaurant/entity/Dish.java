package de.accenture.restaurant.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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
    @Column( length = 100000 )
    private String url;


}
