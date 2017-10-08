/**
 * Created by Shambhu on 4/20/2017.
 */
import { RouterModule, Routes } from '@angular/router';

import { SubtypeComponent } from "./component/subtype/subtype.component";
import {CompanyinfoComponent} from "./component/companyinfo/companyinfo.component";
import {UserinfoComponent} from "./component/userinfo/userinfo.component";
import {GenerateBillComponent} from "./component/generate-bill/generate-bill.component";
import {PatientInfoComponent} from "./component/patient-info/patient-info.component";
import {PatientVisitComponent} from "./component/patient-visit/patient-visit.component";
import {ShowbillComponent} from "./component/showbill/showbill.component";
import {BillCollectionComponent} from "./component/bill-collection/bill-collection.component";
import {HomeComponent} from "./component/home/home.component";
import {TypesComponent} from "./component/types/types.component";
import {SearchComponent} from "./component/types/search/search.component";


const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'type', redirectTo: '/type', pathMatch: 'full'},
    {path: 'type', component: TypesComponent},
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
