import { Component } from '@angular/core';
import { ProfileService } from './profile.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:string[]
  
  

  constructor(private profileService:ProfileService) { }

  getUsers(){

    this.profileService.getData().subscribe((data)=>{
      this.users = data
      
    })

  }
}
