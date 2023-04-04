import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {JwtHelperService} from '@auth0/angular-jwt';

import {UserService} from './user.service';
import {ToastComponent} from '../shared/toast/toast.component';
import {User} from '../shared/models/user.model';

@Injectable()
export class AuthService {
  loggedIn = false;
  currentUser: User = new User();

  constructor(private userService: UserService,
              private router: Router,
              private jwtHelper: JwtHelperService,
              public toast: ToastComponent) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  login(emailAndPassword: object): void {
    this.userService.login(emailAndPassword).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        console.log(decodedUser)
        this.setCurrentUser(decodedUser);
        this.loggedIn = true;
        this.router.navigate(['/math-rules']);
      },
      error: error => this.toast.setMessage('Неверный логин или пароль!', 'danger')
    });
  }


  decodeUserFromToken(token: string) {
    return this.jwtHelper.decodeToken(token);
  }

  setCurrentUser(decodedUser: any): void {
    this.loggedIn = true;
    this.currentUser._id = decodedUser._id;
    this.currentUser.username = decodedUser.username;
  }
  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.currentUser = new User();
    this.router.navigate(['/login']);
  }
}
