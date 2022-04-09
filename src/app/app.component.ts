import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { Store } from 'store';

import { AuthService, User } from '../auth/shared/services/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private authServuce: AuthService
  ) {}

  ngOnInit() {
    this.subscription = this.authServuce.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async onLogout() {
    await this.authServuce.logoutUser();
    this.router.navigate(['/auth/login']);
  }
}
