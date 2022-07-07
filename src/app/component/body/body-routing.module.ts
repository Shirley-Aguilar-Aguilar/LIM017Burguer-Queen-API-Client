import { Routes } from "@angular/router";
import { HeadernavComponent } from "../headernav/headernav.component";
import { CreateOrdersComponent } from "./orders/create-orders/create-orders.component";
import { OrdersPendingComponent } from "./orders/view-orders/orders-pending/orders-pending.component";
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
      {path:'create-order' , component: CreateOrdersComponent},
      {path:'orders-pending' , component: OrdersPendingComponent},
      {path:'order-status' , component: OrdersStatusComponent},

    ]
  }
]
