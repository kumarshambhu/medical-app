import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit, OnDestroy {
  type = {
      "id": 1,
      "name": "test",
      "dateofentry": "2017-07-14T06:11:30.632Z",
      "deleted": 0
  };
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {

  }
    openSnackBar() {
        this.snackBar.open('Message \n archived','Close', {
            duration: 300000, verticalPosition: "top"
        });
    }
    ngOnDestroy() {
        this.snackBar.open('Message deleted', 'Undo', {
            duration: 3000, horizontalPosition: "start"
        });
    }
}
