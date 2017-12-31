import {Component, OnInit, ViewChild} from '@angular/core';
import {SubtypeService} from "../../../services/subtype.service";
import {MatDialog, MatPaginator, MatSnackBar, MatTableDataSource} from "@angular/material";
import {SubtypeDialogComponent} from "./subtype-dialog.component";

@Component({
    selector: 'app-sub-type',
    templateUrl: './sub-type.component.html',
    styleUrls: ['./sub-type.component.css'],
    providers: [SubtypeService]
})
export class SubTypeComponent implements OnInit {
    displayedColumns = [ // 'id', 'typeid',
         'subtypename', 'typename', 'dateofentry', 'amount', 'actionsColumn'];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    subtypeData = [];
    typeDate = [];
    dataSource = new MatTableDataSource(this.subtypeData);

    constructor(private subtypeService: SubtypeService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.getAllTypes();
        this.getAllSubTypes();
    }
    private getAllSubTypes() {
        this.subtypeService.getAllSubTypes().subscribe(data => {
            this.dataSource.data = (data);
            this.dataSource.paginator = this.paginator;
        });
    }


    private getAllTypes() {
        this.subtypeService.getAllTypes().subscribe(data => {
           this.typeDate = data;
        });
    }

    private openDialog(element): void {
        console.log(element);
        const dialogRef = this.dialog.open(SubtypeDialogComponent, {
            data: {subtype: element, typelist: this.typeDate}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log("result : ", result);
            if (result === undefined || result === null) {
                this.snackBar.open('No Data Change', 'Close', {
                    duration: 3000, verticalPosition: "top"
                });
            }else {
                this.snackBar.open('Will save Data', 'Close', {
                    duration: 3000, verticalPosition: "top"
                });
                /*if (result.deleted === true) {
                    result.deleted = 1;
                }else {
                    result.deleted = 0;
                }
                this.typeService.save(result).subscribe(result1 => {
                    this.snackBar.open('Record Updated', 'Close', {
                        duration: 3000, verticalPosition: "top"
                    });
                    this.getAllTypes();
                }, error => console.error(error));*/
            }
            console.log('The dialog was closed', result);
        });
    }
}

