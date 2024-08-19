import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  saveProduct(product:Product){
    let url="http://localhost:8090/product/api.1.0/create";
    this.http.post(url,product);
  }
}
