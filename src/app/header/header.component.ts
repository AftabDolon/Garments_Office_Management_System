import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  fullname = localStorage.getItem("fullname");
  image = localStorage.getItem("image");
  Email = localStorage.getItem("session");
  employee= localStorage.getItem("id");
  constructor(private api: ApiService,private router: Router, private _auth: AuthService, ) {}

  ngOnInit(): void {
    
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  valuGet(){
    this.api.getTypeRequest(`user/infoupdate/${this.employee}`).subscribe((res: any) => {
      console.log(res)
      })
  }
  signOut(){
    // localStorage.clear();
 this.api.getTypeRequest(`user/inactive/${this.Email}`).subscribe((res: any) => {
     
      if (res.status) { 
        this._auth.clearStorage()
    this.router.navigate(['/login']);
 }
    }) 
  }
  
  
}
