import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { LoginComponent } from "./component/login/login.component";
// importando componentes

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent},
{ path: 'body', loadChildren: () => import('./component/body/body.module').then(m => m.BodyModule)},
]

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
