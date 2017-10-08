import {Injectable, EventEmitter} from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import {TypeModel} from "../component/types/type-model";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class TypeApiService {
    private typeModelList: TypeModel[] = [];
    typesChanged = new EventEmitter<TypeModel[]>();

    constructor(private http: Http) {
        this.fetchData();
    }

    getTypeModelList() {
        return this.typeModelList;
    }

    fetchData() {
        return this.http.get('./api/types')
            .map((response: Response) => response.json())
            .subscribe(
                (data: TypeModel[]) => {
                    this.typeModelList = data;
                    console.log("4: ", this.typeModelList);
                    this.typesChanged.emit(this.typeModelList);
                }
            );
    }


    search(q: string): Observable<any> {
        if (!q || q === '*') {
            q = '';
        } else {
            q = q.toLowerCase();
        }
        console.log(q);
        return this.getAll().map(data => data.filter(item => JSON.stringify(item).toLowerCase().includes(q)));
    }

    getAll() {
        return this.http.get('./api/types')
            .map((res: Response) => res.json());
    }

    save(user: TypeModel) {
        // localStorage['person' + person.id] = JSON.stringify(person);
        console.log(user);
        const body = JSON.stringify(user);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (user.id > 0) {
            console.log("in if");
            return this.http.put('./api/type', body, {
                headers: headers
            })
                .map((data: Response) => data.json())
                .catch(this.handleError);
        } else {
            return this.http.post('./api/type', body, {
                headers: headers
            })
                .map((data: Response) => data.json())
                .catch(this.handleError);
        }
    }

    private handleError(error: any) {
        console.log(error);
        return Observable.throw(error.json());
    }
}
