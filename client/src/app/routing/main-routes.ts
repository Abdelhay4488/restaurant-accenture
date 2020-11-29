import {HomeComponent} from "../dish/components/home/home.component";
import {AboutComponent} from "../core/components/about/about.component";
import {ContactUsComponent} from "../core/components/contact-us/contact-us.component";
import {DishUpdateComponent} from "../dish/components/dish-update/dish-update.component";
import {DishCreateComponent} from "../dish/components/dish-create/dish-create.component";

export const App_Routes =[
  {path:'', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'dish/:id', component: DishUpdateComponent},
  {path: 'create', component: DishCreateComponent}

];
