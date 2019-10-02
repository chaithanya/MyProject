import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { AuthenticationService } from '@/_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    //constructor(private authenticationService: AuthenticationService) {}
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = localStorage.getItem("userName");
        if (currentUser) {
          //if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: { 
                  'Content-Type' : 'application/json'
                }
            });
        }

        return next.handle(request);
    }
}