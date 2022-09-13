import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  name: any = [];
  allPerson: any = [];
  button:boolean = false;
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

    userDeactive(){
      this.button =true;
    }
    userActive(){
      this.button =true;
    }

}
