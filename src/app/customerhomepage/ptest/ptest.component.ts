import { Component, OnInit } from '@angular/core';
import { customerResponse } from 'src/app/shared/customer.service/model/CustomerResponse';
import { CustomerService } from 'src/app/shared/customer.service/customer.service';

@Component({
  selector: 'app-ptest',
  templateUrl: './ptest.component.html',
  styleUrls: ['./ptest.component.css']
})
export class PtestComponent implements OnInit {

  customerresponse: customerResponse;
  cols: any;
  selectedItems = [];
  updatedColumns = [];
  isupdateSuccess: boolean =false;
  constructor(private customerservice: CustomerService) { }

  ngOnInit() {
    this.loadCustomers();
    this.cols = [
      {field: 'rowId', header: 'row ID'},
      {field: 'customerid', header: 'Customer ID'},
      {field: 'customername', header: 'Customer Name'},
      {field: 'servicetype', header: 'Service Type'}
  ];
  }

  loadCustomers(){
    this.customerservice.getCustomers().
    subscribe(data => {
      this.customerresponse = data;
      //console.log('this.customerresponse; ' + JSON.stringify(this.customerresponse));
    })
  }
  onEdit(event){ }

  onEditComplete(event) { 
    console.log(event.data);
    this.updatedColumns.push(event.data);
  }

  rowClick($event) {
    const rowData = $event.data;
    rowData.selected = !rowData.selected;
    this.selectedItems = [];
    this.selectedItems.push($event);
    console.log(this.selectedItems);
  }
  saveCustomer() {
    let param = {
      customerid: this.updatedColumns[0].customerid,
	    customername  : this.updatedColumns[0].customername,
	    billingsiteid: this.updatedColumns[0].billingsiteid,
      servicetype: this.updatedColumns[0].servicetype,
      rowId : this.updatedColumns[0].rowId
    };
    this.customerservice.updateCustomerforPrimeNG(param).
    subscribe( data => {
        this.customerresponse = data;
        console.log(this.customerresponse.successMessage);
        if(this.customerresponse.status){
          this.isupdateSuccess = true;
          setTimeout(() => {this.isupdateSuccess = false;},5000);
        }
    })
  }
  highlightSelectedRow(rowData: any, rowIndex: number) {
      return (rowData.selected) ? 'rowSelected' : '';
  }
  
}
