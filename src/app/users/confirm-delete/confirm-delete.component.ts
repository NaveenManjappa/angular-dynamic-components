import { Component } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.css'
})
export class ConfirmDeleteComponent {
usertoDelete:User;
}
