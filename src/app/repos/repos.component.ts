import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos:any;
  username:string;


  constructor(private profileService:ProfileService) { 
    console.log('github component');

  }

  findProfile(){

    this.profileService.getRepos().subscribe(repo =>{  
      this.repos = repo;
    });
  
  }


  ngOnInit(): void {
  }

}
