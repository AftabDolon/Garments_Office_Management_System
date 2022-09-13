import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee/module/employee.module';
import { Product } from './product/module/product.module';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl = 'http://localhost:3000/posts';
  baseUrl2 = 'http://localhost:3000/product';
employee:Employee [] = [];
  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get<Employee[]>(this.baseUrl);
  }
  getProduct(){
    return this.http.get<Product[]>(this.baseUrl2);
  }

  postEmployee(employee: Employee){
    return this.http.post<Employee>(this.baseUrl, employee);
  }
  postProduct(product: Product){
    return this.http.post<Product>(this.baseUrl2, product);
  }

  deleteEmployee(id: string){
    return this.http.delete(`http://localhost:3000/posts/${id}`);
  }
}
