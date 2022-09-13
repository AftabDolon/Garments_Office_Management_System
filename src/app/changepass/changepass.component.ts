import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent implements OnInit {
success:boolean = false;
Form: FormGroup;
  constructor(private fb:FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
      email: localStorage.getItem('session'),
      password: [''],
      
      
    })
  }


onSubmit(){
  this.api.postTypeRequest('user/change', this.Form.value).subscribe((res: any) => {
    
    if (res.status) { 
      alert("Password change Successfully");
      this.success = true;
      this.Form.reset();
      localStorage.clear();
    }else{
      console.log(res);
    }
  })
}

}
