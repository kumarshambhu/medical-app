import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  getEmployeeDetail(): Observable<any> {
    return this.http.get('./assets/data/employee.json');
  }

}
