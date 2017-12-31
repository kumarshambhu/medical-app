import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CommonService {

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    return this.http.get('./assets/data/countries-default.json');
  }

  getAllLanguages(): Observable<any> {
    return this.http.get('./assets/data/languages-default.json');
  }


}
