import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatTableDataSource} from "@angular/material";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {ExampleDialogComponent} from "../../example-dialog.component";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    providers: [UserService]
})
export class UserListComponent implements OnInit  {

    @Output() user = new EventEmitter<User>();
    displayedColumns = ['username', 'usertypename', 'actionsColumn'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    usertypes = [];
    dataSource = new MatTableDataSource();

    ngOnInit() {
        console.log("in user init");
        this.getAllUserTypes();
        this.getAllUsers();
    }


    constructor(private userService: UserService,
                private snackBar: MatSnackBar, public dialog: MatDialog) {
    }

    getAllUsers() {
        this.userService.getAllUsers().subscribe(data => {
            this.dataSource.data = (data);
            this.dataSource.paginator = this.paginator;
        });
    }

    getAllUserTypes() {
        this.userService.getAllUserTypes().subscribe(data => {
            this.usertypes = data;
        });
    }

    editType(element: User) {
        console.log("Emitting");
        this.user.emit(element);
    }

    openDialog(element): void {
        const dialogRef = this.dialog.open(ExampleDialogComponent, {
            width: '250px',
            data: { name: element.username}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            if (result === true) {
                console.log('Delete the data');
            }
            else {
                console.log("Don't Delete the data");
            }

        });
    }

}
