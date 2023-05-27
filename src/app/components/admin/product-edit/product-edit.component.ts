import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/serivices/product.service';

@Component( {
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: [ './product-edit.component.scss' ]
} )
export class ProductEditComponent
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
  };

  onSubmit ()
  {
    this.productServices.editPro( this.product ).subscribe( product => console.log( product ) );
    this.router.navigate( [ "admin/product" ] )
  }
}
