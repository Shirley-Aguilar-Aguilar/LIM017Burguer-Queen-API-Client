import { NgModule } from "@angular/core";
import { BodyRoutingModule } from "./body-routing.module";
import { CreateOrdersComponent } from "./orders/create-orders/create-orders.component";
import { OrdersPendingComponent } from "./orders/view-orders/orders-pending/orders-pending.component";
import { OrdersStatusComponent } from "./orders/view-orders/orders-status/orders-status.component";
import { ViewProductsComponent } from "./products/view-products/view-products.component";
import { CreateUsersComponent } from "./users/create-users/create-users.component";
import { ViewUsersComponent } from "./users/view-users/view-users.component";

@NgModule ({
  declarations: [
    CreateUsersComponent,
    ViewUsersComponent,
    ViewProductsComponent,
    CreateOrdersComponent,
    OrdersPendingComponent,
    OrdersStatusComponent,
  ],
  imports: [
   BodyRoutingModule,
  ]
})
export class BodyModule { }
