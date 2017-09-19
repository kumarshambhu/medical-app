import {Component, Input, OnInit} from '@angular/core';
import {TypeModel} from "../type-model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.component.html',
  styleUrls: ['./type-details.component.css']
})
export class TypeDetailsComponent implements OnInit {
  @Input() selectedType: TypeModel;
  constructor() { }

  myform: FormGroup;

  ngOnInit() {
    this.myform = new FormGroup({
      typeId: new FormControl(),
      typeName: new FormControl(),
      isActive: new FormControl(),
      dateCreated: new FormControl()
    });
  }

}
