import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myApp = 'POS';

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    if(this.authService.isLogin()){
       this.router.navigate(["/stock"]);
    }
  }

  // any (default)
  login(LoginForm:NgForm){
      this.authService.login("fjfjfjfjfpsefsdf");
  }

  onSayHi(){
     //alert(this.myApp + this.onGetName())
  }

  onGetName(): String{
     return "Chokniran";
  }

}
