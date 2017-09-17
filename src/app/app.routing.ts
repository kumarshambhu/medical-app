/**
 * Created by Shambhu on 4/20/2017.
 */
import { RouterModule, Routes } from '@angular/router';

import { TypeComponent } from "./type/type.component";
import { SubtypeComponent } from "./subtype/subtype.component";
import {UserInformationComponent} from "./user-information/user-information.component";
import {CompanyInformationComponent} from "./company-information/company-information.component";


const APP_ROUTES: Routes = [
    {path: 'type', redirectTo: '/type', pathMatch: 'full'},
    {path: 'type', component: TypeComponent},
    {path: 'subtype', component: SubtypeComponent},
    {path: 'company-information', component: CompanyInformationComponent},
    {path: 'user-information', component: UserInformationComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
