import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third-party odules
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
    ]
  }
];

const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyDXJVNPwML8OOgMrTq5GakmAuv04ITGKAk',
  authDomain: 'fitness-app-17738.firebaseapp.com',
  databaseURL: 'https://fitness-app-17738-default-rtdb.firebaseio.com',
  projectId: 'fitness-app-17738',
  storageBucket: 'fitness-app-17738.appspot.com',
  messagingSenderId: '608595512811',
  appId: '1:608595512811:web:76b2c9a6202a2dfce49dae',
  measurementId: 'G-F40MBFM12H'
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}
