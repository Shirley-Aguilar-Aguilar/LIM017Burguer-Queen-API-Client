import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeadernavComponent } from "../headernav/headernav.component";
import { CreateOrdersComponent } from "./orders/create-orders/create-orders.component";
import { OrdersStatusComponent } from "./orders/view-orders/orders-status/orders-status.component";
import { ViewProductsComponent } from "./products/view-products/view-products.component";
import { CreateUsersComponent } from "./users/create-users/create-users.component";
import { ViewUsersComponent } from "./users/view-users/view-users.component";

const routes: Routes = [
  {
    path:'', component: HeadernavComponent,
    children: [
      {path:'create-users' , component: CreateUsersComponent},
      {path:'view-users' , component: ViewUsersComponent},
      {path:'products' , component: ViewProductsComponent},
      {path:'create-orders' , component: CreateOrdersComponent},
      {path:'orders-status' , component: OrdersStatusComponent},

    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
