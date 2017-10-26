import {Component, OnInit} from '@angular/core';
import {TypeModel} from "../types/type-model";

@Component({
    selector: 'app-showbill',
    templateUrl: './showbill.component.html',
    styleUrls: ['./showbill.component.css']
})
export class ShowbillComponent implements OnInit {
    visible = true;
    constructor() {
    }

    ngOnInit() {
    }

    onOpen($event: Event) {
        console.log("Open");
        this.visible = true;
    }

    onClose($event: Event) {
        console.log("Close");
        this.visible = false;
    }
}
