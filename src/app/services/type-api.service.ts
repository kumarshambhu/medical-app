import {Injectable, EventEmitter} from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import {TypeModel} from "../component/types/type-model";
import 'rxjs/add/operator/map';

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

}
