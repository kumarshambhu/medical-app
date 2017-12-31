import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ExampleDialogComponent} from "../../example-dialog.component";
import {User} from "../../../models/user";

@Component({
    selector: 'app-user-information',
    templateUrl: './user-information.component.html',
    styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
    animal: string;
    edit = false;
    @Input() userModel: User; // = new User(0, '', 0, '');
    constructor() {
      console.log("in UserInformationComponent constructor");
    }

    ngOnInit() {
        this.userModel = new User(0, '', 0, '');
        console.log("userModel: ", this.userModel);
    }



    saveUserInfo(userData: User) {

    }
    resetUser() {
        this.userModel = new User(0, '', 0, '');
    }

}


