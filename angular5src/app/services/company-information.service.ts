import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Company} from "../interfaces/company";

@Injectable()
export class CompanyInformationService {

    constructor(private http: HttpClient) {
    }

    public getCompanyInfo(): Observable<any> {
        // return this.http.get('./assets/data/company.json');
         return this.http.get('./api/company');
    }

    save(company: Company): Observable<Object> {
        console.log("company['id']:" + company['id']);
        let result: Observable<Object>;
        if (company['id'] !== undefined && company['id'] > 0) {
            result = this.http.put('./api/company', company);
        } else {
            result = this.http.post('./api/company', company);
        }
        return result;
    }

}
