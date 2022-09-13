import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  formGroup: FormGroup;
image: string = '';
  onFileSelected(event) {

         this.image = event.target.files[0].name;
       console.log(this.image)
  }


  constructor(private formBuilder:FormBuilder, private _api:ApiService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      employee_id: [''],
      fullname: [''],
      email: [''],
      mobile: [''],
      password: [''],
      title: [''],
      department: [''],
      // image: [this.fileInput.nativeElement[0]?.name],
      image: [this.image]
     
      // about: [''],
    })
    console.log(this.image)
  }

  userAdd() {
    console.log('Your form data : ', this.formGroup.value);
    this._api.postTypeRequest('user/adduser', this.formGroup.value).subscribe((res: any) => {
     
      // if (res.status) { 
      //   alert("Signup Successfully");
      //   this.formGroup.reset();
      //   this.router.navigate(['/login']);
      // }
      console.log(res.data)
      Swal.fire("Thank You....", 'User has been added Successfully', 'success');
    })
  }

}
