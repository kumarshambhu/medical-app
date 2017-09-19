import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { SubtypeComponent } from './component/subtype/subtype.component';
import {routing} from "./app.routing";
import { HeaderComponent } from './header/header.component';
import { UserinfoComponent } from './component/userinfo/userinfo.component';
import { CompanyinfoComponent } from './component/companyinfo/companyinfo.component';
import { ShowbillComponent } from './component/showbill/showbill.component';
import { GenerateBillComponent } from './component/generate-bill/generate-bill.component';
import { PatientVisitComponent } from './component/patient-visit/patient-visit.component';
import { PatientInfoComponent } from './component/patient-info/patient-info.component';
import { BillCollectionComponent } from './component/bill-collection/bill-collection.component';
import { HomeComponent } from './component/home/home.component';
import { TypeApiService } from './services/type-api.service';
import { SubTypeApiService } from './services/sub-type-api.service';
import { TypesComponent } from './component/types/types.component';
import { TypeListComponent } from './component/types/type-list/type-list.component';
import { TypeDetailsComponent } from './component/types/type-details/type-details.component';
import {TypeItemComponent} from "./component/types/type-list/type-item.component";



@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    SubtypeComponent,
    HeaderComponent,
    UserinfoComponent,
    CompanyinfoComponent,
    ShowbillComponent,
    GenerateBillComponent,
    PatientVisitComponent,
    PatientInfoComponent,
    BillCollectionComponent,
    HomeComponent,
    TypesComponent,
    TypeListComponent,
    TypeDetailsComponent,
    TypeItemComponent
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
  providers: [TypeApiService, SubTypeApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
