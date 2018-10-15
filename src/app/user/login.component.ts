import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  checkLogin(): void {
    if (this.userName !== undefined && this.password !== undefined) {
      this.user = this.userService.checkLogin(this.userName, this.password);
      if (this.user !== undefined) {
        this.router.navigate(['']);
      } else {
        alert('Incorrect username or password');
      }
    }
  }

}
