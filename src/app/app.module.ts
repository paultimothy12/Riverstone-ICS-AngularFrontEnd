import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SpecificComponent } from './specific/specific.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {AuthGuardService} from "./auth-guard";
import {AuthService} from "./security/auth-context";
import {JWT_OPTIONS} from "@auth0/angular-jwt";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent,
    SpecificComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RouterOutlet,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
