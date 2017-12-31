import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
    selector: 'app-type-dialog',
    templateUrl: './type-dialog.component.html',
    styleUrls: ['./type-dialog.component.css']
})
export class TypeDialogComponent implements OnInit {
    type;
    constructor(public dialogRef: MatDialogRef<TypeDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
       this.type = Object.assign({}, this.data);
        if (this.data.deleted === 1) {
            this.type.deleted = true;
        } else {
            this.type.deleted = false;
        }
    }

}
