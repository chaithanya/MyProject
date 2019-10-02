import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerService } from '../shared/customer.service/customer.service';
import { customerResponse } from '../shared/customer.service/model/CustomerResponse';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customerhomepage',
  templateUrl: './customerhomepage.component.html',
  styleUrls: ['./customerhomepage.component.css']
})
export class CustomerhomepageComponent implements OnInit, OnDestroy {
  term:any;
  p: number = 1;
  customerresponse: customerResponse;

  private retrieveCustomers: Subscription;
  constructor(private customerservice: CustomerService) { }

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers(){
    this.retrieveCustomers = this.customerservice.getCustomers().
    subscribe(data => {
      this.customerresponse = data;
      //console.log('this.customerresponse; ' + JSON.stringify(this.customerresponse));
    })
  }
  onDelete(value) {
    console.log('value: ' + value)
  }
  ngOnDestroy() {
    this.retrieveCustomers ? this.retrieveCustomers.unsubscribe() : '';
  }

}
