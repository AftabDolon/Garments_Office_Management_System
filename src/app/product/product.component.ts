import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Product } from './module/product.module';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild('fileInput') fileInput: any;

  // productForm!: FormGroup;
  // products: Product[] = [];
  // employeesToDisplay: Product[] = [];

  // constructor(private fb: FormBuilder, private employeeService: ServiceService) {
  //   this.productForm = fb.group({});
  //   this.products = [];
  //   this.employeesToDisplay = this.products;
  // }

  // ngOnInit(): void {
  //   // this.employeeForm = this.fb.group({
  //   //   firstname: this.fb.control(''),
  //   //   lastname: this.fb.control(''),
  //   //   birthday: this.fb.control(''),
  //   //   gender: this.fb.control(''),
  //   //   education: this.fb.control(''),
  //   //   company: this.fb.control(''),
  //   //   jobExperience: this.fb.control(''),
  //   //   salary: this.fb.control(''),
  //   // });
  //   this.employeeService.getProduct()
  //     .subscribe((res) => {
  //       for (let emp of res) {
  //         this.products.unshift(emp);
  //       }
  //       this.employeesToDisplay = this.products;
  //     })
  //   console.log(this.employeesToDisplay)
  // }
  // ngAfterViewInit(): void {
  //   // this.buttontemp.nativeElement.click();
  // }

  // addProduct() {
  //   let product: Product = {
  //     brandid: this.brandID.value,
  //     productname: this.productName.value,
  //     productTitle: this.productTitle.value,
  //     productInfo: this.productInfo.value,
  //     productPrice: this.productPrice.value,
  //     profile: this.fileInput.nativeElement.files[0]?.name
  //   }
  //   this.employeeService.postProduct(product)
  //     .subscribe((res) => {
  //       this.products.unshift(res);

  //     })
  // }


  // public get brandID(): FormControl {
  //   return this.productForm.get('brand') as FormControl;
  // }
  // public get productName(): FormControl {
  //   return this.productForm.get('productName') as FormControl;
  // }
  // public get productTitle(): FormControl {
  //   return this.productForm.get('productTitle') as FormControl;
  // }
  // public get productInfo(): FormControl {
  //   return this.productForm.get('productInfo') as FormControl;
  // }
  // public get productPrice(): FormControl {
  //   return this.productForm.get('productPrice') as FormControl;
  // }
  // productForm: Product = {
  //   id: 0,
  //   brandid: '',
  //   productname: '',
  //   productTitle: '',
  //   productInfo: '',
  //   productPrice: '',
  //   profile: ''
  // }
  
  // constructor(private productService: ServiceService, private router: Router) { }

  // ngOnInit(): void {
    
  // }
  // create() {
  //   this.productService.postProduct(this.productForm)
  //     .subscribe(
  //       res => {
  //         Swal.fire("Thank You....", 'Product has been added Successfully', 'success');
  //         this.router.navigate(['/home']);
  //       }, err => { console.log(err); }
  //     )
  // }


  productForm !: FormGroup;

  products: Product[] = [];
  employeesToDisplay: Product[] = [];
  constructor(private fb: FormBuilder, private productService: ServiceService, private router: Router) {
    this.productForm = fb.group({

      id: 0,
      brandId: '',
      productname: '',
      product_title: '',
      product_info: '',
      product_price: '',
      image: ''

    });
    this.products = [];
    this.employeesToDisplay = this.products;
  }

  ngOnInit(): void {
    // this.productForm = this.fb.group({
    //   brandId: this.fb.control(''),
    //   lastname: this.fb.control(''),
    //   birthday: this.fb.control(''),
    //   gender: this.fb.control(''),
    //   education: this.fb.control(''),
    //   company: this.fb.control(''),
    //   jobExperience: this.fb.control(''),
    //   salary: this.fb.control(''),
    // });


    this.productService.getProduct()
      .subscribe((res) => {
        for (let pro of res) {
          this.products.unshift(pro);
        }
        this.employeesToDisplay = this.products;
        
        console.log(this.employeesToDisplay);
      })
      

  }

  addProduct() {
    
    let product: Product = {
      brandId: this.brandId.value,
      productname: this.productName.value,
      product_title: this.productTitle.value,
      product_info: this.productInfo.value,
      product_price: this.productPrice.value,
      image: this.fileInput.nativeElement.files[0]?.name
      
    }

    console.log(product);
    this.productService.postProduct(product)
      .subscribe((res) => {
        this.products.unshift(res);
        console.log(product);
        Swal.fire("Thank You....", 'Product has been added Successfully', 'success');
          this.router.navigate(['/default/home']);
        this.clearForm();
      })
  }
  clearForm(){
    this.brandId.setValue('');
    this.productName.setValue('');
    this.productTitle.setValue('');
    this.productInfo.setValue('');
    this.productPrice.setValue('');
    this.fileInput.nativeElement.value = '';
  }

  public get brandId(): FormControl {
    return this.productForm.get('brandId') as FormControl;
  }

  public get productName(): FormControl {
    return this.productForm.get('productname') as FormControl;
  }
  public get productTitle(): FormControl {
    return this.productForm.get('product_title') as FormControl;
  }
  public get productInfo(): FormControl {
    return this.productForm.get('product_info') as FormControl;
  }
  public get productPrice(): FormControl {
    return this.productForm.get('product_price') as FormControl;
  }

//   showNotification(from, align){
//     const type = ['','info','success','warning','danger'];

//     const color = Math.floor((Math.random() * 4) + 1);

//     $.notify({
//         icon: "notifications",
//         message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

//     },{
//         type: type[color],
//         timer: 4000,
//         placement: {
//             from: from,
//             align: align
//         },
//         template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
//           '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
//           '<i class="material-icons" data-notify="icon">notifications</i> ' +
//           '<span data-notify="title">{1}</span> ' +
//           '<span data-notify="message">{2}</span>' +
//           '<div class="progress" data-notify="progressbar">' +
//             '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
//           '</div>' +
//           '<a href="{3}" target="{4}" data-notify="url"></a>' +
//         '</div>'
//     });
// }
  

}
