import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType} from "@angular/common/http";
import {TypeService} from "../../../services/type.service";
import {MatDialog, MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {Type} from "../../../interfaces/type";
import {MyDataSource} from "../../../utils/my-data-source";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {ExampleDialogComponent} from "../../example-dialog.component";
import {TypeDialogComponent} from "./type-dialog.component";

@Component({
    selector: 'app-type',
    templateUrl: './type.component.html',
    styleUrls: ['./type.component.css'],
    providers: [TypeService]
})
export class TypeComponent implements OnInit, AfterViewInit {
    displayedColumns = ['id', 'name', 'dateofentry', 'deleted', 'actionsColumn'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    profileData = [];
    dataSource = new MatTableDataSource(this.profileData);

    ngOnInit() {
        this.getAllTypes();
    }

    ngAfterViewInit() {

    }

    constructor(private http: HttpClient, private typeService: TypeService,
                public dialog: MatDialog, private snackBar: MatSnackBar) {
    }

    getAllTypes() {
        this.typeService.getAllTypes().subscribe(data => {
            this.dataSource.data = (data);
            this.dataSource.paginator = this.paginator;
        });
    }

    editType(element) {
        console.log(element);
    }


    openDialog(element): void {
        console.log(element);
        const dialogRef = this.dialog.open(TypeDialogComponent, {
            data: element
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log("result : ", result);
            if (result === undefined || result === null) {
                this.snackBar.open('No Data Change', 'Close', {
                    duration: 3000, verticalPosition: "top"
                });
            }else {
                if (result.deleted === true) {
                    result.deleted = 1;
                }else {
                    result.deleted = 0;
                }
                this.typeService.save(result).subscribe(result1 => {
                    this.snackBar.open('Record Updated', 'Close', {
                        duration: 3000, verticalPosition: "top"
                    });
                    this.getAllTypes();
                }, error => console.error(error));
            }
            console.log('The dialog was closed', result);
        });
    }

}
