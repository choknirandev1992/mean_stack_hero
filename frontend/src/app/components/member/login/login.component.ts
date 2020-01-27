import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myApp = 'POS';

  constructor() { }

  ngOnInit() {
  }

  // any (default)
  login(LoginForm:NgForm){
      alert(JSON.stringify(LoginForm.value));
  }

  onSayHi(){
     //alert(this.myApp + this.onGetName())
  }

  onGetName(): String{
     return "Chokniran";
  }

}
