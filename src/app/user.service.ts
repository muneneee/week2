import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username = 'muneneee';
  private client_id = 'c888e98887e9abed04dd';
  private client_secret ='27774024ffe4af2e0ac45a012cf9a8d71f4ce8e4';

  constructor(private http: HttpClient) {
    console.log('Github service');
  }


  getUser(){
    return this.http.get('https://api.github.com/users/muneneee')
    .pipe(map(res => res ));
  }
    

  getRepos(){
    return this.http.get('https://api.github.com/users/muneneee/repos')
    .pipe(map(res => res ));
  }

}
