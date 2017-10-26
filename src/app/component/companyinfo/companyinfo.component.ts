import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-companyinfo',
    templateUrl: './companyinfo.component.html',
    styleUrls: ['./companyinfo.component.css']
})
export class CompanyinfoComponent implements OnInit {
    text: string;
    constructor() {
    }

    ngOnInit() {
    }

    eventHandler(event: any) {
        console.log("event: " + event);
        this.text = event;
    }
}
