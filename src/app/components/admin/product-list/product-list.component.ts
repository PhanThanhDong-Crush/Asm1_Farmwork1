import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/serivices/product.service';

@Component( {
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.scss' ]
} )
export class ProductListComponent
{
  products: IProduct[] = []

  constructor ( private productService: ProductService )
  {
    this.productService.getAllPro().subscribe( data =>
    {
      this.products = data
    } )
  }

  deletePro ( id: number )
  {
    this.productService.deletePro( id ).subscribe( () =>
    {
      console.log( "delete thanh cong" );
      this.products = this.products.filter( item => item.id !== id )
    } )
  }
}
