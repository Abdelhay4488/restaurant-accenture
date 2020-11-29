import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../../models/dish.model";
import {HttpServiceService} from "../../services/http-service.service";

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  @Input() dishList: Dish[];

  constructor(private httpservice:HttpServiceService) { }

  ngOnInit(): void {


  }

  onDishDelete(event){

    console.log(event);
    this.httpservice.deleteItem(event).subscribe(
      (res)=>{
        console.log("deleted res:",res);
        this.httpservice.fetchData().subscribe(
          (response:Dish[])=>{
            this.dishList = response;
          }
        );

      },
/*      (err)=>{
        console.log("err: deleted res:",err);
        this.httpservice.fetchData().subscribe(
          (response:Dish[])=>{
            this.dishList = response;
          });
      }*/

      );
  }

}
