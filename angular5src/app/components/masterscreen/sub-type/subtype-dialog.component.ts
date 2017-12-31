import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-subtype-dialog',
  templateUrl: './subtype-dialog.component.html',
  styleUrls: ['./subtype-dialog.component.css']
})
export class SubtypeDialogComponent implements OnInit {
  private typelist;
  private subtype;
  constructor(public dialogRef: MatDialogRef<SubtypeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.typelist = this.data.typelist;
    console.log(this.typelist);
    this.subtype = Object.assign({}, this.data.subtype);
  }

}
