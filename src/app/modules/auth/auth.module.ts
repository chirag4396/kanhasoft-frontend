import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    RegistrationComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
    ])
  ]
})
export class AuthModule { }
