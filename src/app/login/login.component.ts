import { Component, OnInit, OnChanges } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthRequest } from '../shared/auth.service/model/AuthRequest';
import { AuthService } from '../shared/auth.service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authRequest = new AuthRequest();
  isLoginSuccess: boolean = false;
  constructor(private router: Router, private authService: AuthService) {  
  console.log('in constructor');
}

  ngOnInit() {
    console.log('in ng On Init');
  }
  loginCheck(myform: NgForm){
    let userName = this.authRequest.loginname;
    /*if(this.firstName == "admin" && this.lastName == "admin") {
      this.router.navigate(['/customerhomepage']);
      localStorage.setItem("userName", this.firstName);
    }
    else{
      console.log('Authentication Failed!');
      myform.reset();
    }*/
    this.authService.validationLogin(this.authRequest)
    
    .subscribe((data) => {
      this.authRequest = data;
      if(this.authRequest.status == true) {
        localStorage.setItem("userName", userName);
          this.router.navigate(['/customerhomepage']);
          

      } else {
        this.isLoginSuccess = true;
        myform.reset();
      }

    })
  }

}
