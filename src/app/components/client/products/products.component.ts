import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/serivices/product.service';

@Component( {
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [ './products.component.scss' ]
} )
export class ProductsComponent
{
  products: IProduct[] = []

  constructor ( private productService: ProductService )
  {
    this.productService.getAllPro().subscribe( data =>
    {
      this.products = data
    } )
  }
}
