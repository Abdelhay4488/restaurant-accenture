import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Dish} from "../../models/dish.model";
import {HttpServiceService} from "../../services/http-service.service";

@Component({
  selector: 'app-dish-update',
  templateUrl: './dish-update.component.html',
  styleUrls: ['./dish-update.component.css']
})
export class DishUpdateComponent implements OnInit {
  dishId:number;
  dish:Dish ;

  constructor(
     private httpservice:HttpServiceService ,private route : ActivatedRoute, private router :Router
  ) { }

  ngOnInit(): void {




    this.dishId = +this.route.snapshot.params['id'];


    this.httpservice.getDishByID(this.dishId).subscribe(
      (data:Dish)=>{
        this.dish = data;
      });
/*
    this.httpservice.fetchData().subscribe(
      (data:Dish[])=>{
        let filteredList = data.filter((item)=>{
          return item.id === this.dishId
        });

        this.dish=filteredList[0];

      });*/

  }

  onTriggerUpdateReqToBackEnd(){

    this.httpservice.updateData(this.dish).subscribe(
      ()=>{
        this.router.navigate(['']);
      }
    );


    // update the dish variable
    // this.dish.title= input.title
    // send req to backend


  }

}
