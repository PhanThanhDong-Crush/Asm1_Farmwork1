import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/serivices/product.service';

@Component( {
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: [ './product-detail.component.scss' ]
} )
export class ProductDetailComponent
{
  product: IProduct = {
    id: 0,
    name: "",
    image: ""
  }

  constructor (
    private route: ActivatedRoute,
    private productServices: ProductService
  )
  {
    this.route.paramMap.subscribe( param =>
    {
      const id = Number( param.get( 'id' ) )

      this.productServices.getOnePro( id ).subscribe( pro =>
      {
        this.product = pro
      }, error => console.log( error.message )
      )
    } )
  }
}
