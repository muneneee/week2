import { Component, OnInit, } from '@angular/core';
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user:any;
  
  

  constructor(private profileService:ProfileService) { 
    console.log('github component');

    this.profileService.getUser().subscribe(user =>{
      //console.log(user);
      this.user = user;
    });
  }

  

  ngOnInit(){
  }

}
