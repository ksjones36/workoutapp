import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User;
  confirmPassword: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addUser() {
    if (this.user.userName && this.user.password && this.user.password === this.confirmPassword) {
      this.userService.createUser(this.user);
      this.router.navigate(['/login']);
    } else {
      alert('Error creating account');
    }
  }

}
