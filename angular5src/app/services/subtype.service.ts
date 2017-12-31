import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Subtype} from "../interfaces/subtype";

@Injectable()
export class SubtypeService {

    constructor(private http: HttpClient) {
    }

    getAllTypes(): Observable<any> {
        return this.http.get('./assets/data/types.json');
        // return this.http.get('./api/types');
    }

    getAllSubTypes(): Observable<any> {
         return this.http.get('./assets/data/subtypes.json');
        // return this.http.get('./api/types');
    }

    save(subtype: Subtype): Observable<Object> {
        console.log("type['id']:" + subtype['id']);
        let result: Observable<Object>;
        if (subtype['id']) {
            result = this.http.put('./api/subtype', subtype);
        } else {
            result = this.http.post('./api/subtype', subtype);
        }
        return result;
    }

}
