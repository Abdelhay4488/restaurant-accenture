import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dish} from "../models/dish.model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {


  constructor(private httpClient:HttpClient) {}

  fetchData(){
    return this.httpClient.get(environment.baseUrl+"/dishes");
  }

  getDishByID(id:number){
    return this.httpClient.get(environment.baseUrl+"/dish/"+id);

  }

  updateData(dish:Dish){

    return this.httpClient.put(environment.baseUrl+"/dish",dish);
  }

  deleteItem(id:number):Observable<any>{
    return this.httpClient.delete(environment.baseUrl+"/dish/"+id,{responseType: 'text'});
  }

  createDish(dish:Dish){

    return this.httpClient.post(environment.baseUrl+"/dish",dish);
  }


}
