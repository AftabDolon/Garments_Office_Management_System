import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-activitylog',
  templateUrl: './activitylog.component.html',
  styleUrls: ['./activitylog.component.scss']
})
export class ActivitylogComponent implements OnInit {
  allData: any = [];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.showUser();
  }
  showUser(){
    this.api.getTypeRequest('activity/show').subscribe((res: any) => {

this.allData = res.data;
console.log(this.allData)
  })
  }
}
