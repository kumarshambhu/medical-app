import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './components/about/about.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import 'hammerjs';
import {ContactComponent} from './components/contact/contact.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";
import {MenuComponent} from './components/menu/menu.component';
import {CompanyInformationComponent} from './components/masterscreen/company-information/company-information.component';
import {UserInformationComponent} from './components/masterscreen/user-information/user-information.component';
import {CollectionComponent} from './components/generatereport/collection/collection.component';
import {ShowBillComponent} from './components/generatereport/show-bill/show-bill.component';
import {TypeComponent} from './components/masterscreen/type/type.component';
import {SubTypeComponent} from './components/masterscreen/sub-type/sub-type.component';
import {GenerateBillComponent} from './components/transactionspages/generate-bill/generate-bill.component';
import {PatientInformationComponent} from './components/transactionspages/patient-information/patient-information.component';
import {PatientVisitComponent} from './components/transactionspages/patient-visit/patient-visit.component';
import {ExampleDialogComponent} from './components/example-dialog.component';
import { TypeDialogComponent } from './components/masterscreen/type/type-dialog.component';
import {MatDatepickerIntl} from "@angular/material";
import { SubtypeDialogComponent } from './components/masterscreen/sub-type/subtype-dialog.component';
import { UserListComponent } from './components/masterscreen/user-information/user-list.component';
import { UserService } from './services/user.service';
import { UsersComponent } from './components/masterscreen/user-information/users.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ContactComponent,
        MenuComponent,
        CompanyInformationComponent,
        UserInformationComponent,
        CollectionComponent,
        ShowBillComponent,
        TypeComponent,
        SubTypeComponent,
        GenerateBillComponent,
        PatientInformationComponent,
        PatientVisitComponent,
        ExampleDialogComponent,
        TypeDialogComponent,
        SubtypeDialogComponent,
        UserListComponent,
        UsersComponent
    ],
    imports: [
        AppRoutingModule, FlexLayoutModule,
        FormsModule,
        BrowserModule, ReactiveFormsModule,
        BrowserAnimationsModule, MaterialModule, HttpClientModule

    ],

    entryComponents: [ExampleDialogComponent, TypeDialogComponent, SubtypeDialogComponent],
    providers: [MatDatepickerIntl, UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
