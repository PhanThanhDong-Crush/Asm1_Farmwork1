import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { ProductEditComponent } from './components/admin/product-edit/product-edit.component';
import { ProductAddComponent } from './components/admin/product-add/product-add.component';
import { ProductsComponent } from './components/client/products/products.component';
import { HomeComponent } from './components/client/home/home.component';
import { ProductDetailComponent } from './components/client/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
@NgModule( {
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductAddComponent,
    ProductsComponent,
    HomeComponent,
    ProductDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
