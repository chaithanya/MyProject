import { Component, OnInit } from '@angular/core';
import { CustomerRequest } from 'src/app/shared/customer.service/model/CustomerRequest';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/shared/customer.service/customer.service';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  iscreateFailed: boolean;
  iscreateSuccess: boolean;
  customerrequest = new CustomerRequest();
  constructor(private route: ActivatedRoute, private customerservice:CustomerService,
    private location:Location) { }

  ngOnInit() {
  }
  createCustomer(myform: NgForm){
    this.customerservice.createCustomer(this.customerrequest)
    .subscribe(data => {
      if (data.status){
        this.iscreateFailed = false;
        this.iscreateSuccess = true;
        myform.form.reset();
        setTimeout(() => {this.iscreateSuccess = false;},5000);  
      }
      else {
        this.iscreateFailed = true;
      }
    } //, (error) => {console.log(error.message);}
    )

  }
  onCancel(){
    this.location.back();
  }

}
