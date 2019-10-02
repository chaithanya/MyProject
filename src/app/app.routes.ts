import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomerhomepageComponent } from './customerhomepage/customerhomepage.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { CreateCustomerComponent } from './customerhomepage/create-customer/create-customer.component';
import { ViewCustomerComponent } from './customerhomepage/view-customer/view-customer.component';
import { PtestComponent } from './customerhomepage/ptest/ptest.component';
import { ReactiveloginformComponent } from './reactiveloginform/reactiveloginform.component';
import { ParentComponent } from './parent/parent.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'customerhomepage', component:CustomerhomepageComponent},
    {path:'userhomepage', component:UserhomepageComponent},
    {path:'createcustomer', component:CreateCustomerComponent},
    {path:'ptest', component:PtestComponent},
    {path:'viewcustomer/:ID', component:ViewCustomerComponent},
    {path:'reactiveloginform', component: ReactiveloginformComponent},
    {path:'parent', component: ParentComponent}
    //{path: '**', component:PagenotfoundComponent}
    ];
    
    @NgModule({
        imports:[RouterModule.forRoot(appRoutes, {useHash: true})],
        //imports:[RouterModule.forRoot(appRoutes, {useHash: true, enableTracing: true})],
        exports:[RouterModule]
    })
    
    export class AppRouting {}