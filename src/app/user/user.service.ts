import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable()
export class UserService {

  constructor() { }

  users: User[] = USERS;

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  createUser(user: User): void {
    user.id = Math.max.apply(null, this.users.map((e) => {
      return e.id;
    })) + 1;
    this.users.push(user);
  }

  checkLogin(name: string, pass: string): User {
    for (let i = 0; i < this.users.length; i++) {
      if (name === this.users[i].userName && pass === this.users[i].password) {
        return this.users[i];
      }
    }
    return undefined;
  }

}
