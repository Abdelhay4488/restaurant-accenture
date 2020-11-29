import {Component, OnInit} from '@angular/core';
import {Dish} from "../../models/dish.model";
import {HttpServiceService} from "../../services/http-service.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //dishList = dishListDemoData;

  dishList : Dish[] ;

  constructor(private httpservice:HttpServiceService) {
  }

  ngOnInit(): void {

    this.httpservice.fetchData().subscribe(
      (data:Dish[])=>{
        this.dishList=data;
        console.log(this.dishList);
      }
    );



  }

}
