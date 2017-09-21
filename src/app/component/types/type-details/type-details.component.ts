import {Component, Input, OnInit} from '@angular/core';
import {TypeModel} from "../type-model";
import {FormControl, FormGroup} from "@angular/forms";
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-type-details',
    templateUrl: './type-details.component.html',
    styleUrls: ['./type-details.component.css']
})
export class TypeDetailsComponent implements OnInit {
    @Input() selectedType: TypeModel;

    constructor() {
    }

    myform: FormGroup;

    ngOnInit() {
        this.myform = new FormGroup({
            id: new FormControl(),
            name: new FormControl(),
            deleted: new FormControl(),
            dateofentry: new FormControl()
        });
    }

    onSubmit(selectedType) {
        console.log(selectedType);
    }

}
