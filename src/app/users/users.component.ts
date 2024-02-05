import { Component, OnInit, inject } from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users:User[]=[];
  showConfirmDeleteComp:boolean=false;
  userService=inject(UserService);
  userToDelete:User;

  ngOnInit(): void {
    this.users=this.userService.users;
  }

  OnDeleteClicked(user:User){
    this.showConfirmDeleteComp=true;
    this.userToDelete=user;
  }
  OnUserConfirmation(value:boolean){
    this.showConfirmDeleteComp=false;
    if(value)
    {
      //delete the user
      this.userService.users.splice(this.userService.users.indexOf(this.userToDelete),1);
    }
    else {

    }
  }
}
