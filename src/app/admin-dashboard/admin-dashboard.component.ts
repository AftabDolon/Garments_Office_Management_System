import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  fileName= 'ExcelSheet.xlsx';
  
  allPerson: any = [];
    constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.showUser();
  }

  


  showUser(){
    this.api.getTypeRequest('user').subscribe((res: any) => {
this.allPerson = res.data;
console.log(this.allPerson)

  })

  }
}
