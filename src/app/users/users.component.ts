import { Component, ComponentFactoryResolver, OnInit, ViewChild, inject } from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../services/user.service';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { ViewContainer } from '../Directives/viewContainer.directive';

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
  @ViewChild(ViewContainer,{static:false}) container:ViewContainer;

  OnConfirmationObs;

  constructor(private componentFactoryRes:ComponentFactoryResolver){

  }
  ngOnInit(): void {
    this.users=this.userService.users;
  }

  OnDeleteClicked(user:User){
    // this.showConfirmDeleteComp=true;
     this.userToDelete=user;
    this.showConfirmDelete(this.userToDelete);
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

  showConfirmDelete(user:User){
    const confirmDeleteComp=this.componentFactoryRes.resolveComponentFactory(ConfirmDeleteComponent);
    //confirmDeleteComp.create()
    const viewContRef= this.container.viewContainer;
    viewContRef.clear();
    const compRef=viewContRef.createComponent(confirmDeleteComp);

    //pass the data to dynamic component
    compRef.instance.usertoDelete=user;

    this.OnConfirmationObs=compRef.instance.OnConfirmation.subscribe(res=>{
      this.OnConfirmationObs.unsubscribe();
      viewContRef.clear();
      if(res)
      {
      //delete the user
      this.userService.users.splice(this.userService.users.indexOf(this.userToDelete),1);
      }
    else {

    }
    });

  }
}
