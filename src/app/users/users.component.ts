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
  showConfirmDeleteComp:boolean=true;
  userService=inject(UserService);

  ngOnInit(): void {
    this.users=this.userService.users;
  }

}
