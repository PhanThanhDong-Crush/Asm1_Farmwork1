import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable( {
  providedIn: 'root'
} )
export class ProductService
{

  constructor ( private http: HttpClient ) { }

  getAllPro (): Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>( `http://localhost:3000/product` )
  }

  getOnePro ( id: number ): Observable<IProduct>
  {
    return this.http.get<IProduct>( `http://localhost:3000/product/${ id }` )
  }

  addPro ( product: IProduct ): Observable<IProduct>
  {
    return this.http.post<IProduct>( `http://localhost:3000/product`, product )
  }

  editPro ( product: IProduct ): Observable<IProduct>
  {
    return this.http.patch<IProduct>( `http://localhost:3000/product/${ product.id }`, product )
  }

  deletePro ( id: number ): Observable<IProduct[]>
  {
    return this.http.delete<IProduct[]>( `http://localhost:3000/product/${ id }` )
  }

}
