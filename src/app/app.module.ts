import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { HeadernavComponent } from './component/headernav/headernav.component';
import { CreateUsersComponent } from './component/body/users/create-users/create-users.component';
import { ViewUsersComponent } from './component/body/users/view-users/view-users.component';
import { ViewProductsComponent } from './component/body/products/view-products/view-products.component';
import { CreateOrdersComponent } from './component/body/orders/create-orders/create-orders.component';
import { OrdersPendingComponent } from './component/body/orders/view-orders/orders-pending/orders-pending.component';
import { OrdersStatusComponent } from './component/body/orders/view-orders/orders-status/orders-status.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeadernavComponent,
    CreateUsersComponent,
    ViewUsersComponent,
    ViewProductsComponent,
    CreateOrdersComponent,
    OrdersPendingComponent,
    OrdersStatusComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormControl,
    AngularMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
