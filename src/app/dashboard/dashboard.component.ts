import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fullname = localStorage.getItem("fullname");
  image = localStorage.getItem("image");
  allPerson: any = [];
  employee =localStorage.getItem("session");
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.valuGet();
  }
  valuGet(){
    this.api.getTypeRequest(`user/show/${this.employee}`).subscribe((res: any) => {
      console.log(res)
      this.allPerson = res.data;
      })
  }
  
}
