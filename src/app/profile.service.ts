import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username = 'muneneee';
  private client_id = '97629a10a4b83d65f143';
  private client_secret ='4dc7ecdac521d116675477560f9fcb4b23122893';

  constructor(private http: HttpClient) {
    console.log('Github service');
  }


  getUser(){
    return this.http.get('https://api.github.com/users/'+this.username)
    .pipe(map(res => res ));
  }
    

}
