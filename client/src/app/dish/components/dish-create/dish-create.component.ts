import {Component, OnInit} from '@angular/core';
import {Dish} from "../../models/dish.model";
import {HttpServiceService} from "../../services/http-service.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dish-create',
  templateUrl: './dish-create.component.html',
  styleUrls: ['./dish-create.component.css']
})
export class DishCreateComponent implements OnInit {

  constructor(private httpservice:HttpServiceService ,private httpclient:HttpClient,private router: Router) { }

  newDish:Dish = new Dish();

  ngOnInit(): void {

  }


  onUpdateTitle(event:Event){
    this.newDish.title= (<HTMLInputElement>event.target).value;

    console.log(this.newDish);
  }


  onUpdatePrice(event:Event){
    this.newDish.price= +(<HTMLInputElement>event.target).value;

    console.log(this.newDish);
  }

  onUpdateUrl(event:Event){
    this.newDish.url= (<HTMLInputElement>event.target).value;

    console.log(this.newDish);
  }

  onUpdateDescription(event:Event){
    this.newDish.description= (<HTMLInputElement>event.target).value;

    console.log(this.newDish);
  }


  onTriggerCreateReqToBackEnd(){
    console.log(this.newDish);
    this.httpservice.createDish(this.newDish).subscribe(
      (response)=>{
        console.log(response);
        this.router.navigate(['']);
      }
    );


      }

}
