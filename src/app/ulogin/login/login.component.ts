import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from "@angular/forms"
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  
  public formGroup !: FormGroup;
public fg!: FormGroup;

  constructor(private _api:ApiService, private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: [''],
      password: [''],
      fullname: [''],
      mobile: [''],
      role: [''],
      image: [''],
      employee_id: [''],
      dateTime: new Date()
    })

    this.fg = this .formBuilder.group({
      email: localStorage.getItem("session"),
      fullname: localStorage.getItem("fullname"),
      employee_id: localStorage.getItem("id"),
      // dateTime: new Date()
    })
    
  }

  //login and signup method for json:

  // login() {
  //   this.http.get<any>("http://localhost:3000/loginUser")
  //     .subscribe(res => {
  //       const user = res.find((a: any) => {
  //         return a.email === this.formGroup.value.email && a.password === this.formGroup.value.password
  //       });
  //       if (user) {
          
  //         localStorage.setItem('session', user.email)
  //         localStorage.setItem('fullname', user.fullname)
  //         localStorage.setItem('image', user.image)
          
  //         alert("Login success !!");
  //         if(user.role==='admin'){
  //           this.formGroup.reset();
  //         this.router.navigate(['/adminpage']);
  //         }else{
  //           this.formGroup.reset();
  //         this.router.navigate(['/default']);
  //         }
          
  //       } else {
  //         alert("username or password is wrong !");
  //       }
  //     }, err => {
  //       alert("Something went wrong !");
  //     })
  //     this.http.post<any>("http://localhost:3000/loginInfo", this.fg.value)
  //     console.log(this.fg.value);
  //       }

//signup method for json:
  // signUp() {
  //   this.http.post<any>("http://localhost:3000/loginUser", this.formGroup.value)
  //     .subscribe(res => {
  //       alert("Signup Successfully");
  //       this.formGroup.reset();
  //       this.router.navigate(['/login']);
  //     }, err => {
  //       alert("Something went wrong!")
  //     }
  //     )
  // }

   //method for mysql:

   login() {
    // console.log('Your form data : ', this.formGroup.value);
     this._api.postTypeRequest('user/login', this.formGroup.value).subscribe((res: any) => {
      
       if (res.status) { 
         console.log(res.data);
           
                   localStorage.setItem('session', res.data.email)
                   localStorage.setItem('fullname', res.data.fullname)
                   localStorage.setItem('image', res.data.image)
                   localStorage.setItem('id', res.data.employee_id)
                   
                   
                   alert("Login success !!");
                   console.log(res.data.role);
                   if(res.data.role==='admin'){
                     
                     this.formGroup.reset();
                   this.router.navigate(['/adminpage']);
                   }else{
                     this.formGroup.reset();
                   this.router.navigate(['/default']);
                   }

                   this._api.postTypeRequest('user/info', this.fg.value).subscribe((res: any) => {
                    console.log(res)
                  })

       }else{
         alert("UserName or Password is Wrong!");
         console.log(res.msg);
       }
     })
     
     
   }
//method for mysql:

signUp() {
  console.log('Your form data : ', this.formGroup.value);
  this._api.postTypeRequest('user', this.formGroup.value).subscribe((res: any) => {
   
    if (res.status) { 
      alert("Signup Successfully");
      this.formGroup.reset();
      this.router.navigate(['/login']);
    }
  })
}
// valueGet(){
//   this._api.postTypeRequest('user/info', this.fg.value).subscribe((res: any) => {
//     console.log(res)
//   })
// }
  
}
