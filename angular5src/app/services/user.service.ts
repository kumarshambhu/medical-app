import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
    }

    getAllUserTypes(): Observable<any> {
        return this.http.get('./assets/data/usertype.json');
        // return this.http.get('./api/types');
    }

    getAllUsers(): Observable<any> {
        return this.http.get('./assets/data/users.json');
        // return this.http.get('./api/types');
    }

}
