import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveloginform',
  templateUrl: './reactiveloginform.component.html',
  styleUrls: ['./reactiveloginform.component.css']
})
export class ReactiveloginformComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  isSubmitted  =  false;
  loginForm: FormGroup;
  
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      loginname: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
  }

  loginCheck() {
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    console.log(JSON.stringify(this.loginForm.value));
    console.log(this.loginForm.value);
  }

   get f() { return this.loginForm.controls; }

}
