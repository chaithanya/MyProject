import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  validationLogin(authRequest): Observable<any> {
    return this.http.post("http://localhost:8081/fact/api/auth",authRequest)
    //return this.http.post("http://localhost:8080/fact/api/auth",authRequest)
    .map((res : Response) => {
      return res;
    })
  }
}
