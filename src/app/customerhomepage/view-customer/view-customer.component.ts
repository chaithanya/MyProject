import { Component, OnInit } from '@angular/core';
import { CustomerRequest } from 'src/app/shared/customer.service/model/CustomerRequest';
import { CustomerService } from 'src/app/shared/customer.service/customer.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  isupdateFailed:boolean;
  isupdateSuccess:boolean;
  
  customerrequest = new CustomerRequest();
  id: any;
  sub: any;

  constructor(private route: ActivatedRoute, private customerservice:CustomerService,
    private location:Location) {
      this.sub = this.route.params.subscribe(params => {
        this.id = params['ID'];
      });
      console.log('ID: ' + this.id);
     }
  

  ngOnInit() {
    this.loadCustomersById(this.id);
  }

  loadCustomersById(id){
    this.customerservice.loadCustomersById(id)
    .subscribe(data => {
      this.customerrequest = data[0];
      console.log('this.viewcustomerRequest' + JSON.stringify(this.customerrequest));
    })

  }
  onCancel() {
    this.location.back();
  }

  updateCustomer(myform: NgForm){
    this.customerservice.updateCustomer(this.customerrequest)
    .subscribe(data => {
      if(data.status){
        this.isupdateFailed = false;
        this.isupdateSuccess = true;
        setTimeout(() => {this.isupdateSuccess = false;},5000);
      }
      else {
        this.isupdateFailed = true;
      }
          //myform.form.markAsUntouched();
          //window.scrollTo(0,0);
    })

  }

}
