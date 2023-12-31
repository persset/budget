import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IncomeExpensesComponent } from './income-expenses/income-expenses.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent, title: 'Signup' },
  {
    path: 'income',
    component: IncomeExpensesComponent,
    title: 'Income & Expenses',
  },
  { path: 'profile', component: ProfileComponent, title: 'Profile' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
