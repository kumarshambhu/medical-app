import {Component, OnInit} from '@angular/core';
import {TypeModel} from "../type-model";
import {TypeApiService} from "../../../services/type-api.service";
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    query: string;
    searchResults: Array<TypeModel>;

    constructor(private typeApi: TypeApiService) {
    }

    ngOnInit() {
    }
    search(): void {
        this.typeApi.search(this.query).subscribe(
            data => { this.searchResults = data; },
            error => console.log(error)
        );
    }


}
