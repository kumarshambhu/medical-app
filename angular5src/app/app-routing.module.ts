import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from "./components/contact/contact.component";
import {SubTypeComponent} from "./components/masterscreen/sub-type/sub-type.component";
import {TypeComponent} from "./components/masterscreen/type/type.component";
import {CompanyInformationComponent} from "./components/masterscreen/company-information/company-information.component";
import {UserInformationComponent} from "./components/masterscreen/user-information/user-information.component";
import {ShowBillComponent} from "./components/generatereport/show-bill/show-bill.component";
import {CollectionComponent} from "./components/generatereport/collection/collection.component";
import {GenerateBillComponent} from "./components/transactionspages/generate-bill/generate-bill.component";
import {PatientInformationComponent} from "./components/transactionspages/patient-information/patient-information.component";
import {PatientVisitComponent} from "./components/transactionspages/patient-visit/patient-visit.component";
import {UserListComponent} from "./components/masterscreen/user-information/user-list.component";
import {UsersComponent} from "./components/masterscreen/user-information/users.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'subtype',
        component: SubTypeComponent,
    },
    {
        path: 'type',
        component: TypeComponent,
    },
    {
        path: 'companyinfo',
        component: CompanyInformationComponent,
    },
    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: 'showbill',
        component: ShowBillComponent,
    },
    {
        path: 'collection',
        component: CollectionComponent,
    },
    {
        path: 'genearatebill',
        component: GenerateBillComponent,
    },
    {
        path: 'patientinfo',
        component: PatientInformationComponent,
    },
    {
        path: 'patientvisit',
        component: PatientVisitComponent,
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes, {useHash: true})]

})
export class AppRoutingModule {
}
