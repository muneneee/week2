import { Component, OnInit, } from '@angular/core';
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user:any;
  repos:any;
  username:string;

  constructor(private profileService:ProfileService) { 
    console.log('github component');

  }

  findProfile(){
    console.log('inafanya')
    this.profileService.updateProfile(this.username);
  
    this.profileService.getUser().subscribe(user =>{
      this.user = user;
    });

    this.profileService.getRepos().subscribe(repo =>{  
      this.repos = repo;
    });
  
  }


  

  ngOnInit(){
  }

}
