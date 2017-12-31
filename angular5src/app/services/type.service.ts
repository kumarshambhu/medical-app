import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Type} from "../interfaces/type";

@Injectable()
export class TypeService {

    constructor(private http: HttpClient) {
    }

    getAllTypes(): Observable<any> {
        // return this.http.get('./assets/data/types.json');
        return this.http.get('./api/types');
    }

    save(type: Type): Observable<Object> {
        console.log("type['id']:" + type['id']);
        let result: Observable<Object>;
        if (type['id']) {
            result = this.http.put('./api/type', type);
        } else {
            result = this.http.post('./api/type', type);
        }
        return result;
    }

    remove(href: string) {
        return this.http.delete(href);
    }

}
