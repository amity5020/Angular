import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { Repository, ModalContentComponent, SignOutComponent } from "./components/Repository";
//import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalModule, BsDatepickerModule, ProgressbarModule, AccordionModule } from 'ngx-bootstrap'
import { EmployeeCreate } from '../app/components/home/EmployeeCreate.component';
import { EmployeeUpdate } from '../app/components/home/EmployeeUpdate.component';
import { LoaderService } from './components/LoaderService';
@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        EmployeeCreate,
        EmployeeUpdate,
       // BsModalRef,
       // BsModalService
    ], providers: [
        Repository,
        LoaderService
        ],
    imports: [
        //MaterialModule.forRoot(),
        CommonModule,
        HttpModule,
        FormsModule,
        ModalModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'EmployeeCreate', component: EmployeeCreate },
            { path: 'EmployeeUpdate', component: EmployeeUpdate },
            { path: '**', redirectTo: 'home' }

        ])
    ]
})
export class AppModuleShared {
}
