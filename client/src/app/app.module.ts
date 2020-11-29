import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {DishModule} from "./dish/dish.module";
import {RoutingModule} from "./routing/routing.module";
import {HttpClientModule} from "@angular/common/http";
import {HttpServiceService} from "./dish/services/http-service.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DishModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
