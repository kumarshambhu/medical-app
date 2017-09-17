/**
 * Created by Shambhu on 4/20/2017.
 */
import { RouterModule, Routes } from '@angular/router';

import { TypeComponent } from "./type/type.component";
import { SubtypeComponent } from "./subtype/subtype.component";
import {CompanyinfoComponent} from "./companyinfo/companyinfo.component";
import {UserinfoComponent} from "./userinfo/userinfo.component";
import {GenerateBillComponent} from "./generate-bill/generate-bill.component";
import {PatientInfoComponent} from "./patient-info/patient-info.component";
import {PatientVisitComponent} from "./patient-visit/patient-visit.component";
import {ShowbillComponent} from "./showbill/showbill.component";
import {BillCollectionComponent} from "./bill-collection/bill-collection.component";
import {HomeComponent} from "./home/home.component";


const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'type', redirectTo: '/type', pathMatch: 'full'},
    {path: 'type', component: TypeComponent},
    {path: 'subtype', component: SubtypeComponent},
    {path: 'companyinfo', component: CompanyinfoComponent},
    {path: 'userinfo', component: UserinfoComponent},
    {path: 'showbill', component: ShowbillComponent},
    {path: 'generatebill', component: GenerateBillComponent},
    {path: 'patientinfo', component: PatientInfoComponent},
    {path: 'billcollection', component: BillCollectionComponent},
    {path: 'patientvisit', component: PatientVisitComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
