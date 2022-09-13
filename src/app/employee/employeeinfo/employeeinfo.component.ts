import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../module/employee.module';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.scss']
})
export class EmployeeinfoComponent implements OnInit, AfterViewInit {
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('addEmployeeButton') addEmployeeButton: any;
  title = 'employee';

  employeeForm!: FormGroup;
  employees: Employee[] = [];
  employeesToDisplay: Employee [] = [];

  educationOptions = [
    '10th pass',
    'Diploma',
    'Graduate',
    'Post Graduate',
    'PhD'
  ];

  constructor(private fb: FormBuilder, private employeeService: ServiceService){
    this.employeeForm = fb.group({});
    this.employees = [];
    this.employeesToDisplay = this.employees;
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      birthday: this.fb.control(''),
      gender: this.fb.control(''),
      education: this.fb.control(''),
      company: this.fb.control(''),
      jobExperience: this.fb.control(''),
      salary: this.fb.control(''),
    });
    this.employeeService.getEmployees()
    .subscribe((res)=>{
      for (let emp of res) {
        this.employees.unshift(emp);
      }
      this.employeesToDisplay = this.employees;
    })
    
  }
  ngAfterViewInit(): void {
    // this.buttontemp.nativeElement.click();
  }

  addEmployee(){
    let employee: Employee = {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      birthdate: this.BirthDay.value,
      gender: this.Gender.value,
      education: this.Education.value,
      company: this.Company.value,
      jobExperience: this.JobExperience.value,
      salary: this.Salary.value,
      profile: this.fileInput.nativeElement.files[0]?.name
    }
    this.employeeService.postEmployee(employee)
    .subscribe((res)=>{
      this.employees.unshift(res);
      this.clearForm();
    })
  }

  editEmployee(event: any){
this.employees.forEach((val, ind)=>{
  if(val.id === event){
    this.setForm(val);
  }
});
this.removeEmployee(event);
this.addEmployeeButton.nativeElement.click();
  }
  setForm(emp: Employee){
    this.FirstName.setValue(emp.firstname);
    this.LastName.setValue(emp.lastname);
    this.BirthDay.setValue(emp.birthdate);
    this.Gender.setValue(emp.gender);
    // // let educationIndex =0;
    // // this.educationOptions.forEach((val, index)=>{
    // //   if(val === emp.education) educationIndex = index;
    // // });
    // this.Education.setValue(educationIndex);
    this.Education.setValue(emp.education);
    this.Company.setValue(emp.company);
    this.JobExperience.setValue(emp.jobExperience);
    this.Salary.setValue(emp.salary);
    this.fileInput.nativeElement.value = '';
  }

  searchEmployees(event: any){
    let filteredEmployees: Employee[] = [];

    if(event === ''){
      this.employeesToDisplay = this.employees;
    }else{
      filteredEmployees = this.employees.filter((val, index)=>{
        let targetkey = val.firstname.toLowerCase() + '' + val.lastname.toLowerCase();
        let searchkey = event.toLowerCase();
        return targetkey.includes(searchkey);
      });
      this.employeesToDisplay = filteredEmployees;
    }
  }
  removeEmployee(event: any) {
    this.employees.forEach((val, index) => {
      if (val.id === parseInt(event)) {
        this.employeeService.deleteEmployee(event).subscribe((res) => {
          this.employees.splice(index, 1);
          Swal.fire("Thank You....", 'Employee has been deleted Successfully', 'success')
        });
      }
    });
  }

  clearForm(){
    this.FirstName.setValue('');
    this.LastName.setValue('');
    this.BirthDay.setValue('');
    this.Gender.setValue('');
    this.Education.setValue('');
    this.Company.setValue('');
    this.JobExperience.setValue('');
    this.Salary.setValue('');
    this.fileInput.nativeElement.value = '';
  }

  public get FirstName(): FormControl{
    return this.employeeForm.get('firstname') as FormControl;
  }
  public get LastName(): FormControl{
    return this.employeeForm.get('lastname') as FormControl;
  }
  public get BirthDay(): FormControl{
    return this.employeeForm.get('birthday') as FormControl;
  }
  public get Gender(): FormControl{
    return this.employeeForm.get('gender') as FormControl;
  }
  public get Education(): FormControl{
    return this.employeeForm.get('education') as FormControl;
  }
  public get Company(): FormControl{
    return this.employeeForm.get('company') as FormControl;
  }
  public get JobExperience(): FormControl{
    return this.employeeForm.get('jobExperience') as FormControl;
  }
  public get Salary(): FormControl{
    return this.employeeForm.get('salary') as FormControl;
  }
}
