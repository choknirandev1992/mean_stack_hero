import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // DI: dependedcy injection
  constructor(
    private router: Router,
    private authService: AuthService,
    private networkService: NetworkService
  ) {

  }

  ngOnInit() { }

  register(registerForm: NgForm) {
      this.networkService.register(registerForm.value).subscribe(
      result => {
        this.router.navigate(["/login"]);
      },
      error => {
        alert(error.error.message)
      }
    )
  }

}
