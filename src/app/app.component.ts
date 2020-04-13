import { Component } from '@angular/core';
import { ProfileService } from './profile.service'
import { UserInterface } from './user-interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
  
  users:UserInterface[]
  


  constructor(private profileService:ProfileService) { }

  getUsers(){

    this.profileService.getData().subscribe((data)=>{
      console.log(data)
      this.users = data
      
    })

  }
}
