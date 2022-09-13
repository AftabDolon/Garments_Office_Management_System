import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { post } from './postlist/post.module';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: post[] = [];
  private postUpdate = new Subject<post[]>();
  baseUrl = 'http://localhost:3000/mess';
  getUpdateListner(){
    return this.postUpdate.asObservable();
  }
    constructor(private http: HttpClient) { }
    addPost(title:string, content:string, dateTime:any){
      const post: post = {title:title, content: content, dateTime: new Date()};
      this.posts.push(post);
      this.postUpdate.next([...this.posts]);
    }
  
    getAll(){
      return [...this.posts];
      
    }
    postMessage(postmes: post){
      return this.http.post<post>(this.baseUrl, postmes);
    }
    getMessage(){
      return this.http.get<post[]>(this.baseUrl);
    }
    deleteEmployee(id: number){
      return this.http.delete<post>(`http://localhost:3000/mess/${id}`);
    }
}
