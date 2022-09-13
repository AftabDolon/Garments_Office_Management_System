import { Component, OnInit } from '@angular/core';

import { Product } from '../product/module/product.module';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product: Product[] = [];

  constructor( private myService: ServiceService) { }

  ngOnInit(): void {
this.myService.getProduct().subscribe((res)=>{
  this.product = res
  console.log(this.product);
})


  }



}
