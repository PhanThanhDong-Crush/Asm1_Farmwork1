import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/serivices/product.service';

@Component( {
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: [ './product-add.component.scss' ]
} )
export class ProductAddComponent
{
  product: IProduct = {
    id: 0,
    name: "",
    image: ""
  }

  constructor (
    private route: ActivatedRoute,
    private productServices: ProductService,
    private router: Router
  )
  { };

  onSubmit ()
  {
    this.productServices.editPro( this.product ).subscribe( product => console.log( product ) );
    this.router.navigate( [ "admin/product" ] )
  }
}
