import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { interval, Subject, Subscription, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-getattendance',
  templateUrl: './getattendance.component.html',
  styleUrls: ['./getattendance.component.scss']
})
export class GetattendanceComponent implements OnInit, OnDestroy {
  dateTime = new Date();
  formGroup !: FormGroup;
  success: boolean =false;
  private $inActive = new Subject<boolean>();
  constructor(private fb: FormBuilder, private _api:ApiService){
    this.formGroup = this.fb.group({
      
      employee_id: [''],
      
      
    })
  }
  ngOnInit(): void {
    this.startClock();
  }

  startClock() {
    interval(1).pipe(takeUntil(this.$inActive)).subscribe(data => {
      this.dateTime = new Date();
    })
  }
  ngOnDestroy(): void {
    this.$inActive.next(true);
    this.$inActive.unsubscribe();
  }

  addInAm(){
    this.attendance();
    Swal.fire("Thank You....", 'Your In Punch Attendance has been recorded Successfully.', 'success');
    this.success = true;
    this.clearForm();
  }
  
  addOutAm(){
    this.attendanceUpdate();
    Swal.fire("Thank You....", 'Your Out Punch Attendance has been recorded Successfully.', 'success');
    this.success = true;
  }
  addInPm(form: NgForm){
    Swal.fire("Thank You....", 'Your Attendance has been recorded Successfully.', 'success');
    form.resetForm();
    this.success = true;
  }
  addOutPm(form: NgForm){
    Swal.fire("Thank You....", 'Your Attendance has been recorded Successfully.', 'success');
    
    this.success = true;
    this.clearForm();
  }
  clearForm(){
    // this.brandId.setValue('');
  }
  
  // public get employee(): FormControl {
  //   return this.formGroup.get('employee_id') as FormControl;
  // }

  attendance() {
    console.log('Your form data : ', this.formGroup.value);
    this._api.postTypeRequest('attendance', this.formGroup.value).subscribe((res: any) => {
     
      // if (res.status) { 
      //   alert("Signup Successfully");
      //   this.formGroup.reset();
      //   this.router.navigate(['/login']);
      // }
      console.log(res)
    })
  }
  attendanceUpdate(){
    console.log('Your form data : ', this.formGroup.value);
    this._api.postTypeRequest('attendance/change', this.formGroup.value).subscribe((res: any) => {
      
    //   // if (res.status) { 
    //   //   alert("Password change Successfully");
    //   //   this.success = true;
    //   //   this.Form.reset();
    //   //   localStorage.clear();
    //   }else{
    //     console.log(res);
      // }
      
    })
  }
  
}
