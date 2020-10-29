import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public myAccount = false;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.loggedIn();
  }


  homeClick(){
    this.route.navigateByUrl('/Home');
  }

  loginClick(){
    this.route.navigateByUrl('/Login');
  }
  
  myAccountClick(){
    this.route.navigateByUrl('/MyAccount');
  }

  loggedIn(){
    this.myAccount = true;
  }


}

