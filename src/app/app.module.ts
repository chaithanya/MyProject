import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRouting } from './app.routes';
import { RegisterComponent } from './register/register.component';
import { ReverseStrPipe } from './shared/pipes/reverse-str.pipe';
import { CustomerhomepageComponent } from './customerhomepage/customerhomepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { CustomerService } from './shared/customer.service/customer.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/services/jwt-interceptor.service';
import { CreateCustomerComponent } from './customerhomepage/create-customer/create-customer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ViewCustomerComponent } from './customerhomepage/view-customer/view-customer.component';
import { ErrorService } from './shared/errors/error.service';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PtestComponent } from './customerhomepage/ptest/ptest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule } from 'primeng/primeng';
import { AuthService } from './shared/auth.service/auth.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveloginformComponent } from './reactiveloginform/reactiveloginform.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AnimateComponent } from './animate/animate.component'; 
import { Constant } from './shared/common/constant';
import { HighlightDirective } from './shared/directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ReverseStrPipe,
    CustomerhomepageComponent,
    HeaderComponent,
    FooterComponent,
    UserhomepageComponent,
    CreateCustomerComponent,
    ViewCustomerComponent,
    PtestComponent,
    ReactiveloginformComponent,
    ParentComponent,
    ChildComponent,
    AnimateComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, AppRouting, HttpClientModule, NgxPaginationModule, Ng2SearchPipeModule,
    HttpModule, AngularFontAwesomeModule, DataTableModule, NgbModule, ReactiveFormsModule
  ],
  providers: [CustomerService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    , ErrorService, AuthService, Constant],
  bootstrap: [AppComponent]
})
export class AppModule { }
