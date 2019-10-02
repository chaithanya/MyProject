import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private http: Http) { }

  public static handleError(error: HttpErrorResponse) : Observable<never> {
    if (error.error instanceof ErrorEvent) {
        console.error('An error occured on the client-side:', error.error.message);
        return throwError(`An Error occured on the client side. Error message: ${error.error.message}`)
    }
    else {
      console.error(`Backend returned code ${error.status}, body was: ${JSON.stringify(error)}`);
      return throwError(`Backend returned an error. Status : ${error.status}. Message:  ${error.message} Error: ${error.error.message}`)
    }
  }
}
