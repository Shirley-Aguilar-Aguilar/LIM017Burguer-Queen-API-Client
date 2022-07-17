import { NgModule } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { AngularMaterialModule } from "src/app/angular-material/angular-material.module";
import { BodyRoutingModule } from "./body-routing.module";
import { createDialogsProducts } from "./dialogs/createDialogsProducts/createDialogsProducts.component";
import { DialogCorrect, DialogData, DialogIncorrect } from "./dialogs/dialogsTs/dialogs.component";
import { DialogUpdateWorker } from "./dialogs/updateDialogsWorker/dialogUpdateWorker.component";
import { CreateOrdersComponent } from "./orders/create-orders/create-orders.component";
import { OrdersPendingComponent } from "./orders/view-orders/orders-pending/orders-pending.component";
import { OrdersStatusComponent } from "./orders/view-orders/orders-status/orders-status.component";
import { ViewProductsComponent } from "./products/view-products/view-products.component";
import { CreateUsersComponent } from "./users/create-users/create-users.component";
import { ViewUsersComponent } from "./users/view-users/view-users.component";

@NgModule ({
  declarations: [
    CreateUsersComponent,
    ViewUsersComponent ,
    ViewProductsComponent,
    CreateOrdersComponent,
    OrdersPendingComponent,
    OrdersStatusComponent,
    DialogData,
    DialogIncorrect,
    DialogCorrect,
    DialogUpdateWorker,
    createDialogsProducts
  ],
  imports: [
   BodyRoutingModule,
   FormsModule,
   ReactiveFormsModule,
   AngularMaterialModule,
   MatDialogModule
  ]
})
export class BodyModule { }
