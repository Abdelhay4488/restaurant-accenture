import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DishComponent} from './components/dish/dish.component';
import {DishListComponent} from './components/dish-list/dish-list.component';
import {HomeComponent} from "./components/home/home.component";
import {CarouselComponent} from "./components/carousel/carousel.component";
import {DishUpdateComponent} from './components/dish-update/dish-update.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DishCreateComponent} from "./components/dish-create/dish-create.component";


@NgModule({
  declarations: [
    DishComponent,
    DishListComponent,
    HomeComponent,
    CarouselComponent,
    DishUpdateComponent,
    DishCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ]
})
export class DishModule { }
