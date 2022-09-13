import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { NgForm } from '@angular/forms';
import { post } from './postlist/post.module';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: post[] = [];
  constructor(private ps: PostsService) { }

  ngOnInit(): void {
  }

  onPostData(form: NgForm) {
    if (!form.invalid) {
      this.ps.addPost(form.value.title, form.value.content, form.value.dateTime);
      form.resetForm();
    } else {
      return
    }
  }
  
addmess(form: NgForm){
  let postdata: post = {
        title: form.value.title,
        content: form.value.content,
        dateTime: new Date()
        
  }
  console.log(postdata)
  this.ps.postMessage(postdata)
    .subscribe((res)=>{
      this.posts.unshift(res);
  })
    Swal.fire("Thank You....", 'Message has been sent Successfully', 'success');
    form.resetForm();
}
}
