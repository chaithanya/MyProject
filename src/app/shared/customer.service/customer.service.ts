import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import {Observable} from 'rxjs/Rx';
import { ErrorService } from '../errors/error.service';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  constructor(private http:HttpClient, private errorService: ErrorService) { }

  getCustomers():Observable<any>{
    return this.http.get("http://localhost:8081/fact/api/customers")
    //return this.http.get("http://localhost:8080/fact/api/customers")
    .map((res: Response) => { 
      return res;
    })
  }

  createCustomer(customer): Observable<any>{
    let url = "http://localhost:8081/fact/api/createCustomer";
    return this.http.post(url,customer)
        .map( (res: Response) => {
          return res;
    }) 
    //.catch(this.handleError);
  }

  loadCustomersById(id): Observable<any>{
    let url = "http://localhost:8081/fact/api/getCustomerById/?id=" + id ;
    return this.http.get(url)
    .map((res: Response) => {
      return res;
      
    })
  }
  updateCustomer(customer): Observable<any>{
    let url = "http://localhost:8081/fact/api/updateCustomer";
    return this.http.post(url, customer)
        .map( (res: Response) => {
      return res;
    }) 
    //.catch(this.handleError);
}

updateCustomerforPrimeNG(customer): Observable<any>{
  let url = "http://localhost:8081/fact/api/updateCustomer";
  return this.http.post(url, customer)
      .map( (res: Response) => {
    return res;
  }) 
  
}


  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        //const err = body.error || JSON.stringify(body);
        const err = JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
