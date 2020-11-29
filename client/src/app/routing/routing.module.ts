import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {App_Routes} from "./main-routes";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(App_Routes)
  ],
  exports:[
    RouterModule,
  ]
})
export class RoutingModule { }
