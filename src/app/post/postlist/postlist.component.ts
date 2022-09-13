import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { post } from './post.module';
import { PostsService } from '../posts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit, OnDestroy {
  postData: post[] = [];
   postSub: Subscription;
// posts=[
//   {title:'Angular 12 Tutorial', content:'This is Angular project'},
//   {title:'Angular 13 Tutorial', content:'This is Angular project'},
//   {title:'Angular 14 Tutorial', content:'This is Angular project'},
//   {title:'Angular 15 Tutorial', content:'This is Angular project'},
//   {title:'Angular 16 Tutorial', content:'This is Angular project'}
// ]
  posts: post[] = [];
  
  constructor(public ps: PostsService) { }

  ngOnInit(): void {
    // this.posts = this.ps.getAll();
    this.postSub = this.ps.getUpdateListner().subscribe((posts:post[])=>{
      this.postData = posts;
    })

    this.ps.getMessage().subscribe((res)=>{
      this.postData = res
      this.postSub = this.ps.getUpdateListner().subscribe((posts:post[])=>{
          this.postData = posts;
        })
      console.log(this.postData);
    })
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
  // deleteEmployeeClicked(){
  //   this.onRemoveEmployee.emit(this.employee.id);
  // }

  // editEmployeeClicked(){
  //   this.onEditEmployee.emit(this.employee.id)
  // }
  // removeEmployee(event: any) {
  //   this.postData.forEach((val, index) => {
  //     if (val.id === parseInt(event)) {
  //       this.ps.deleteEmployee(event).subscribe((res) => {
  //         this.postData.splice(index, 1);
  //         Swal.fire("Thank You....", 'Message has been deleted Successfully', 'success')
  //       });
  //     }
  //   });
  // }
  

}
