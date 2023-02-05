import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { ProductsComponent } from "./products/products.component";


let myroutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'products', component: ProductsComponent }

]
@NgModule(
  {
    imports: [
      RouterModule.forRoot(myroutes)
    ],

    exports: [
      RouterModule
    ]
  }
)
export class appRoutingModule {}
