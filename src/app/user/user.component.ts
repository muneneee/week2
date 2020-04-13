import { Component, OnInit, } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  user:any;
  repos:any;
  username:string;

  constructor(private userService:UserService) { 
    console.log('user component');


    this.userService.getUser().subscribe(user =>{
      this.user = user;
    });

    this.userService.getRepos().subscribe(repo =>{  
      this.repos = repo;
    });
  }

  

  

  ngOnInit(){
  }

}
