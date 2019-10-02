import { Component, OnInit } from '@angular/core';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class RegisterComponent implements OnInit {
  country: string;
  result: string;
  model1: Date;
  model2: Date;
  emailaddress: any;
  object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  map = new Map([[2, 'foo'], [1, 'bar']]);

  get today() {
    return new Date();
  }
  countries = ['India','Australia','America','Switzerland','UK','Canada'];
  constructor() { }

  ngOnInit() {
    this.result = "Male";
  }

}
