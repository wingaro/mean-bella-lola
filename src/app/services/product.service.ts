import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct: Product;
  products: Product[];
  
   //URL LOCAL
  // readonly URL_API = 'http://localhost:3000/api/products';

  //URL HEROKU
  readonly URL_API = '/api/products';

  constructor(public http: HttpClient ) {
    this.selectedProduct = new Product();
   }

  getProducts(){
    return this.http.get(this.URL_API);
  }

  postProduct(Product: Product) {
    return this.http.post(this.URL_API, Product);
  }

  putProduct(product: Product){
      return this.http.put(this.URL_API + `/${product._id}`, product);
  }

  deleteProduct(_id: string){
    console.log(_id);
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
