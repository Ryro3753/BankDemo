import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankDemoHomeComponent } from './pages/bank-demo-home/bank-demo-home.component';
import { BankDemoLoginComponent } from './pages/bank-demo-login/bank-demo-login.component';
import { BankDemoMyAccountComponent } from './pages/bank-demo-my-account/bank-demo-my-account.component';

const routes: Routes = [
  {path:'Home', component:BankDemoHomeComponent},
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  {path:'Login', component:BankDemoLoginComponent},
  {path:'MyAccount', component:BankDemoMyAccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
