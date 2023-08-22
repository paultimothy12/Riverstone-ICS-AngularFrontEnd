import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ErrorComponent} from "./error/error.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductComponent} from "./product/product.component";
import {SpecificComponent} from "./specific/specific.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {AuthGuardService} from "./auth-guard";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent,canActivate:[AuthGuardService]},
  {path: 'products', component: ProductListComponent,canActivate:[AuthGuardService]},
  {path: 'product/:id', component: ProductComponent,canActivate:[AuthGuardService]},
  {path: 'specific', component: SpecificComponent,canActivate:[AuthGuardService]},
  {path: 'specificproddetail/:id', component: ProductDetailComponent,canActivate:[AuthGuardService]},
  {path:  '**',component:ErrorComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
