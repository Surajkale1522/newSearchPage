import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductListModel } from './productListModel';
import { Observable, map } from 'rxjs';
import { UserFetch } from './userFetch';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  apiUrl : string = "https://fakestoreapi.com/products"

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept','application/json');

  httpOptions ={
    headers: this.headers
  }

  constructor( private http: HttpClient) { }

  /**
   * Function for get list of products
   */
  getProductListApi(){
    return this.http.get<ProductListModel[]>(this.apiUrl);
  }

  /**
   * Function for updated user list
   */
  getUpdateUser(id:number): Observable<ProductListModel>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ProductListModel>(url ,this.httpOptions);
  }

  /**
   * Function for update user
   */
  updateUser(user:UserFetch): Observable<ProductListModel>{
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<ProductListModel>(url ,user,this.httpOptions).pipe(map(()=> user));
  }

  /**
   * Function for add product into list 
   */
  addProduct(product:ProductListModel): Observable<ProductListModel>{
    return this.http.post<ProductListModel>(this.apiUrl,product)
  }
}
