import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NouisliderModule } from 'ng2-nouislider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { MdAutocompleteModule,  MdButtonModule,  MdButtonToggleModule,  MdCardModule,  MdCheckboxModule,  MdChipsModule,
  MdDatepickerModule, MdDialogModule, MdExpansionModule, MdGridListModule, MdIconModule, MdInputModule,
  MdListModule, MdMenuModule, MdNativeDateModule, MdPaginatorModule, MdProgressBarModule, MdProgressSpinnerModule,
  MdRadioModule, MdRippleModule, MdSelectModule, MdSidenavModule, MdSliderModule, MdSlideToggleModule, MdSnackBarModule,
  MdSortModule, MdTableModule, MdTabsModule, MdToolbarModule, MdTooltipModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpModule} from '@angular/http';
import 'hammerjs';
import { TypeComponent } from './type/type.component';
import { SubtypeComponent } from './subtype/subtype.component';
import {routing} from "./app.routing";
import { HeaderComponent } from './header/header.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CompanyinfoComponent } from './companyinfo/companyinfo.component';
import { ShowbillComponent } from './showbill/showbill.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { PatientVisitComponent } from './patient-visit/patient-visit.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { BillCollectionComponent } from './bill-collection/bill-collection.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    TypeComponent,
    SubtypeComponent,
    HeaderComponent,
    UserinfoComponent,
    CompanyinfoComponent,
    ShowbillComponent,
    GenerateBillComponent,
    PatientVisitComponent,
    PatientInfoComponent,
    BillCollectionComponent,
    HomeComponent
  ],
  entryComponents: [DialogComponent],
  exports: [
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, BrowserAnimationsModule,
    MdAutocompleteModule, MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule,
    MdDatepickerModule, MdDialogModule, MdExpansionModule, MdGridListModule, MdIconModule, MdInputModule,
    MdListModule, MdMenuModule, MdNativeDateModule, MdPaginatorModule, MdProgressBarModule, MdProgressSpinnerModule,
    MdRadioModule, MdRippleModule, MdSelectModule, MdSidenavModule, MdSliderModule, MdSlideToggleModule,
    MdSnackBarModule, MdSortModule, MdTableModule, MdTabsModule, MdToolbarModule, MdTooltipModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
