import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dish} from "../../models/dish.model";
import {Router} from "@angular/router";
import {HttpServiceService} from "../../services/http-service.service";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  @Input() dish : Dish;
  @Output() dishDeleted = new EventEmitter();

  constructor(
    private router: Router, private httpservice: HttpServiceService
  ) { }

  ngOnInit(): void {
  }
  goToUpdateDish(){
    this.router.navigate(['dish',this.dish.id])
  }

  DeleteMethod(event){

    this.dishDeleted.emit(this.dish.id);
    event.stopImmediatePropagation();
    event.preventDefault();


  }

}
