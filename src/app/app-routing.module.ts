import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { HomeComponent } from './components/client/home/home.component';
import { ProductsComponent } from './components/client/products/products.component';
import { ProductDetailComponent } from './components/client/product-detail/product-detail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { ProductAddComponent } from './components/admin/product-add/product-add.component';
import { ProductEditComponent } from './components/admin/product-edit/product-edit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "", component: ClientLayoutComponent, children: [
      { path: "", component: HomeComponent },
      { path: "product", component: ProductsComponent },
      { path: "product/:id/detail", component: ProductDetailComponent }
    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "product", pathMatch: "full" },
      { path: "product", component: ProductListComponent },
      { path: "product-add", component: ProductAddComponent },
      { path: "product/:id/edit", component: ProductEditComponent },
    ]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
