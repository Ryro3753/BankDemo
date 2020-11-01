import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { BankDemoHomeComponent } from './pages/bank-demo-home/bank-demo-home.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component'
import { BankDemoLoginComponent } from './pages/bank-demo-login/bank-demo-login.component';
import { BankDemoMyAccountComponent } from './pages/bank-demo-my-account/bank-demo-my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    BankDemoHomeComponent,
    TopBarComponent,
    BankDemoLoginComponent,
    BankDemoMyAccountComponent,
    BottomBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
