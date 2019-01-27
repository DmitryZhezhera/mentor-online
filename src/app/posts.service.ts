import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    // return this.http.get('/posts/').map((posts) => {
    //   return posts;
    // });
  }
}
