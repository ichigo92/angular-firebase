import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';

import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authServuce: AuthService
  ) {}

  canActivate() {
    return this.authServuce.authState
      .pipe(map((user) => {
        if (!user) {
          this.router.navigate(['/auth/login']);
        }
        return !!user;
      }));
  }
}
