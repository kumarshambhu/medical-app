import {Component, Input, OnInit} from '@angular/core';
import {TypeModel} from "../type-model";
import {TypeApiService} from "../../../services/type-api.service";

@Component({
    selector: 'app-type-details',
    templateUrl: './type-details.component.html',
    styleUrls: ['./type-details.component.css']
})
export class TypeDetailsComponent implements OnInit {
    @Input() selectedType: TypeModel;

    constructor(private typeApi: TypeApiService) {

    }

    ngOnInit() {
        this.selectedType = new TypeModel(0, "", "", 1);
    }

    onSubmit(test) {
        console.log(test);
    }
    onFormSubmit(user) {
        // console.log(data.value);
        // this.typeApi.save(user.value).subscribe(data => console.log(data) );
        this.typeApi.save(user.value)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
    }
}
