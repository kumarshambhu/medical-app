import {Component, OnInit} from '@angular/core';
import {CompanyInformationService} from "../../../services/company-information.service";
import {Company} from "../../../interfaces/company";
import {MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-company-information',
    templateUrl: './company-information.component.html',
    styleUrls: ['./company-information.component.css'],
    providers: [CompanyInformationService]
})
export class CompanyInformationComponent implements OnInit {

    edit = false;
    company = {} as Company;
    oldCompany: Company;

    constructor(private companyService: CompanyInformationService, private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.companyService.getCompanyInfo().subscribe(data => {
            if (data !== undefined && data.length >0) {
                this.company = data[0];
                console.log("this.company: ", this.company);
                this.oldCompany = Object.assign({}, data[0]);
                console.log("this.oldCompany: ", this.oldCompany);
            }

        });

    }

    public editCompany(flag) {
        this.edit = flag;
    }

    public resetData() {
        this.company = Object.assign({}, this.oldCompany);
        this.edit = false;
    }
    public updateCompany(data) {
        // console.log(this.oldCompany, "data: ", data);
        this.edit = false;

        this.companyService.save(data).subscribe(result1 => {
            console.log("result1: ", result1);
            this.snackBar.open('Record Updated', 'Close', {
                duration: 3000, verticalPosition: "top"
            });
            // this.company = result1;
            console.log("this.company: ", this.company);
            // this.oldCompany = Object.assign({}, data);
        }, error => console.error(error));
    }

}
